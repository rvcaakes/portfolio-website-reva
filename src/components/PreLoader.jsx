import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 900)
    const hideTimer = setTimeout(() => setLoading(false), 1300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-700 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* AURORA */}
        <Aurora
          colorStops={["#11385e", "#1f2da6", "#123699"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

        {/* CONTENT */}
        <div className="absolute flex flex-col items-center gap-6">

          {/* LOGO */}
          <div className="relative">
            <h1 className="text-white text-5xl font-bold tracking-widest animate-fadeUp">
              R
            </h1>

            {/* RING SMOOTH */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-white/20 animate-spinSlow"></div>
              <div className="absolute w-28 h-28 rounded-full border border-white/10 animate-spinReverse"></div>
            </div>
          </div>

          {/* LOADING BAR SMOOTH */}
          <div className="w-44 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full animate-loadingBar"></div>
          </div>

        </div>

        {/* STYLE */}
        <style>
          {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          .animate-spinSlow {
            animation: spinSlow 3s linear infinite;
          }

          .animate-spinReverse {
            animation: spinReverse 4s linear infinite;
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out;
          }

          @keyframes loadingBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-loadingBar {
            width: 50%;
            background: linear-gradient(90deg, transparent, white, transparent);
            animation: loadingBar 1.2s ease-in-out infinite;
          }
          `}
        </style>
      </div>
    )
  )
}

export default PreLoader