class Auth {
  async authorize() {
    return true;
  }
}

const authService = new Auth();

export { authService };
