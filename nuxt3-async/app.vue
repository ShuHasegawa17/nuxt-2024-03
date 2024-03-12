<script setup lang="ts">
const { data: users, error } = await useFetch<any>(
  'https://jsonplaceholder.typicode.com/users2'
);
console.log(error.value);
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'page not found!!' });
}
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <p>{{ users[0].id }} {{ users[0].name }}</p> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }} : {{ user.phone }}
      </li>
    </ul>
  </div>
</template>
