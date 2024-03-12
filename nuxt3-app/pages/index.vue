<template>
  <div>
    <h1>Top page</h1>
    <hr />
    <NuxtLink to="/price">price page</NuxtLink>
    <br />
    <a href="http://localhost:3000/price">price page2（aタグ外部）</a>
    <br />
    <NuxtLink to="http://localhost:3000/price"
      >price page3（NuxtLink外部）</NuxtLink
    >
  </div>
</template>
