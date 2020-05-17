<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    Index: () => import("./layouts/Index.vue"),
    Auth: () => import("./layouts/Auth.vue")
  },

  computed: {
    ...mapGetters(["isAuthenticated"]),

    layout() {
      if (this.isAuthenticated) {
        return "Index";
      } else {
        return "Auth";
      }
    }
  }
});
</script>
