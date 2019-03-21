import Navigation from "./scripts/components/navigation.js"

export default class Component {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  render() {
    new Navigation(this.container).render();
  }
}
