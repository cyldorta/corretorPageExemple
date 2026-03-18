import { Star, Quote } from "lucide-react"

export default function Depoimentos(){

  return(
    <section id="depoimentos" className="py-24 bg-primary text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          O que dizem meus clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 p-6 rounded-xl">
            <Quote className="mb-4 text-accent"/>
            João me ajudou a encontrar exatamente o que eu procurava.
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <Quote className="mb-4 text-accent"/>
            Atendimento profissional e muito transparente.
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <Quote className="mb-4 text-accent"/>
            Recomendo para quem quer comprar com segurança.
          </div>

        </div>

      </div>

    </section>
  )
}