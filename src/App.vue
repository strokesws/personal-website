<template>
  <nav id="nav" class="p-4 flex justify-end">
    <router-link to="/" class="p-4">Home</router-link>
    <router-link to="/about" class="p-4">About Me</router-link>
    <router-link to="/" class="p-4">My Timeline</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
#nav > a {
  text-decoration: underline transparent;
  transition: text-decoration-color 300ms;

  &:hover {
    text-decoration-color: black;
  }
}
</style>
