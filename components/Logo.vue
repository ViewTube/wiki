<template>
  <div class="logo">
    <img class="icon" src="@/assets/icon.svg" alt="logo" />
    <div class="logo-text">
      <span>View</span>
      <span class="colored">Tube</span>
      <span class="lighter">Docs</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.container) {
  line-height: unset;
}
.logo {
  display: flex;
  gap: 4px;

  .icon {
    width: 2rem;
    height: 2rem;
  }

  .logo-text {
    font-family: "expletus-bold", "Open Sans", sans-serif;
    font-size: 1.5rem;
    color: #d2d2d2;

    .colored {
      color: transparent;
      background-image: linear-gradient(
        53deg,
        rgba(241, 87, 10, 1) 0%,
        rgba(224, 140, 112, 1) 33%,
        rgba(89, 193, 186, 1) 78%,
        rgba(0, 212, 255, 1) 100%
      );
      background-clip: text;
    }

    .lighter {
      color: #ebebeb;
      margin: 0 0 0 0.5rem;
    }
  }
}
</style>
