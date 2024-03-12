<script setup lang="ts">
const titleState = useTitle();
const { title } = titleState;
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>{{ title }}</h1>
    <button @click="() => titleState.changeTitle('Hello Nuxt3')">
      changeTitle
    </button>
  </div>
</template>
