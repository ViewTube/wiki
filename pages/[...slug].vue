<template>
  <div class="outer">
    <Navbar />
    <Content />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0b0a0a;
  font-family: 'noto-sans', Helvetica, Arial, sans-serif;
  color: #fff;
}

.outer {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 20px;
}
</style>
