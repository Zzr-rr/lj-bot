<template>
  <div class="container">
    <h1 class="title">Name Generator</h1>
    <p class="description">生成与您八字相匹配的名字，寓意美好，个性独特。</p>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="120px" @submit.prevent="onSubmit"
      v-loading="loading" element-loading-text="Generating, please hold on...">
      <el-form-item label="姓氏" prop="surname">
        <el-input v-model="form.surname"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio :value="'男'">男</el-radio>
          <el-radio :value="'女'">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="农历生日" prop="birthdate">
        <el-date-picker v-model="form.birthdate" type="date" placeholder="选择日期" @change="generateBazi"
          class="form-control"></el-date-picker>
      </el-form-item>
      <el-form-item label="出生时间" prop="birthtime">
        <el-time-select v-model="form.birthtime" start="00:00" step="00:15" end="24:00" placeholder="选择时间"
          @change="generateBazi" class="form-control" />
      </el-form-item>
      <el-form-item label="偏好" prop="reference">
        <el-input v-model="form.reference"></el-input>
      </el-form-item>
      <el-form-item label="生辰八字" prop="bazi">
        <el-input v-model="form.bazi" readonly></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 结果展示框 -->
    <NameAnalysisTable :results="result" :showResult="showResult" @close="resetForm" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import BaZiCalculator from '@/common/bazi';
import NameAnalysisTable from '../../components/NameAnalysisTable.vue'

import service from '@/apis/service';

export default {
  name: 'BirthForm',
  components: {
    NameAnalysisTable
  },
  setup() {
    const formRef = ref(null);
    const form = ref({
      surname: '',
      gender: '男',
      birthdate: '',
      birthtime: '',
      bazi: '',
      reference: ''
    });

    const showResult = ref(false);
    const loading = ref(false);
    const result = ref([]);

    const rules = {
      surname: [{ required: true, message: '请输入姓氏', trigger: 'blur' }],
      gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
      birthdate: [{ required: true, message: '请选择出生日期', trigger: 'change' }],
      birthtime: [{ required: true, message: '请选择出生时间', trigger: 'change' }]
    };

    const generateBazi = () => {
      if (form.value.birthdate && form.value.birthtime) {
        const date = new Date(form.value.birthdate);
        form.value.bazi = BaZiCalculator.calculateBaZi(date, form.value.birthtime);
      } else {
        form.value.bazi = '';
      }
    };

    const onSubmit = async () => {
      await formRef.value.validate(async (valid) => {
        if (valid) {
          ElMessage.success('提交成功');
          loading.value = true;
          // 发送请求
          const params = {
            surname: form.value.surname,
            gender: form.value.gender,
            reference: form.value.reference,
            bazi: form.value.bazi
          };
          try {
            const response = await service.generateName(params);
            console.log(1, response);
            result.value = JSON.parse(response.data);  // Assuming the response is already parsed JSON from your API
            showResult.value = true;
          } catch (error) {
            console.error('API error:', error);
            ElMessage.error('生成失败，请稍后重试');
          }
          loading.value = false;
        } else {
          ElMessage.error('请填写完整信息');
          loading.value = false;
        }
      });
    };

    const onReset = () => {
      formRef.value.resetFields();
      showResult.value = false;
    };

    const resetForm = () => {
      showResult.value = false;
    };

    return {
      formRef, form, rules, showResult, loading, result, generateBazi, onSubmit, onReset, resetForm
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.form-control {
  width: 100%;
}

.result-box {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  font-family: sans-serif;
  /* 使用现代化的Roboto字体 */
  color: #333;
  /* 深灰色字体颜色 */
  text-align: center;
  /* 标题居中 */
  margin-top: 20px;
  margin-bottom: 5px;
}

.description {
  font-family: 'Roboto', sans-serif;
  /* 保持与标题相同的字体 */
  color: #666;
  /* 稍微浅一些的灰色增加对比 */
  text-align: center;
  /* 描述文字也居中 */
  font-size: 14px;
  /* 适中的字体大小 */
  margin-bottom: 20px;
  /* 增加与表单的距离 */
}
</style>
