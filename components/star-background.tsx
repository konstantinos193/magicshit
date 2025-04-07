"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  top: string
  left: string
  size: string
  delay: string
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 3 + 1}px`,
          delay: `${Math.random() * 2}s`,
        })
      }

      setStars(newStars)
    }

    generateStars()

    window.addEventListener("resize", generateStars)
    return () => {
      window.removeEventListener("resize", generateStars)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

