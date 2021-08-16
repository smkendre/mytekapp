export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private refreshToken: string,
    private tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    return this.refreshToken;
  }
}
