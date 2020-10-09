import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Money from "../views/Money.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () =>
        //import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    },
    {
        path: "/money",
        name: "Money",
        component: Money
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes // routes: routes
});

export default router;
