  <template>
    <div class="gallery">
      <ClientOnly>
        <div class="swiper">
          <h1 class="text-center">Swiper</h1>
          <swiper-container ref="containerRef" :init="false" class="swiper-wrapper">
            <swiper-slide class="swiper-slide"
              v-for="(item, idx) in filmsData"
              :key="idx">
              <h2>{{ item.Name }}</h2>
              <button class="single-info btn btn-info mt-3" @click="goSingle(item)">前往詳細頁面</button>
            </swiper-slide>
          </swiper-container>
          <button class="swiper-button-next btn-set btn">
            ＞
          </button>
          <button class="swiper-button-prev btn-set btn">
            ＜
          </button>
        </div>
      </ClientOnly>
    </div>
  </template>

<script setup>
const data = await queryContent('/films').findOne();
const filmsData = ref(data.body);
const router = useRouter();
const { locale } = useI18n();
const nowLocale = computed(()=> `/${locale.value}`);

function goSingle(item) {
  const url = `/films/${item.ID}`;
  console.log(url);
  if (nowLocale.value === '/tw') {
      router.push(url)
    }else if (nowLocale.value !== '/tw') {
      console.log()
      router.push(`${nowLocale.value}${url}`);
    }
};

// import { script } from 'googleapis/build/src/apis/script';

// rest api 抓取資料
// const sheetId = '1GdpFefqAfFOFErmLCH53PsIot9cf9OVYy2jBT1ubidA';
// const range = 'Sheet1!A1:C10';
// const apiKey = 'AIzaSyA3gQMth6QoBU5WA-VGfPDwb5BX38tDutI';
// const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

// 無須api key的做法
// const url = `https://script.google.com/macros/s/AKfycbzadUWJo6KhBTZXxApB-qd_1Poc-BIOYk_TKq1XUDJnT3yD1hIuaDtmXKjS7TnyQsPy/exec`;
// const { data }  = await useFetch(url);

// const rows = ref([]);
// rows.value = [...data.value]; 
// rows.value.splice(0,1); // 第一項屬於Head的部分，把它移除掉，其他才是資訊本身

// 先定義swiper的容器
const containerRef = ref(null)
// const slides = ref(Array.from({ length: 10 }))
// 綁定容器，輸入客製選項
const swiper = useSwiper(containerRef, {
  effect: 'coverflow',
  loop: true,
  spaceBetween: 40,
  centeredSlides: true,
  slidesPerView: 'auto',
  mousewheel: {
    invert: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    slideShadows: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'dynamicBullets',
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
})

</script>

<style lang="scss" scoped>
.gallery {
  height: 600px;
  background: rgb(69, 119, 126);
}
.single-info {
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
    &:active {
    transform: scale(0.95) !important;
  }
}
.swiper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.swiper-wrapper{
  height: 500px;
  font-family: 'LXGWWenKaiMonoTC-Bold';
  border-radius: 20px;
  padding: 30px;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: 36px;
  height: 400px;
  font-weight: bold;
  border-radius: 20px;
  padding: 20px;
  background: linear-gradient(#79e6ca, #448191);
  transition: 0.2s ease !important;
  &:hover {
    cursor: pointer;
    border: 2px solid #ffe448;
  }
}

.swiper-button-next {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-10px,-50%);
  font-weight: bold;
  z-index: 999;
}
.swiper-button-prev {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(10px,-50%);
  font-weight: bold;
  z-index: 999;
}

.btn-set {
  color: #FFF;
  background: rgba(255,255,255,0.3);
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 20px;
}

</style>