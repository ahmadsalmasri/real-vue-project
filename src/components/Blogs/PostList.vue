<template>
    <div class="PostList">
        <div class="post-container text-left">
            <span class="post-views badge badge-primary" title="Views">{{
                post.views
            }}</span>
            <h3 class="post-title" title="Title">
                {{ post.title | upperCase }}
            </h3>
            <span class="post-date" title="Date">{{ post.date }}</span>
            <p class="post-body">
                {{ post.contant }}
            </p>
            <div class="row">
                <div class="col-sm-6">
                    <span class="post-author" title="Auther">{{
                        post.auther
                    }}</span>
                </div>
                <div class="col-sm-6 text-right">
                    <span class="post-category" title="Category">{{
                        post.category
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["post"],
    name: "PostList"
};
</script>

<style lang="scss" scoped>
.post-container {
    background-color: #fff;
    padding: 10px;
    position: relative;
    margin: 0 0 10px 0;
    .post-views {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .post-title {
        font-weight: normal;
    }
    .post-date {
        color: violet;
    }
    .post-author,
    .post-category {
        padding: 5px 10px;
        margin: 0 10px;
        color: white;
        background-color: #007bff;
    }
}
</style>
