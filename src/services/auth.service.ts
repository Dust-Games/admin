import httpClient from "./httpClient";

// Adds header: `Authorization: 123` to all requests
// this.$axios.setToken("123");

interface IUser {
  id: string;
  email: string;
  username: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface ITokens {
  access_token: string;
  refresh_token: string;
}

interface IAuthResponse extends ITokens {
  user: IUser;
}

export default {
  async login({ email, password }: ILogin) {
    try {
      const body = { email, password };
      const resp: IAuthResponse = await httpClient.post("auth/login", body);
      return resp;
    } catch (errors) {
      throw errors.error;
    }
  },

  async refreshToken(refresh_token: string) {
    try {
      const body = { refresh_token };
      const resp: ITokens = await httpClient.post("auth/refresh-token", body);

      return resp;
    } catch (errors) {
      throw errors.error;
    }
  },

  async logout(refresh_token: string) {
    try {
      const body = { refresh_token };
      await httpClient.post("auth/logout", body);
    } catch (errors) {
      throw errors.error;
    }
  }
};
