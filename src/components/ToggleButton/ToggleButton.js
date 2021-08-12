import Component from "../../core/component";
import "./ToggleButton.css";

const defaultProps = {
  text: "",
  isActivate: false,
  onToggle: () => {}
};

export default class ToggleButton extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    };
  }

  template() {
    const { text, isActivate } = this.props;
    return `
      <button class="btn ${isActivate ? "active" : "deactive"}">${text}</button>
    `;
  }

  setEvent() {
    const { onToggle } = this.props;
    this.addEvent("click", ".btn", () => {
      onToggle();
    });
  }
}
