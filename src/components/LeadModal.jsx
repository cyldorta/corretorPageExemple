import { useState } from "react"
import { X, User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react"
import { postLead } from "../services/api"
import { formatPhone } from "../utils/formatPhone"

export default function LeadModal({ imovel, close }) {
  const [form, setForm] = useState({ nome:"", email:"", telefone:"", mensagem:"" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === "telefone" ? formatPhone(value) : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await postLead(imovel.id, form)
      setSuccess(true)
    } catch (err) {
      console.error(err)
      alert("Erro ao enviar interesse")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-up">

        {/* HEADER */}
        <div className="bg-primary px-8 pt-8 pb-6 relative">
          <button
            onClick={close}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">Tenho Interesse</p>
          <h3 className="text-white font-heading text-xl font-bold leading-tight">
            {imovel?.titulo}
          </h3>
        </div>

        <div className="px-8 py-8">
          {success ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-2">Mensagem enviada!</h4>
              <p className="text-gray-500 text-sm mb-6">
                João entrará em contato com você em breve. Fique de olho no seu WhatsApp!
              </p>
              <button
                onClick={close}
                className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name:"nome",     type:"text",  placeholder:"Seu nome completo",icon:<User size={15} /> },
                { name:"email",    type:"email", placeholder:"Seu melhor e-mail", icon:<Mail size={15} /> },
                { name:"telefone", type:"tel",   placeholder:"(79) 9xxxx-xxxx",   icon:<Phone size={15} /> },
              ].map(({ name, type, placeholder, icon }) => (
                <div key={name} className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                    value={form[name]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  />
                </div>
              ))}

              <div className="relative">
                <div className="absolute left-3.5 top-3.5 text-gray-400"><MessageSquare size={15} /></div>
                <textarea
                  name="mensagem"
                  placeholder="Deixe uma mensagem (opcional)"
                  rows={3}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-gold text-primary font-bold py-4 rounded-xl transition-all duration-300 shadow-gold disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Interesse
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
