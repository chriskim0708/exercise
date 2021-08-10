import Component from "./core/component";
import Items from "./components/Items";

export default class App extends Component {
  setup() {
    this.state = {};
  }

  template() {
    return `
      <div id="app"></div>
    `;
  }

  mounted() {
    const items = this.target.querySelector("#app");
    new Items(items);
  }
}
