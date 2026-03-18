import { Mail, Phone, MapPin } from "lucide-react"

export default function Contato(){

  return(

    <section id="contato" className="py-24 bg-light">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Entre em contato
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <Mail className="mx-auto mb-2 text-accent"/>
            joao.silva@movvcorretores.com
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <Phone className="mx-auto mb-2 text-accent"/>
            (79) 98765-4321
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <MapPin className="mx-auto mb-2 text-accent"/>
            Aracaju - Sergipe
          </div>

        </div>

      </div>

    </section>

  )

}