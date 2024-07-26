const address = 'http://localhost:3000'
const prefix = '/api';

const requestApi = {
  // 生成废话
  generateNonsense: `${address}${prefix}/generate/nonsense`,

  // 生成名字
  generateName: `${address}${prefix}/generate/name`
}

export default requestApi;