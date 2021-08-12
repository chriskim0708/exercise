import Component from "../../core/component";
import "./Input.css";

const defaultProps = {
  type: "text",
  placeholder: ""
};

export default class Input extends Component {
  template() {
    const { type, placeholder } = this.props || defaultProps;
    return `
      <input type="${type}" placeholder="${placeholder}" class="input-box" />
    `;
  }
}
