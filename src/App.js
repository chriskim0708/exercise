import Component from "./core/component";
import Registration from "./components/Registration/Registration";
import "./App.css";

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
    const app = this.target.querySelector("#app");
    new Registration(app);
  }
}
