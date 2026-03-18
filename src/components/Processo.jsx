import { Search, MessageCircle, FileCheck, Key } from "lucide-react"

export default function Processo(){

  const passos = [
    {
      icon: <Search size={20}/>,
      titulo:"1. Entendimento do perfil",
      texto:"Conversamos para entender exatamente o que você procura."
    },
    {
      icon:<MessageCircle size={20}/>,
      titulo:"2. Seleção de oportunidades",
      texto:"Apresento as melhores opções do mercado."
    },
    {
      icon:<FileCheck size={20}/>,
      titulo:"3. Análise e documentação",
      texto:"Garantimos que toda documentação esteja segura."
    },
    {
      icon:<Key size={20}/>,
      titulo:"4. Conclusão da compra",
      texto:"Acompanhamento até a entrega das chaves."
    }
  ]

  return(
    <section id="processo" className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Como funciona o atendimento
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {passos.map((p,i)=>(
            <div key={i} className="text-center">

              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent">
                {p.icon}
              </div>

              <h3 className="font-semibold mb-2">{p.titulo}</h3>

              <p className="text-gray-500 text-sm">{p.texto}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}