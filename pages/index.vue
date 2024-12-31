<template>
  <div class="index">
    <div class="container py-3">
      <h1>{{ message }}</h1>
      <button class="btn btn-warning font-white" type="button" @click="goFilms">前往作品詳細頁面</button>
      <h2 class="text-skblue p-4 mt-3 bg-white rounded-5 ">{{ t('message') }}</h2>
      <p class="test">123333</p>
    </div>
    <gallery />

    <div class="form-area">
      <h1 class="text-center">測試表單</h1>
      <form class="form-style" novalidate>
        <div class="form-group row">
          <label for="name" class="col-form-label col-xl-2">姓名 Name</label>
          <div class="col-xl-10 mb-2">
            <input v-model="name" v-bind="nameAttrs" type="text" id="name" class="form-control">
            <small v-if="errors.name" class="d-block alert-text text-danger form-text mt-2">{{ errors.name }}</small>
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="email" class="col-form-label col-xl-2">信箱 E-mail</label>
          <div class="col-xl-10">
            <input v-model="email" v-bind="emailAttrs" type="email" id="email" class="form-control">
            <small v-if="errors.email" class="form-text text-danger mt-2 d-block">{{ errors.email }}</small>
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="tel" class="col-form-label col-xl-2">連絡電話 TEL</label>
          <div class="col-xl-10">
            <input v-model="tel" v-bind="telAttrs" type="tel" id="tel" class="form-control">
            <small v-if="errors.tel" class="form-text mt-2 d-block text-danger">{{ errors.tel }}</small>
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="company" class="col-form-label col-xl-2">公司/單位 Company</label>
          <div class="col-xl-10">
            <input type="text" id="company" class="form-control">
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="role" class="col-form-label col-xl-2">職稱 Role</label>
          <div class="col-xl-10">
            <input type="text" id="role" class="form-control">
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="message" class="col-form-label col-xl-2">需求 Your Message</label>
          <div class="col-xl-10">
            <textarea v-model="msg" v-bind="msgAttrs" id="message" class="form-control"></textarea>
            <small v-if="errors.message" class="form-text text-danger d-block mt-2">{{ errors.message }}</small>
          </div>
        </div>
        <div class="form-group row">
          <label for="budegt" class="col-form-label col-xl-2">預算 Budget</label>
          <div class="col-xl-10">
            <select id="budegt" class="form-select">
              <option value="" selected>請選擇預算</option>
              <option value="30萬以下">30萬以下</option>
              <option value="30萬-60萬">30萬-60萬</option>
              <option value="60萬-100萬">60萬-100萬</option>
              <option value="100萬-150萬">100萬-150萬</option>
              <option value="150萬以上">150萬以上</option>
            </select>
          </div>
        </div>
      </form>
      {{ values }}
    </div>
      <!-- <form novalidate>
        <label for="name">Name:</label>
        <input v-model="form.name" id="name" type="text" required />
        
        <label for="email">Email:</label>
        <input v-model="form.email" id="email" type="email" required />
        
        <button type="submit" @click.prevent="submit">Submit</button>
      </form> -->
    <Map />
    <Animation />
  </div>
</template>

<script setup>
  const { t, locale } = useI18n();
  const router = useRouter();
  const message = ref('我是首頁');
  const nowLocale = computed(() => `/${locale.value}`);

  function goFilms() {
    if (nowLocale.value === '/tw') {
      router.push('/films/123')
    }else if (nowLocale.value !== '/tw') {
      router.push(`${nowLocale.value}/films/123`)
    }
  }
  // watch(nowLocale, () => {
  //   goFilms();
  // })


// emailjs套件

// import emailjs from '@emailjs/browser';
// emailjs.init('user_5mf4rr6Yb80SVwTnTfOGT');

//   const form = ref({
//   name: '',
//   email: ''
// });

// function submit() {
//   emailjs
//   .send('skyice', 'template_sd', form.value)
//   .then(() => {
//     console.log('Success!!');
//   }, (error) => {
//     console.log('Failed...', error);
//   })
//   console.log(form.value)
// };

import { useForm } from 'vee-validate';
import * as yup from 'yup'; // 匯入驗證庫yup

// 定義驗證模式
const schema = yup.object({
  name: yup.string().required('此欄不可為空'),
  email: yup.string().email('請填寫正確的格式').required('此欄不可為空'), //可以帶入語言切換的腳本
  tel: yup.string().matches(/^[0-9]+$/, '電話號碼僅能包含數字').min(10,'至少需要10位數').required('電話號碼為必填項'),
  message: yup.string().required('此欄不可為空'),
});

// 使用 useForm 並傳入驗證模式
const { values, errors, defineField } = useForm({
  validationSchema: schema,
});


const [name, nameAttrs] = defineField('name');
// 定義 email 欄位 ，如果不要積極驗證（隨著內容更新驗證），可以使用 validateOnModelUpdate 禁用模型更新時的驗證
const [email, emailAttrs] = defineField('email', {
  // validateOnModelUpdate: false,
});
const [tel, telAttrs] = defineField('tel');
const [msg, msgAttrs] = defineField('message');

  </script>
  
<style lang="scss">
.form-style {
  border: 2px solid #FFF;
  border-radius: 30px;
  margin: 20px 40px;
  padding: 60px;
  background: linear-gradient(#71eeff, #6e77f3);
  color: #FFF;
  font-family: 'Microsoft Jheng hei','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>