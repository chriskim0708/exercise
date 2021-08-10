import Component from "../../core/component";
import "./Run.css";

export default class Run extends Component {
  setup() {
    this.state = {};
  }
  template() {
    return `
      <div id="run">Run!!</button>
      </div>
    `;
  }
}
