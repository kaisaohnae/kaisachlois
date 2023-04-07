<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div id="error">
    <h2>403 에러</h2>
    <p>현재 페이지에 권한이 없습니다.</p>
    <p><router-link to="/">홈으로</router-link></p>
  </div>
</template>

<!-- eslint-disable prettier/prettier -->
<style scoped>
#error {width:80%; height:80%; font-size:20px; position:fixed; text-align:center; left:10%; top:10%; background:#aaa; border-radius:10px;}
#error h1 {padding:100px 0 30px 0;}
#error h1 img {width:100px;}
#error h2 {color:#333; font-size:40px; padding:30px 0; font-weight:bold;}
#error p {color:#333; padding:20px 0 10px 0; font-weight:bold;}
#error p a {color:#000; text-decoration: underline;}
</style>
