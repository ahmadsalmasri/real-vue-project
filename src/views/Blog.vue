<template>
  <div class="blog">
    <h2>{{ pageDescreption }}</h2>
    <hr />

    <div class="alert alert-success" role="alert" v-text="alertTitel"></div>

    <div class="row">
      <div class="col-md-8">
        <div class="posts-area">
          <div>
            <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
            <PostList
              id="PostList"
              v-for="post in paginatedposts"
              :key="post.id"
              :post="post"
              :per-page="perPage"
              :current-page="currentPage"
            ></PostList>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="PostList"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/Blogs/PostList.vue";
import PostJson from "../Gatewaye/post.json";

export default {
  data: function() {
    return {
      pageName: "blog",
      pageDescreption: "This is an Blog page",
      alertTitel: "List of all Posts",
      perPage: 3,
      currentPage: 1,
      posts: PostJson // array of posts [50 records]
    };
  },
  name: "Blog",
  components: {
    PostList
  },
  computed: {
    paginatedposts() {
      return this.posts.slice(
        this.perPage * (this.currentPage - 1),
        this.perPage * (this.currentPage - 1) + this.perPage
      );
    },
    rows: function() {
      return this.posts.length;
    }
  }
};
</script> 