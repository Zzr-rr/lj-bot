// llm.js
const axios = require('axios');

const generateCompletion = async (prompt, address) => {
  const apiKey = 'sk-39aca489abb54e3891728277169c1417'; // 请替换为你的 API Key
  try {
    const response = await axios.post(
      address,
      {
        input: {
          prompt: prompt
        },
        parameters: {},
        debug: {}
      },
      {
        headers: {
          'Authorization': 'Bearer ' + apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error calling the API:', error);
    throw error;
  }
};

module.exports = generateCompletion;
