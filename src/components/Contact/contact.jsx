import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Gagal kirim ");
    }

    setLoading(false);
  };

  return (
    <section className="mt-24" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

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
          className="bg-zinc-800 py-3 rounded border border-zinc-700 hover:bg-zinc-700 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully 
          </p>
        )}
      </form>
    </section>
  );
}