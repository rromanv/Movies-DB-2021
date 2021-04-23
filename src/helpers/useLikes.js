import { ref } from 'vue'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

export const add = async (like) => {
  await api.post('/likes', { like })
}

export const remove = async (like) => {
  await api.delete('/likes', { like })
}

export const countByObjectId = async (objectId) => {
  return await api.get(`likes/count/object/${objectId}`)
}

export const countByUsertId = async (userId) => {
  return await api.get(`likes/count/user/${userId}`)
}
