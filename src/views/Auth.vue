<template>
  <v-col align="center" justify="center">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <!-- Шапка -->
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Вход в админ-панель</v-toolbar-title>
            </v-toolbar>
            <!-- Форма -->
            <v-card-text>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field label="Login" v-model="username" required type="text" />
                <v-text-field label="Password" v-model="password" required type="password" />
              </v-form>
            </v-card-text>
            <!-- Кнопка подтверждения -->
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="onSubmit">Войти</v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

declare module "vue/types/vue" {
  interface Vue {
    $notify: any;
  }

  interface VueConstructor {
    $notify: any;
  }
}

export default Vue.extend({
  name: "Auth",

  props: {
    source: String
  },

  data: () => ({
    valid: true,
    username: "" as string,
    password: "" as string,
    lazy: false
  }),

  methods: {
    ...mapActions(["login"]),

    onSubmit() {
      try {
        const { username, password } = this;
        // this.$refs.form.validate();

        this.login({ username, password });
        this.$notify.success("Ура, вошли успешно");
      } catch (error) {
        console.log(error);
        this.$notify.error("Приехали, блин, ошибка!");
      }
    }
  }
});
</script>
