<template>
  <div class="container">
    <h1 class="title">Nonsense Generator</h1>
    <p class="description">Please enter the relevant topic you would like to generate</p>
    <div class="form-container">
      <el-input v-model="message" placeholder="Input here..." class="input-with-select"></el-input>
      <el-button type="primary" @click="generateNonsense">Submit</el-button>
    </div>
    <div class="result-box">
      <el-card>
        <div class="generated-text">{{ result }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElInput, ElButton, ElMessage, ElLoading, ElCard } from 'element-plus';
import service from '@/apis/service';

export default {
  components: {
    ElInput,
    ElButton,
    ElLoading,
    ElCard
  },
  setup() {
    const message = ref('');
    const result = ref('');
    const showResult = ref(false);
    const loading = ref(false);

    const generateNonsense = async () => {
      loading.value = true;
      showResult.value = false;
      try {
        ElMessage.success("提交成功");
        const response = await service.generateNonsense(message.value);
        result.value = response.data;
        showResult.value = true;
        console.log(result);
      } catch (error) {
        ElMessage.error("解析失败");
        console.error('Error generating nonsense:', error);
      } finally {
        loading.value = false;
      }
    };


    return {
      message,
      result,
      loading,
      generateNonsense
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.input-with-select {
  width: 300px;
  margin-right: 10px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: sans-serif;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 5px;
}

.description {
  font-family: 'Roboto', sans-serif;
  color: #666;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}

.result-box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.generated-text {
  font-family: 'Roboto', sans-serif;
  color: #333;
  text-align: left;
}
</style>
