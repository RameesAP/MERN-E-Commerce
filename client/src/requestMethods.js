import axios from 'axios'


const BASE_URL ="http://localhost:5000"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTJiOTQ4NDQzYjMwMzc4YmZmNDRkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzU2MzY2NywiZXhwIjoxNjgzODIyODY3fQ.9bObqG2d8nPRoQQr_2XAP2o92GJvauDmRCOGKmF781I"

export const publicRequest= axios.create({
    baseURL:BASE_URL
})

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})