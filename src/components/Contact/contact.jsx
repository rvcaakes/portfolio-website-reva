
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const EMAILJS_SERVICE_ID = "service_jlfjvjd";
const EMAILJS_TEMPLATE_ID = "template_prltwyo";
const EMAILJS_PUBLIC_KEY = "gjVVhOfdjZvT9CWLO";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // 1. Simpan pesan ke Firebase Firestore
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      // 2. Kirim notifikasi email melalui EmailJS
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            name: form.name,
            email: form.email,
            subject: "Pesan Baru dari Portofolio Reva",
            title: "Pesan Baru dari Portofolio Reva",
            message: form.message,
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );

        setStatus({
          type: "success",
          message:
            "Pesan berhasil dikirim! Terima kasih sudah menghubungi Reva 💗",
        });
      } catch (emailError) {
        console.error("EmailJS error:", emailError);

        setStatus({
          type: "warning",
          message:
            "Pesan sudah tersimpan, tetapi notifikasi email gagal dikirim. Silakan coba lagi nanti.",
        });
      }

      // 3. Kosongkan form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Firebase error:", error);

      setStatus({
        type: "error",
        message:
          "Pesan gagal disimpan. Silakan periksa koneksi dan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-24" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 max-w-2xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Message..."
          value={form.message}
          onChange={handleChange}
          className="p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-zinc-800 py-3 rounded border border-zinc-700 hover:bg-zinc-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status.message && (
          <p
            role="status"
            className={`text-center ${
              status.type === "success"
                ? "text-green-400"
                : status.type === "warning"
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
