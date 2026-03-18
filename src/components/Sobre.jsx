import { MapPin, Award, Users, MessageCircle, CheckCircle } from "lucide-react"

export default function Sobre() {

  const diferenciais = [
    "Atendimento personalizado",
    "Documentação sem burocracia",
    "Negociação transparente",
    "Parceria com os melhores lançamentos",
  ]

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGEM COM DECORAÇÃO */}
        <div className="relative animate-slide-right">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src="/fotocelular.png"
              alt="Corretor João"
              className="w-full object-cover"
            />
            {/* Badge flutuante */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center">
                <Award size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Corretor Certificado</p>
                <p className="text-sm font-bold text-primary">CRECI 123456-SP</p>
              </div>
            </div>
          </div>
          {/* Elemento decorativo atrás */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/8 rounded-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
        </div>

        {/* CONTEÚDO */}
        <div className="animate-fade-up">

          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin size={12} />
            Sergipe · Imóveis
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 gold-line">
            João Silva<br />Santos Dorta
          </h2>

          <p className="text-accent font-semibold text-sm tracking-wide mt-4 mb-5">
            5 anos transformando sonhos em endereços
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Especialista no mercado imobiliário de Sergipe, João une conhecimento técnico
            e sensibilidade humana para guiar cada cliente na mais importante decisão
            financeira de sua vida — com segurança, clareza e resultado.
          </p>

          {/* DIFERENCIAIS */}
          <ul className="space-y-3 mb-8">
            {diferenciais.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* STATS INLINE */}
          <div className="flex gap-8 mb-8">
            {[
              { icon: <Users size={18} className="text-accent" />,   value: "200+", label: "Clientes atendidos" },
              { icon: <Award size={18} className="text-accent" />,   value: "5★",   label: "Avaliação média"   },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-primary text-lg leading-none">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5579987654321"
            className="inline-flex items-center gap-3 bg-accent hover:bg-gold text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-gold hover:shadow-lg group"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
