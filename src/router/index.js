import Vue from "vue";
import Router from "vue-router";
import Challenges from "@/components/Challenges.vue";
import Nearby from "@/components/Nearby.vue";
import Timeline from "@/components/Timeline.vue";
import Dashboard from "@/components/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Challenges",
      component: Challenges
    },
    {
      path: "/Nearby",
      name: "Nearby",
      component: Nearby
    },
    {
      path: "/Timeline",
      name: "Timeline",
      component: Timeline
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
