import Link from "next/link"
import { Twitter, TextIcon as Telegram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 bg-background border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white text-sm">© {new Date().getFullYear()} MAGICCATS</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <Telegram size={20} />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

