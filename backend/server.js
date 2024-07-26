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
app.post(`${prefix}/generate/nonsense`, (req, res) => {
  console.log('Received request:', req.body)
  const params = req.body.params;
  console.log(params);
  const result = `Generate Nonsense for: ${params}`;
  console.log('Generate reqsponse:', result)
  res.json({ success: true, data: result, error: null});
});


// 生成名称
app.post(`${prefix}/generate/name`, async (req, res) => {
  console.log('Received request:', req.body)
  const params = req.body.params;
  const result = await generateCompletion(params);
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
