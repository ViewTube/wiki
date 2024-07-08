<template>
  <main>
    <article>
      <ContentDoc />
    </article>
  </main>
</template>

<style lang="scss">
article {
  margin: 0 0 0 250px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      border: none;
      color: #fff;

      &:hover {
        border: none;
        color: #c7c7c7;
      }
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    border-bottom: 1px dotted #fff;

    &:hover {
      color: #ff9560;
      border-bottom: 1px solid #ff9560;
    }
  }
}
</style>
