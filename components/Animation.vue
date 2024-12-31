<template>
  <div class="animation">
    <div class="img-container px-5">
      <!-- <div class="good-img" v-for="(item, id) in test" :key="id">
        <img :src="$img(`images/${id+1}.jpg`, { format: 'avif,webp,jpg' })" :alt="`image-${id+1}`">
      </div> -->
      <div class="good-img" v-for="(item, id) in test" :key="id">
        <NuxtImg 
          format="avif,webp,jpg" 
          size="100vw sm:50vw md:400px"
          :src="`images/${id+1}.jpg`" 
          :alt="`image-${id+1}`"
          class="img-style"
          />
      </div>
    </div>
    <div class="box-container pt-5">
      <div class="box" :class="{'active': pos}"></div>
    </div>
    <div class="test-wrapper container-fluid mt-5 d-flex justify-content-center align-items-center">
      <h2 class="text-white p-3 bg-black my-2 rounded-3">外框縮放，內容物縮放</h2>
      <div class="test-container mb-3">
        <div class="test-item">
          <h2>我可以變形</h2>
        </div>
      </div>
    </div>
    <!-- <div class="card-stack py-3 d-flex justify-content-center align-items-center container-fluid dark">
      <div class="card-area active" style="--bg:url('/images/1.jpg')" @click="activeCard">
        <div class="shadow"></div>
        <div class="label">
          <div class="icon" style="--color: orange"><i class="bi bi-sun-fill"></i></div>
          <div class="info">
            <div class="title">Spring</div>
            <div>Nature Looks Attractive</div>
          </div>
        </div>
      </div>

      <div class="card-area" style="--bg:url('/images/2.jpg')" @click="activeCard">
        <div class="shadow"></div>
        <div class="label">
          <div class="icon" style="--color: blue"><i class="bi bi-stars"></i></div>
          <div class="info">
            <div class="title">Summer</div>
            <div>Summer is a State of Mind</div>
          </div>
        </div>
      </div>

      <div class="card-area" style="--bg:url('/images/3.jpg')" @click="activeCard">
        <div class="shadow"></div>
        <div class="label">
          <div class="icon" style="--color: red"><i class="bi bi-cloud-lightning-rain-fill"></i></div>
          <div class="info">
            <div class="title">Autumn</div>
            <div>Life Starts All Over Again</div>
          </div>
        </div>
      </div>

      <div class="card-area" style="--bg:url('/images/4.jpg')" @click="activeCard">
        <div class="shadow"></div>
        <div class="label">
          <div class="icon" style="--color: powderblue"><i class="bi bi-snow"></i></div>
          <div class="info">
            <div class="title">Winter</div>
            <div>Not a Season, It's Celebration</div>
          </div>
        </div>
      </div>

    </div> -->
  </div>
</template>

<script setup>
const test = ref([1,2,3,4,5]);
const cardArry = ref([1,2,3,4,5]);
let pos = ref(false);

function activeCard(e) {
  const card = document.querySelectorAll('.card-area');
  const key = e.target;
  card.forEach((obj) => {
    if (obj.classList.length > 1) {
      obj.classList.remove('active');      
    }
  });
  key.classList.add('active');
};

onMounted(() => {
  const box = document.querySelector('.box');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      pos.value = entry.isIntersecting; // 判斷元素是否進入視窗內
    });
  }, {
    rootMargin: '0px', // 根據需求調整邊距
    threshold: 0.1 // 至少10%的元素可見時觸發
  });
  observer.observe(box); // 開始監控目標元素

  // window.addEventListener('scroll', (e) => {
  //   const box = document.querySelector('.box');
  //   const rect = box.getBoundingClientRect();
  //   const viewHeight = window.innerHeight;

  //   console.log(rect.top, viewHeight)

  //   if (rect.top <= window.innerHeight - 100) {
  //     console.log('success');
  //     pos.value = true;
  //   } else{
  //     console.log('NO');
  //     pos.value = false;
  //   }
  // })
});
</script>

<style lang="scss">
.animation {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.good-img {
  height: 400px;
  padding: 20px;
  border: 2px solid #FFF;
  border-radius: 20px;
  background: #6b8a7b;
}

.img-style {
  border-radius: 10px;
  border: 2px solid #FFF;
}

// 到box位置顯示box
.box {
  width: 300px;
  height: 300px;
  background: #ffe9a2;
  border-radius: 50px;
  transform: translateX(-100px);
  opacity: 0;
  transition: all 1s ease;
}
.active {
  transform: translateX(0);
  opacity: 1;
}

// 外框擴展
.test-wrapper {
  background: #b85a5a;
  flex-direction: column;
}
.test-container {
  width: 500px;
  height: 600px;
  // background: #f7f59e;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    width: 800px;
  }
}
.test-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #89bfcc;
  padding: 20px;
  background-image: url('/images/1.jpg');
  background-size: cover;
  transition: all 0.5s ease;
  transform-origin: 50% 50%;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  h2 {
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    background: #f1d69b;
    padding: 10px 20px;
    border-radius: 30px;
  }
}

// 卡片堆疊
:root {
  --cb: cubic-bezier(.05, .61, .41, .95);
}
.card-stack {
  display: flex;
  // width: calc(100% - 100px);
  height: 400px;
  border: none;
  font-family: 'Roboto', sans-serif;
  transition: 0.25s;

  .card-area {
    position: relative;
    min-width: 60px;
    height: 100%;
    background: var(--bg);
    background-position: center;
    background-size: auto 100%;
    overflow: hidden;
    margin: 5px;
    cursor: pointer;
    transition: 0.5s var(--cb);
    border-radius: 30px;
    &.active {
      flex-grow: 10000;
      background-size: cover;
      .label{
        bottom: 20px;
        left: 20px;
      }
    }
    &:not(.active) {
      .label {
        bottom: 10px;
        left: 10px;
      }
    }
    .shadow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(0, #0004, transparent);
    }
    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      height: 40px;
      background: #FFF;
      color: var(--color);
      border-radius: 50%;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      white-space: pre;
      transition: 1s var(--cb);
    }
    .label{
      display: flex;
      position: absolute;
      right: 0;
      height: 40px;
      transition: 0.5s var(--cb);
    }
  }
}

.dark {
  background: #4b4b4b;
  color: #FFF;
}


</style>