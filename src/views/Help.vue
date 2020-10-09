<template>
  <div class="help">
    <h2>{{ pageDescreption }}</h2><hr />
    <h4>{{ vueEasy }}</h4>
    <p v-html="contact"></p>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            pageName: "Help",
            pageDescreption: "This is an Help page",
            vueEasy: "Vue Js Greate. It's Easy to Learn",
            contact: "More Info. @ <a href='mailto:ahmad.s.almasri@hotmail.com'>ahmad.s.almasri@hotmail.com</a>",
        }
    },
  name: "Help"
};
</script>
