export default class AuthService {
  async login(username, password) {
    return {
      username: 'ChulJJA',
      token: 'abc1234',
    };
  }

  async me() {
    return {
      username: 'ChulJJA',
      token: 'abc1234',
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: 'ChulJJA',
      token: 'abc1234',
    };
  }
}
