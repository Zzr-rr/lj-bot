<template>
  <div class="page-container">
    <div class="profile-container">
      <img :src="avatarUrl" alt="头像" class="profile-image">
      <div class="contact-info">
        <h3>联系方式</h3>
        <p>微信: {{ weChat }}</p>
        <p>Email: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import avatarImage from '@/assets/imgs/profile-image.jpg';

export default {
  data() {
    return {
      avatarUrl: avatarImage,
      weChat: 'Zzr5872',
      email: 'zhuzr3210@163.com',
    };
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.contact-info {
  margin: 10px 0;
}

.contact-info p {
  margin: 5px 0;
  padding: 0;
  list-style: none;
}
</style>
