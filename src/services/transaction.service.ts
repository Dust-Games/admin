import httpClient from "./httpClient";

interface IUser {
  id: string;
  email: string;
  username: string;
}

interface ITokens {
  access_token: string;
  refresh_token: string;
}

interface IAuthResponse extends ITokens {
  user: IUser;
}

export default {
  async list() {
    try {
      const resp: IAuthResponse = await httpClient.get("accounts");
      return resp;
    } catch (errors) {
      throw errors.error;
    }
  },

  async item(uuid: string) {
    try {
      const resp: IAuthResponse = await httpClient.post("accounts", uuid);
      return resp;
    } catch (errors) {
      throw errors.error;
    }
  }
};
