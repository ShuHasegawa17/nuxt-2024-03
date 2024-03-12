<template>
  <h1>To Do</h1>
  <div class="contents">
    <!-- pageのコンテンツはslotで置き換え -->
    <slot />
  </div>
</template>
<style>
body {
  font-family: 'Meiryo', 'Hiragino Kaku Gothic ProN', 'MS PGothic', sans-serif;
  margin: 0;
  color: #333;
}
h1 {
  margin-top: 0;
  background-color: #343a40;
  color: #fff;
  padding: 0.7rem 1rem;
}
.contents {
  padding: 1rem;
}
button {
  padding: 0.7rem 1rem;
  border-radius: 7px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
}
form {
  display: grid;
  grid-template-columns: auto 25%;
  gap: 10px;
}
input {
  padding: 0.7rem;
  border: 1px solid #dddddd;
  border-radius: 7px;
  font-size: inherit;
  color: inherit;
}
form > button {
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  color: #fff;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2rem;
  padding: 0;
}
ul li {
  display: grid;
  grid-template-columns: auto 25%;
  align-items: center;
  gap: 10px;
}
ul li button {
  background-color: #dc3545;
  border: 1px solid #dc3545;
  color: #fff;
}
.contents > button {
  display: block;
  width: 100%;
  margin-top: 2rem;
  background-color: #e6e6e6;
  border: 1px solid #e6e6e6;
  color: #0bb365;
}
</style>
