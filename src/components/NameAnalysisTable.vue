<template>
  <div v-if="showResult" class="result-box">
    <el-table :data="pagedResults" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="reason" label="原因" width="180"></el-table-column>
      <el-table-column prop="bazi_analysis" label="八字分析"></el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
      layout="total, prev, pager, next" :total="results.length">
    </el-pagination>
    <el-button type="primary" @click="resetForm">关闭</el-button>
  </div>
</template>

<script>
export default {
  name: 'NameAnalysisTable',
  props: {
    // 接收外部传入的结果数组
    results: {
      type: Array,
      default: () => []
    },
    // 是否显示结果
    showResult: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5
    };
  },
  computed: {
    pagedResults() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.results.slice(start, end);
    }
  },
  methods: {
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
    },
    resetForm() {
      // 发出事件通知父组件关闭组件
      this.$emit('close');
    }
  }
};
</script>

<style>
.result-box {
  margin-top: 20px;
}
</style>
