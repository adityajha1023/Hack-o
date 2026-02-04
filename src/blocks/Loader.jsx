import { useEffect } from "react"
import netflixGif from "../assets/netflix-intro.gif"

export default function Loader({ onFinish }) {
  useEffect(() => {
    // Match this duration to your GIF length (ms)
    const timer = setTimeout(() => {
      onFinish()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <img
        src={netflixGif}
        alt="Netflix Intro"
        className="w-full"
      />
    </div>
  )
}
