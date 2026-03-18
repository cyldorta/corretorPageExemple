import { Home, Search, FileCheck, Handshake } from "lucide-react"

function Servicos() {

  const servicos = [
    {
      icon: <Search size={22} />,
      titulo: "Busca personalizada",
      texto: "Encontramos imóveis que realmente atendem ao seu perfil e orçamento."
    },
    {
      icon: <Home size={22} />,
      titulo: "Compra e venda",
      texto: "Assessoria completa em todas as etapas da negociação."
    },
    {
      icon: <FileCheck size={22} />,
      titulo: "Documentação",
      texto: "Acompanhamento de toda a parte legal e burocrática."
    },
    {
      icon: <Handshake size={22} />,
      titulo: "Negociação segura",
      texto: "Garantimos transparência e segurança em cada transação."
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-light">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary gold-line-center">
            Como posso te ajudar
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm">
            Um atendimento completo para quem deseja comprar, vender ou investir
            em imóveis com segurança em Sergipe.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {servicos.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-card text-center card-premium"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                {s.icon}
              </div>

              <h3 className="font-semibold text-primary mb-2">
                {s.titulo}
              </h3>

              <p className="text-gray-500 text-sm">
                {s.texto}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Servicos