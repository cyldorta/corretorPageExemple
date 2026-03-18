export function formatPhone(value){

  value = value.replace(/\D/g,'')

  if(value.length <= 10){
    return value
      .replace(/(\d{2})(\d)/,"($1) $2")
      .replace(/(\d{4})(\d)/,"$1-$2")
  }

  return value
    .replace(/(\d{2})(\d)/,"($1) $2")
    .replace(/(\d{5})(\d)/,"$1-$2")

}