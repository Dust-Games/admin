import AuthService from "@/services/auth.service.ts";

export interface IState {
  token: null | string;
}

export class User {
  id: string;
  email: string;
  username: string;

  constructor() {
    this.id = "";
    this.email = "";
    this.username = "";
  }
}

interface ITokens {
  access_token: string;
  refresh_token: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IAuthResponse extends ITokens {
  user: User;
}

export default {
  state: {
    token: localStorage.getItem("access_token")
  } as IState,

  getters: {
    isAuthenticated: (state: IState) => !!state.token
  },

  mutations: {
    setToken(state: IState, token: string) {
      state.token = token;
    }
  },

  actions: {
    async login({ commit }: any, data: ILogin) {
      const resp: IAuthResponse = await AuthService.login(data);
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);

      commit("setToken", resp.access_token);
      commit("setUser", resp.user, { root: true });
    },

    async setUser({ commit }: any, resp: IAuthResponse) {
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);

      commit("setToken", resp.access_token);
      commit("setUser", resp.user, { root: true });
    },

    async refreshToken({ commit }: any) {
      const oldRefreshToken: string = localStorage.getItem("refresh_token") || "";
      const resp: ITokens = await AuthService.refreshToken(oldRefreshToken);
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);

      commit("setToken", resp.access_token);
    },

    async logout({ commit }: any) {
      try {
        const refreshToken: string = localStorage.getItem("refresh_token") || "";
        await AuthService.logout(refreshToken);
      } finally {
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        commit("setToken", "");
      }
    }
  }
};
