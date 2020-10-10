<template>
  <div class="about">
    <h2>{{ pageDescreption }}</h2>
    <hr />
    <WelcomeMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  data: function() {
    return {
      pageName: "About",
      pageDescreption: "This is an About page"
    };
  },
  name: "about", // name of page
  components: {
    WelcomeMessage
  }
};
</script>
