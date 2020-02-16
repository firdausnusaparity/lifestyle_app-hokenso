<template>
  <!-- Search Box part -->
  <div id="container">
    <nav>
      <input id="top-search" type="text" v-model="search" placeholder="Search for a Challenge" />
    </nav>
    <div
      id="challenges"
      class="container"
      v-for="(challenge, index) in filteredChalenges"
      :key="index"
    >
      <img class="main-image" :src="challenge.img" :alt="index" />
      <img class="top-left" :src="challenge.type" alt="category" />
      <img class="top-right" :src="challenge.bookmark" alt="status" />
      <h3 class="bottom-left-heading">{{challenge.title}}</h3>
      <p class="bottom-left-info">
        <span class="dot"></span>
        <span class="stage">{{challenge.stage}}</span>
        |
        <span>{{challenge.calories }} calories</span>
        |
        <span class="points">{{challenge.points}} Points</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Challenges",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState(["challenges"]),
    filteredChalenges: function() {
      return this.challenges.filter(x => {
        return x.title.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "sans-serif";
}

#container {
  margin-bottom: 110px;
}

nav {
  background-color: rgb(238, 235, 235);
  display: flex;
  justify-content: space-around;
  min-height: 8vh;

  position: static;
  top: 0;
  width: 100%;
}

input {
  width: 100%;
  text-decoration: none;
  border: none;
  color: #000000;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 30px 16px;
  font-size: 20px;
  text-align: left;
  font-style: italic;
  max-height: 70px;
}

#top-search {
  background-image: url("../assets/slice_image/ic-search-grey.png");
  background-repeat: no-repeat;
  text-indent: 60px;
  background-size: 30px 30px;
  background-position-y: 15px;
  background-position-x: 20px;
}

nav input:hover {
  color: rgb(39, 37, 37);
}

a {
  padding-top: 100px;
}

#challenges h2 {
  padding-bottom: 20px;
}

#challenges .main-image {
  width: 100%;
}

/* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: white;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 14px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-left-heading {
  position: absolute;
  bottom: 28%;
  left: 14px;
  font-family: "Lucida Console";
  color: #000000;
  text-decoration: none;
  text-transform: capitalize;
}

.bottom-left-info {
  position: absolute;
  bottom: 18%;
  left: 14px;
  color: #777070;
  font-size: 4vw;
  text-decoration: none;
  text-transform: capitalize;
}

.dot {
  height: 13px;
  width: 13px;
  background-color: rgb(255, 174, 0);
  border-radius: 50%;
  display: inline-block;
}

.stage {
  color: rgb(255, 174, 0);
}

.points {
  color: rgb(14, 99, 133);
}
</style>
