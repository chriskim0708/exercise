import Component from "../../core/component";
import "./Input.css";

const defaultProps = {
  type: "text",
  placeholder: "",
  value: ""
};

export default class Input extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    }
  }

  template() {
    const { type, placeholder, value } = this.props;
    return `
      <input type="${type}" placeholder="${placeholder}" value="${value}" class="input-box" />
    `;
  }

  mounted() {
    this.target.querySelector('.input-box').focus()
  }
}
