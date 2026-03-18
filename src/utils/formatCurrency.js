export function formatCurrency(valor){

  if(!valor) return "R$ 0"

  return valor.toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"
  })

}