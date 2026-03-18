import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = ["sobre", "servicos", "processo", "depoimentos", "contato"]

      for (let id of sections) {
        const section = document.getElementById(id)
        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(`#${id}`)
          break
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo4.png"
            alt="MOVV"
            className="h-14 object-contain transition-all duration-300"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group
                ${
                  scrolled
                    ? "text-gray-200 hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
            >
              {label}

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  active === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}

          {/* BOTÃO TELEFONE */}
          <a
            href="tel:5579987654321"
            className={`flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300
              ${
                scrolled
                  ? "border-accent text-accent hover:bg-accent hover:text-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
          >
            <Phone size={15} />
            (79) 98765-4321
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-white" : "text-primary"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-primary/97 backdrop-blur-md`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActive(href)
                setOpen(false)
              }}
              className="text-gray-200 font-medium py-2 border-b border-white/10 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}

          {/* BOTÃO WHATSAPP */}
          <a
            href="https://wa.me/5579987654321"
            className="flex items-center justify-center gap-2 bg-accent text-primary font-bold py-3 rounded-xl mt-2"
          >
            <Phone size={16} />
            Falar com João
          </a>
        </div>
      </div>
    </nav>
  )
}