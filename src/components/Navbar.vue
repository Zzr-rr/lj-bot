<template>
  <nav class="navbar">
    <div class="site-title">Site Title</div>
    <ul class="nav-links">
      <a href="https://github.com/Zzr-rr"><img class="icon" src="../assets/icons/github-mark.png" alt="Github Icon"></a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #acd6c1;
  color: white;
}

.site-title {
  font-size: 2vw;
  /* 使用vw单位使字体自适应 */
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links li {
  margin-left: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.5vw;
  /* 使用vw单位使字体自适应 */
}

.icon {
  width: 2vw;
  /* 使用vw单位使图片自适应 */
  height: auto;
  /* 保持图片比例 */
}

/* 使用媒体查询调整小屏幕的样式 */
@media (max-width: 600px) {
  .site-title {
    font-size: 4vw;
    /* 在小屏幕上增大字体 */
  }

  .nav-links a {
    font-size: 3vw;
    /* 在小屏幕上增大字体 */
  }

  .icon {
    width: 4vw;
    /* 在小屏幕上增大图片 */
  }
}
</style>
