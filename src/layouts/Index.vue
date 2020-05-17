<template>
  <div>
    <Nav v-model="drawer" />

    <v-app-bar app color="light-blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Dust Games. Админ-панель</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IndexLayout",

  components: {
    Nav: () => import("@/components/Nav.vue")
  },

  data: () => ({
    drawer: null
  })
});
</script>
