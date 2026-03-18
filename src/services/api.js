import axios from "axios"

const api = axios.create({
  baseURL:"http://localhost:8080"
})

export async function getImoveis(corretorId){

  const response = await api.get(
    `/api/public/corretores/${corretorId}/imoveis`
  )

  return response.data

}

export async function postLead(imovelId,data){

  const response = await api.post(
    `/api/public/leads/imovel/${imovelId}`,
    data
  )

  return response.data

}

export default api