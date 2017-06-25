export default class Adapter {
  static encode(data) {
    const string = JSON.stringify(data);
    return window.btoa(string);
  }

  static decode(data) {
    const string = window.atob(data);
    return JSON.parse(string);
  }
}
