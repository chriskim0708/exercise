import Component from "../../core/component";
import "./Button.css";

const defaultProps = {
  text: "",
  onClick: () => {}
};

export default class Button extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    };
  }

  template() {
    const { text } = this.props;
    return `
      <button class="btn">${text}</button>
    `;
  }

  setEvent() {
    const { onClick } = this.props;
    this.addEvent("click", ".btn", () => {
      onClick();
    });
  }
}
