import Component from "../../core/component";
import "./Input.css";

const defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  focus: false,
  onEnter: () => {},
  onCancel: () => {}
};

export default class Input extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    };
  }

  template() {
    const { type, placeholder, value } = this.props;
    return `
      <input type="${type}" placeholder="${placeholder}" value="${value}" class="input-box" />
    `;
  }

  mounted() {
    const { focus } = this.props;
    focus && this.target.querySelector(".input-box").focus();
  }

  setEvent() {
    const { onEnter, onCancel } = this.props;
    this.addEvent("keydown", ".input-box", ({ key, keyCode, target }) => {
      console.log("key", key);
      if (keyCode === 13) {
        onEnter(target.value);
        return;
      }

      if (keyCode === 27) {
        onCancel(target.value);
        return;
      }
    });
  }
}
