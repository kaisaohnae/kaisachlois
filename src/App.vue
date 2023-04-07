<template>
	<v-loading v-if="loading.active" />
	<v-alert v-if="alert.active" :info="alert.info" />
	<div id="container">
		<router-view />
	</div>
</template>

<script setup lang="ts">
import vLoading from './components/Loading.vue';
import vAlert from './components/Alert.vue';
import { useLoadingStore } from './store/store.loading';
import { useAlertStore } from './store/store.alert';
import { useRouter } from 'vue-router';

const loading = useLoadingStore();
const alert = useAlertStore();
const router = useRouter();

</script>
<style scoped>
#container {width:100%; height:100%; position:relative; background:#fff;}
</style>
