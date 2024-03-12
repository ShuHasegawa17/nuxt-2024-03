<script setup lang="ts">
const { counter, addCounter, minusCounter, resetCounter } = useCounter();
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>{{ counter }}</h1>
    <button @click="addCounter">+</button>
    <button @click="minusCounter">-</button>
    <button @click="resetCounter">reset</button>
  </div>
</template>
