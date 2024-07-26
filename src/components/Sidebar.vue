<template>
  <aside class="sidebar">
    <ul>
      <li><router-link to="/home">Introduction</router-link></li>
      <li><router-link to="/tools">Tools</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
