<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <div class="content-navigation">
        <div
          class="navigation-item"
          v-for="link of navigation"
          :key="link._path"
        >
          <div class="content-header">{{ link.title }}</div>
          <NuxtLink
            class="navigation-child"
            :class="{ active: $route.path === link._path }"
            v-for="sublink of link.children"
            :key="sublink._path"
            :to="sublink._path"
            >{{ sublink.title }}</NuxtLink
          >
        </div>
      </div>
    </ContentNavigation>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  position: fixed;
  top: 0;
  margin: 15px;

  .content-navigation {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .navigation-item {
      display: flex;
      flex-direction: column;

      .content-header {
        padding: 5px 0 10px 0;
        font-weight: 600;
        font-size: 14px;
      }

      .navigation-child {
        padding: 5px 0 5px 15px;
        text-decoration: none;
        color: #ada9a4;
        font-size: 0.875rem;
        border-left: 1px solid #ffffff1d;

        &.router-link-active {
          color: #ff7b3a;
          border-color: #ff7b3a;
        }

        &:hover:not(.router-link-active) {
          color: #efefef;
          border-color: #ffffff6a;
        }
      }
    }
  }
}
</style>
