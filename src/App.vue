<template>
  <div id="app">
    <!-- app content -->
    <router-view />

    <!-- botom navigation part -->
    <nav>
      <a
        v-bind:class="{ active: $route.path == '/Dashboard' }"
        @click="dashboard()"
        ><img
          alt="Dashboard"
          src="@/assets/slice_image/ic-toolbar-db-d.png"
        />DashBoard
      </a>
      <a
        v-bind:class="{ active: $route.path == '/Timeline' }"
        @click="timeline()"
        ><img
          alt="Timeline"
          src="@/assets/slice_image/ic-toolbar-timeline-d.png"
        />Timeline</a
      >
      <a v-bind:class="{ active: $route.path == '/Nearby' }" @click="nearby()"
        ><img
          alt="Nearby"
          src="@/assets/slice_image/ic-toolbar-nearby.png"
        />Nearby</a
      >
      <a v-bind:class="{ active: $route.path == '/' }" @click="chalenges()">
        <img
          alt="Challenges"
          src="@/assets/slice_image/ic-toolbar-challenges-d.png"
        />Challenges</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    dashboard() {
      this.$router.push("/Dashboard");
    },
    timeline() {
      this.$router.push("/Timeline");
    },
    nearby() {
      this.$router.push("/Nearby");
    },
    chalenges() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  background-color: rgb(238, 235, 235);
  display: flex;
  justify-content: space-around;
  align-items: auto;
  min-height: 8vh;
  font-family: "sans-serif";
  overflow: visible;
  position: fixed;
  bottom: 0;
  width: 100%;
}

a {
  text-decoration: none;
  color: #000000;
  text-align: center;
  padding: 30px 16px;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
}

nav a:hover {
  background-color: rgb(148, 143, 143);
  color: white;
}

nav a.active {
  background-color: #d6476b;
  color: white;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-bottom: 15px;
  max-width: 30px;
}
</style>
