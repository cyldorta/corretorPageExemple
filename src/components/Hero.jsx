import { ArrowDown, Star, MapPin, TrendingUp, Home } from "lucide-react"
import video from "../assets/aracaju.mp4"

export default function Hero() {

  const stats = [
    { icon: <Home size={16} />, value: "120+", label: "Imóveis vendidos" },
    { icon: <TrendingUp size={16} />, value: "5 anos", label: "de experiência" },
    { icon: <Star size={16} />, value: "98%", label: "satisfação" }
  ]

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">

      <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-3xl px-6">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <MapPin size={13} className="text-accent" />
          <span className="text-xs uppercase">Sergipe, Brasil</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-2 border-accent overflow-hidden">
              <img src="/fotocelular.png" alt="João Silva" className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Star size={14} className="text-primary fill-primary" />
            </div>
          </div>
        </div>

        <p className="text-sm uppercase text-accent mb-3">
          João Silva Santos Dorta · CRECI 123456-SP
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Seu imóvel dos <span className="gold-shimmer">sonhos</span> em Sergipe
        </h1>

        <p className="text-white/70 mb-8">
          Especialista em imóveis residenciais e comerciais há mais de 5 anos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#servicos"
            className="flex items-center gap-2 border-2 border-white px-8 py-3 rounded-full"
          >
            <Home size={16} />
            Ver Serviços
          </a>

          <a
            href="#contato"
            className="flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded-full"
          >
            Quero Ser Atendido
            <ArrowDown size={16} />
          </a>

        </div>

        <div className="flex justify-center gap-8 mt-12">
          {stats.map((s,i)=>(
            <div key={i} className="text-center">
              <div className="flex gap-1 justify-center text-accent">
                {s.icon}
                <span className="font-bold">{s.value}</span>
              </div>
              <span className="text-xs text-white/60">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}