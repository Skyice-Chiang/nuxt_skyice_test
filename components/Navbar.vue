<template>
  <nav class="navbar navbar-expand-sm bg-dark">
    <div class="container">
      <h1>
        <nuxt-link :to="url" class="navbar-brand logo"> 
          <img src="~/assets/images/logo.png" alt="shark" width="50" height="50">
        </nuxt-link>
      </h1>
      
      <div class="dropdown">
        <button class="btn btn-warning dropdown-toggle btn-width" :class="{ 'btn-open' : isOpen }" type="button" @click="isOpen = !isOpen">
          {{ lang }}
        </button>
        <ul class="dropdown-menu d-block" :class="{ 'open' : isOpen }">
          <li><nuxt-link :to="switchPath('en')" class="dropdown-item" @click="lang = 'Engilsh', isOpen = !isOpen">English</nuxt-link></li>
          <li><nuxt-link :to="switchPath('ja')" class="dropdown-item" @click="lang = '日本語', isOpen = !isOpen">日本語</nuxt-link></li>
          <li><nuxt-link :to="switchPath('tw')" class="dropdown-item" @click="lang = '繁體中文', isOpen = !isOpen">繁體中文</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const switchPath = useSwitchLocalePath();
const { locale } = useI18n();
const nowLocale = computed(() => `/${locale.value}`);
const isOpen = ref(false);
let url = ref('')
let lang = ref('繁體中文');

// 網頁開啟時使用的語言
function nowLang() {
  if (nowLocale.value === '/tw') {
    lang = '繁體中文';
    url = '/';
  }else if (nowLocale.value === '/en') {
    lang = 'English';
    url = `${ nowLocale.value }`
  }else if (nowLocale.value === '/ja') {
    lang = '日本語';
    url = `${ nowLocale.value }`
  }
}
nowLang();

// 監聽當網址變動時是用什麼語言
watch(nowLocale, () => {
  if (nowLocale.value === '/tw') {
    url = '/';
  }else if (nowLocale.value !== '/tw') {
    url = `${ nowLocale.value }`
  }
})
</script>

<style lang="scss" scoped>
.btn-width {
  width: 100%;
  position: inherit;
  z-index: 99;
  transition: 0.5s;
}
.dropdown {
  width: 14.3%;
}

.dropdown-menu {
  width: 100%;
  position: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform: translateY(-50%);
  transition: 0.5s;
  opacity: 0;
  z-index: 1;
}
.open {
  transform: translateY(0);
  opacity: 1;
}
.btn-open{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>