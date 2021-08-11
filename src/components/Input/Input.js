import Component from "../../core/component";
import "./Input.css";

export default class Input extends Component {
  template() {
    const defaultProps = {
      type: 'text'
    }
    const { type } = this.props || defaultProps;
    return `
      <input type="${type}" class="input-box" />
    `;
  }
}
