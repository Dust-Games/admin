<template>
  <v-app id="inspire">
    <Auth v-if="!isAuthenticated" />

    <div v-else>
      <Nav v-model="drawer" />

      <v-app-bar app color="light-blue darken-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Dust Games. Админ-панель</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    Auth: () => import("./views/Auth.vue"),
    Nav: () => import("./components/Nav.vue")
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  data: () => ({
    drawer: null
  })
});
</script>
