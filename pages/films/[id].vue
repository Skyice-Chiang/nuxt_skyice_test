<template>
  <div class="films">
    <h1>{{ message }}</h1>
    <p>{{ t('message') }}</p>
    <div class="single-group container-fluid bg-info mt-3 py-3">
      <h2 class="text-center">{{ single.Name }}</h2>
      <iframe :src="`${single.URL}`" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const message = ref('我是films裡的作品詳細資訊');
const { t } = useI18n();
const data = await queryContent('/films').findOne();
const single = ref(data.body.filter(item => item.ID == route.params.id)[0]);

</script>

