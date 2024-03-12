<script setup lang="ts">
const titleState = useTitle();
const { title } = titleState;
onMounted(() => {
  titleState.changeTitle('CSR!!');
});
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>{{ title }}</h1>
    <button @click="() => titleState.changeTitle('Hello Nuxt3')">
      changeTitle
    </button>
    <ClientOnly fall-back-tag="div" falback="loading csr render">
      <NuxtPage />
    </ClientOnly>
  </div>
</template>
