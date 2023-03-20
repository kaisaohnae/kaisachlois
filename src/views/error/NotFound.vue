<template>
  <div id="error">
    <h2>404 NotFound</h2>
    <p>페이지를 찾을 수 없습니다.</p>
    <p><router-link to="/">홈으로</router-link></p>
  </div>
</template>

<script setup lang="ts">

</script>

<!-- eslint-disable prettier/prettier -->
<style scoped>
#error {width:60%; height:70%; font-size:20px; position:fixed; text-align:center; left:20%; top:15%; background:#f1f1f1; border-radius:10px;}
#error h1 {padding:100px 0 30px 0;}
#error h1 img {width:100px;}
#error h2 {color:#333; font-size:40px; padding:30px 0; font-weight:bold;}
#error p {color:#333; padding:20px 0 10px 0; font-weight:bold;}
#error p a {color:#000; text-decoration: underline;}
</style>
