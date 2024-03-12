<script setup lang="ts">
// 1:key, 2:option
const tasks = useCookie<string[]>('tasks', {
  default: () => [],
});
const newTask = ref<string>('');
const addTask = () => {
  if (newTask.value.length >= 1) {
    tasks.value.push(newTask.value);
  }
  newTask.value = '';
};
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
};

const clearTask = () => {
  tasks.value = [];
};
</script>
<template>
  <NuxtLayout>
    <div>
      <!-- <NuxtWelcome /> -->
      <form @submit.prevent="addTask">
        <input
          type="text"
          v-model="newTask"
          name="newTask"
          autocomplete="off"
        />
        <button>add</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="task">
          <span>{{ task }}</span>
          <button @click="deleteTask(index)">delete</button>
        </li>
      </ul>
      <button @click="clearTask">clear</button>
    </div>
  </NuxtLayout>
</template>
