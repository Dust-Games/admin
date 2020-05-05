<template>
  <div>
    <v-navigation-drawer v-model="innerValue" app>
      <v-col align="center" justify="center">
        <v-btn text small color="primary" @click.stop="innerValue = !innerValue">
          Закрыть меню
        </v-btn>
        <v-spacer />
      </v-col>
      <v-card class="pa-2" outlined tile>5656</v-card>

      <div>
        Админ: папвап
      </div>
      <v-btn text small color="normal">Выйти</v-btn>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Пользователи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Коины</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavComponent",

  model: {
    prop: "drawer",
    event: "change"
  },

  props: {
    drawer: { type: Boolean }
  },

  computed: {
    innerValue: {
      get(): boolean {
        return this.drawer;
      },

      set(val: boolean) {
        this.$emit("change", val);
      }
    }
  }
});
</script>
