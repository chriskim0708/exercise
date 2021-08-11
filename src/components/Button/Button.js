import Component from "../../core/component";
import "./Button.css";

export default class Button extends Component {
  template() {
    const { text } = this.props || { text: "" };
    return `
      <button class="btn">${text}</button>
    `;
  }
}
