<template>
    <div id="welcome-message">
        <h3 v-text="welcome"></h3>
        <h4 v-text="mr"></h4>
        <p v-text="Lorem"></p>
    </div>
</template>

<script>
export default {
    name: "WelcomeMessage",
    data: function() {
        return {
            welcome: "welcome To VueJs Course",
            mr: "Hello Mr. Ahmad",
            Lorem:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore soluta perspiciatis accusamus, ipsa nisi mollitia dolore facere autem pariatur iusto, voluptatibus omnis accusantium illum fugiat consequuntur libero ut quo et."
        };
    }
};
</script>

<style scoped>
h4 {
    color: #42b983;
}
</style>
