<template>
  <div class="container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content-area">
      <Sidebar />
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  width: 100%;
  /* 让 Navbar 占据整行 */
}

.content-area {
  display: flex;
  flex: 1;
  overflow: hidden;
  /* 防止内容溢出 */
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.sidebar {
  width: 200px;
  /* 设置 Sidebar 的宽度 */
}
</style>
