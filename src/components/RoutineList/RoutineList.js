import Component from "../../core/component";
import Input from "../Input/Input";
import "./RoutineList.css";

const defaultProps = {
  isInputRoutine: false,
  routineItems: [],
  onSelect: () => {},
  routineInputValue: "",
  routineInputMode: "",
  onEnter: () => {},
  onCancel: () => {}
};

export default class RoutineList extends Component {
  setup() {
    this.props = {
      ...defaultProps,
      ...this.props
    };
  }

  template() {
    const { isInputRoutine, routineItems } = this.props;
    return `
      <div class="routine-list-container pa-10">
        ${isInputRoutine ? '<div id="routine-input-component"></div>' : ""}
        ${
          routineItems.length > 0
            ? `<ul class="routine-list">
            ${routineItems
              .map(
                (item, index) => `<li
              class="routine-list-item ${item.selected ? "selected" : ""}"
              data-index="${index}"
            >
              ${item.name}
              <button class="update-item">수정</button>
              <button class="delete-item">삭제</button>
            </li>`
              )
              .join("")}
          </ul>`
            : ""
        }
      </div>
    `;
  }

  mounted() {
    const { isInputRoutine, routineInputValue, onEnter, onCancel } = this.props;
    if (isInputRoutine) {
      const routineInputComponent = this.target.querySelector(
        "#routine-input-component"
      );
      new Input(routineInputComponent, {
        type: "text",
        placeholder: "입력하세요.",
        value: routineInputValue,
        focus: true,
        onEnter,
        onCancel
      });
    }
  }

  setEvent() {
    const { onSelect, updateItem, deleteItem, routineInputMode } = this.props;

    this.addEvent("click", ".routine-list-item", ({ target }) => {
      onSelect(Number(target.dataset.index));
    });

    this.addEvent("click", ".update-item", ({ target }) => {
      updateItem(Number(target.parentElement.dataset.index));
    });

    this.addEvent("click", ".delete-item", ({ target }) => {
      deleteItem(Number(target.parentElement.dataset.index));
    });
  }
}
