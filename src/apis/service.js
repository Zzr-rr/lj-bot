import requestApi from "./requestApi"
import axios from "axios"

// 生成废话
const generateNonsense = async params => {
  console.log(`${requestApi.generateNonsense}`, params);
  const response = await axios.post(`${requestApi.generateNonsense}`, {
    params
  })
  return response.data
}; 

// 生成名称
const generateName = async params => {
  console.log(`${requestApi.generateName}`, params);
  const response = await axios.post(`${requestApi.generateName}`, {
    params
  })
  return response.data
}; 

export default {
  generateNonsense,
  generateName
}