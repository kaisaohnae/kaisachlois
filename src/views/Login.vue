<template>
  <div id="login">
    <form v-on:submit.prevent="submitForm()" method="POST" ref="login">
      <fieldset>
        <legend>로그인</legend>
        <h1>Administrator</h1>
        <label class="label">
          <span class="icon">&#xe809;</span>
          <input type="text" v-model="param.id" name="id" placeholder="아이디를 입력해주세요" required />
        </label>
        <label class="label">
          <span class="icon">&#xe81c;</span>
          <input type="password" v-model="param.password" name="password" placeholder="비밀번호를 입력해주세요" required />
        </label>
        <label>
          <input type="checkbox" v-model="param.remember" name="remember" /> <span class="remember"> 아이디 저장</span>
        </label>
        <button type="submit">로그인</button>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAlertStore } from '../store/store.alert';
import { useAuthStore } from '../store/store.auth';
import { useRouter } from 'vue-router';
import UserService from '../service/auth/UserService';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const alert = useAlertStore();
const auth = useAuthStore();
const router = useRouter();

interface LoginInfo {
  id: string;
  password: string;
  remember: boolean;
}

const cookieId = cookies.get('id') || '';

const param = reactive<LoginInfo>({
  id: cookieId,
  password: '',
  remember: (cookieId) ? true : false,
});

const submitForm = () => {
  const formData = new FormData();
  formData.append('id', param.id);
  formData.append('password', param.password);
  formData.append('remember', param.remember + '');

  if(param.remember){
    cookies.set('id', param.id);
  } else {
    cookies.remove('id');
  }
  
  UserService.getUserLogin(formData).then(
    (res) => {
      if(res && res.success) {
        auth.loginSuccess(res.data);
      } else {
        auth.loginFail();
        alert.open({title: null, message: '(' + auth.count + ') ' + res.message});
      }
    },
    (err) => {
      console.log(err);
    },
  );
};

</script>

<style scoped>
#login {width:100%; height:100%; padding-top:100px;}
#login form {width:400px; margin:0 auto; border-radius:10px; overflow:hidden; background:#fff;}
#login form fieldset {width:100%; padding:30px 0;}
#login form fieldset h1 {text-align:center; padding:20px 0; font-size:14px; color:#333;}
#login form fieldset img {width:50px; display:block; margin:0 auto;}
#login form fieldset img {width:50px; display:block; margin:0 auto;}
#login form fieldset label {width:80%; margin:10px auto; display: block; padding:5px;}
#login form fieldset .label {background:#eee; border:1px solid #ddd; border-radius:3px;}
#login form fieldset .label input {width:calc(100% - 40px); border:1px solid #eee; background:#eee;}
#login form fieldset .label input:focus {outline:1px solid #eee;}
#login form fieldset .remember {display:inline-block; padding-left:3px;}
#login form fieldset button {display:block; width:80%; clear:both; background:#ff5500; border:1px solid #ff5500; margin:10px auto; color:#fff; line-height:35px; height:40px; font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,0.3);}
#login form fieldset button:hover {background:#ff712a;}
</style>
