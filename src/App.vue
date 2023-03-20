<template>
	<v-loading v-if="loading.active" />
	<v-alert />
    <router-view />
</template>

<script setup lang="ts">
import vLoading from './components/Loading.vue';
import vAlert from './components/Alert.vue';
import { useRouter } from 'vue-router';
import { useLoadingStore } from './store/store.loading';

const loading = useLoadingStore();
const router = useRouter();

</script>
<style>
</style>
