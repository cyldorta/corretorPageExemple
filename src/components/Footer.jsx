import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark text-white">

      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* MARCA */}
          <div>
            <img src="/logo4.png" alt="MOVV" className="h-12 object-contain mb-4" />
            <p className="text-white/50 text-sm">
              Plataforma premium para corretores de imóveis em Sergipe.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>

            <ul className="space-y-2">
              {["#sobre", "#servicos", "#contato"].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* CONTATO */}
          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <MapPin size={13} className="text-accent" />
                Aracaju, Sergipe
              </li>

              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Phone size={13} className="text-accent" />
                (79) 98765-4321
              </li>

              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Mail size={13} className="text-accent" />
                joao.silva@movvcorretores.com
              </li>
            </ul>

          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>© 2026 João Silva Santos Dorta — CRECI 123456-SP</p>
          <p>
            Plataforma desenvolvida por <span className="text-accent font-semibold">MOVV</span>
          </p>
        </div>

      </div>
    </footer>
  )
}