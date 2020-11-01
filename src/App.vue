<template>
  <div id="app" class="container">
    <app-navbarr />
    <router-view />
  </div>
</template>

<script>
import AppNavbarr from "@/components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbarr
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: normal;
    color: #c4b4db;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
