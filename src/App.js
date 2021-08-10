import Component from "./core/component";
import Items from "./components/Items";

export default class App extends Component {
  setup() {
    this.state = {};
  }

  template() {
    return `
      <div id="items"></div>
    `;
  }

  mounted() {
    const items = this.target.querySelector("#items");
    new Items(items);
  }
}
