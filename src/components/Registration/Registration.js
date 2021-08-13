import Component from "../../core/component";
import Header from "../Header/Header";
import RegToolbar from "../RegToolbar/RegToolbar";
import RoutineList from "../RoutineList/RoutineList";
import ExerciseList from "../ExerciseList/ExerciseList";
import "./Registration.css";

export default class Registration extends Component {
  setup() {
    this.state = {
      isInputRoutine: false,
      routineInputValue: "",
      routineInputMode: "add",
      routineUpdateIndex: 0,
      routineItems: []
    };
  }
  template() {
    return `
      <div id="registration" class="container">
        <div class="header ma-15">
          <div id="header-component" class="content-box"></div>
        </div>
        <div class="toolbar ma-15 mt-0 mb-0">
          <div id="reg-toolbar-component"></div>
        </div>
        <div class="content">
          <div class="aside ma-15 content-box">
            <div id="routine-list-component" class="content-item">ddd</div>
          </div>
          <div class="main ma-15 ml-0 content-box">
            <div id="exercise-list-component" class="content-item">1</div>
            <div id="button-component" class="content-item">1</div>
          </main>
        </div>
      </div>
    `;
  }

  addRoutineItem() {
    const { isInputRoutine } = this.state;
    this.setState({
      routineInputMode: "add",
      isInputRoutine: !isInputRoutine,
      routineInputValue: ""
    });
  }

  deleteRoutineItem(idx) {
    const items = [...this.state.routineItems];
    const check = confirm("해당 항목을 삭제하시겠습니까?");
    if (check) {
      items.splice(idx, 1);
      this.setState({
        isInputRoutine: false,
        routineInputValue: "",
        routineItems: items
      });
    }
  }

  updateRoutineItem(idx) {
    const { routineItems } = this.state;
    this.setState({
      routineInputMode: "update",
      routineUpdateIndex: idx,
      isInputRoutine: true,
      routineInputValue: routineItems[idx].name
    });
  }

  onSelectRoutineItem(idx) {
    const { routineItems } = this.state;
    const selectedItems = routineItems.map((item, i) => ({
      ...item,
      selected: i === idx
    }));
    this.setState({ routineItems: selectedItems });
  }

  onEnterRoutineInput(name) {
    const { routineInputMode, routineItems, routineUpdateIndex } = this.state;
    const items = [...routineItems];

    if (routineInputMode === "add" && name) {
      items.unshift({ name, selected: false });
      this.setState({
        routineItems: items,
        isInputRoutine: false,
        routineInputValue: ""
      });
      return;
    }

    if (routineInputMode === "update" && name) {
      items[routineUpdateIndex].name = name;
      this.setState({
        routineItems: items,
        isInputRoutine: false,
        routineInputValue: ""
      });
      return;
    }
  }

  onCancelRoutineInput(name) {
    if (name) {
      this.setState({
        routineInputValue: "",
        isInputRoutine: true
      });
      return;
    }
    this.setState({
      routineInputValue: "",
      isInputRoutine: false
    });
  }

  mounted() {
    const {
      routineInputValue,
      isInputRoutine,
      routineItems,
      routineInputMode
    } = this.state;
    const {
      onSelectRoutineItem,
      updateRoutineItem,
      deleteRoutineItem,
      onCancelRoutineInput,
      onEnterRoutineInput
    } = this;
    const headerComponent = this.target.querySelector("#header-component");
    const regToolbarComponent = this.target.querySelector(
      "#reg-toolbar-component"
    );
    const routineListComponent = this.target.querySelector(
      "#routine-list-component"
    );
    const exerciseListComponent = this.target.querySelector(
      "#exercise-list-component"
    );
    new Header(headerComponent, { title: "매일 운동 루틴" });
    new RegToolbar(regToolbarComponent, {
      addRoutineItem: this.addRoutineItem.bind(this),
      isInputRoutine
    });
    new RoutineList(routineListComponent, {
      isInputRoutine,
      routineInputValue,
      routineItems,
      routineInputMode,
      onSelect: onSelectRoutineItem.bind(this),
      deleteItem: deleteRoutineItem.bind(this),
      updateItem: updateRoutineItem.bind(this),
      onEnter: onEnterRoutineInput.bind(this),
      onCancel: onCancelRoutineInput.bind(this)
    });
    new ExerciseList(exerciseListComponent);
  }
}
