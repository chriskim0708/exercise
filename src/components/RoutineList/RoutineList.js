import Component from "../../core/component";
import Input from "../Input/Input";
import "./RoutineList.css";

const defaultProps = {
  isRoutineInputVisible: false
};

export default class RoutineList extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    };
  }

  template() {
    const { isRoutineInputVisible } = this.props;
    return `
      <div class="routine-list pa-10">
        ${isRoutineInputVisible && '<div id="routine-input-component"></div>'}
      </div>
    `;
  }

  mounted() {
    const { isRoutineInputVisible } = this.props;
    if (isRoutineInputVisible) {
      const routineInputComponent = this.target.querySelector(
        "#routine-input-component"
      );
      new Input(routineInputComponent, {
        type: "text",
        placeholder: "입력하세요."
      });
    }
  }

  setEvent() {
    this.addEvent("keyup", ".input-box", ({ keyCode, target }) => {
      if (keyCode === 13) {
        console.log("enter");
        return;
      }

      if (keyCode === 27) {
        target.value = "";
        console.log("esc");
        return;
      }

      return false;
    });
  }
}
