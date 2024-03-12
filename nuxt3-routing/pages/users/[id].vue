<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id as string);
  },
});
const route = useRoute();
</script>
<template>
  <div>
    <h1>users/{{ route.params.id }}を表示中</h1>
  </div>
</template>
