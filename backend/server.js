// 请求的api和请求大模型的函数
const nameApi = 'https://dashscope.aliyuncs.com/api/v1/apps/df61cd76538a41ab83efda5077f3f5e8/completion';
const nonsenseApi = 'https://dashscope.aliyuncs.com/api/v1/apps/918719c909d04dd78d2eff79f9bc6f1a/completionn';
const generateCompletion = require('./llm');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const prefix = '/api'

app.use(cors());
app.use(bodyParser.json());

// 生成废话
app.post(`${prefix}/generate/nonsense`, async (req, res) => {
  console.log('Received request:', req.body)
  const params = req.body.params;
  const result = await generateCompletion(params, nonsenseApi);
  try {
    const text = result.output.text;
    res.json({ success: true, data: text, error: null });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(500).json({ success: false, error: 'Error parsing JSON' });
  }
});

// 生成名称
app.post(`${prefix}/generate/name`, async (req, res) => {
  console.log('Received request:', req.body)
  const params = req.body.params;
  const result = await generateCompletion(params, nameApi);
  try {
    const text = result.output.text;
    const cleanedText = text.replace(/```json\n/, '').replace(/\n```$/, '');
    console.log("Return value:", cleanedText);
    res.json({ success: true, data: cleanedText, error: null });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(500).json({ success: false, error: 'Error parsing JSON' });
  }
});

// 监听接口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
