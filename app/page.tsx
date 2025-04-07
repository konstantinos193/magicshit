import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8">
      {/* Header */}
      <div className="w-full max-w-3xl text-center mt-8">
        <h1 className="title">$MAGICCAT</h1>
        <p className="text-2xl font-bold text-black mb-4">ON ODIN.FUN PLATFORM</p>
      </div>

      {/* Main Character */}
      <div className="my-12">
        <div className="main-cat-container">
          <Image src="/cat1.png" alt="Main Magic Cat" fill className="cat-image main-cat" />
        </div>
      </div>

      {/* Character Showcase */}
      <div className="character-row">
        <div className="cat-container">
          <Image src="/cat7.png" alt="Fire Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container">
          <Image src="/cat3.png" alt="Angry Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container">
          <Image src="/cat4.png" alt="Cool Magic Cat" fill className="cat-image" />
        </div>
      </div>

      <div className="character-row mt-8">
        <div className="cat-container">
          <Image src="/cat10.png" alt="Cauldron Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container">
          <Image src="/cat9.png" alt="Flying Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container">
          <Image src="/cat2.png" alt="Gun Magic Cat" fill className="cat-image" />
        </div>
      </div>

      {/* Description */}
      <div className="info-box my-12">
        <p className="text-xl font-bold">A MAGICAL WIZARD CAT BRINGING SPELLS AND POTIONS TO THE BITCOIN BLOCKCHAIN</p>
      </div>

      {/* Buy Button */}
      <Link href="https://odin.fun/token/2et7" target="_blank" rel="noopener noreferrer" className="buy-button mb-8">
        BUY NOW
      </Link>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-8">
        <Link href="https://x.com/odinmagiccat" target="_blank" rel="noopener noreferrer">
          <div className="social-icon twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </div>
        </Link>
      </div>

      {/* Bottom Characters */}
      <div className="character-row mb-12">
        <div className="cat-container small">
          <Image src="/cat5.png" alt="Sad Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container small">
          <Image src="/cat6.png" alt="Surprised Magic Cat" fill className="cat-image" />
        </div>
        <div className="cat-container small">
          <Image src="/cat8.png" alt="Happy Magic Cat" fill className="cat-image" />
        </div>
      </div>
    </main>
  )
}

