<template>
  <div id="home">
    <ul>
      <li @click="router.push('/')">main</li>
      <li @click="router.push('/sub')">sub</li>
    </ul>
  </div>
  
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRouter();

interface LoginInfo {
	id: string;
	password: string;
	remember: boolean;
}
</script>

<style scoped>
</style>
