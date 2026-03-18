export default function Faq(){

  const perguntas=[
    {
      pergunta:"Quanto custa contratar um corretor?",
      resposta:"A comissão normalmente é paga apenas na conclusão."
    },
    {
      pergunta:"Você ajuda com financiamento?",
      resposta:"Sim, acompanho todo o processo."
    },
    {
      pergunta:"Atende apenas Aracaju?",
      resposta:"Atendo toda a região metropolitana."
    }
  ]

  return(

    <section className="py-24 bg-light">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl text-center mb-12">
          Dúvidas frequentes
        </h2>

        {perguntas.map((p,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow mb-4">

            <h3 className="font-semibold">{p.pergunta}</h3>

            <p className="text-gray-500 text-sm">{p.resposta}</p>

          </div>
        ))}

      </div>

    </section>

  )

}