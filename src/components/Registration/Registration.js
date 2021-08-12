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
      routineInputValue: 'asdfsdf',
      routineInputMode: 'add',
      routineItems: [
        { name: 'a', selected: true },
        { name: 'b', selected: false },
        { name: 'c', selected: false }
      ]
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
    const { isInputRoutine, routineInputValue } = this.state
    this.setState({
      routineInputMode: 'add',
      isInputRoutine: !isInputRoutine,
      routineInputValue: isInputRoutine ? routineInputValue : ''
    });
  }

  deleteRoutineItem(idx) {
    const items = [...this.state.routineItems]
    items.splice(idx, 1)
    this.setState({
      isInputRoutine: false,
      routineInputValue: '',
      routineItems: items
    })
  }

  updateRoutineItem(idx) {
    const { routineItems } = this.state
    this.setState({
      routineInputMode: 'update',
      isInputRoutine: true,
      routineInputValue: routineItems[idx].name
    });
  }

  onSelectRoutineItem(idx) {
    const { routineItems } = this.state
    const selectedItems = routineItems.map((item, i) => ({ ...item, selected: i === idx }))
    this.setState({ routineItems: selectedItems })
  }

  mounted() {
    const { routineInputValue, isInputRoutine, routineItems, routineInputMode } = this.state;
    const { onSelectRoutineItem, updateRoutineItem, deleteRoutineItem } = this
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
      updateItem: updateRoutineItem.bind(this)
    });
    new ExerciseList(exerciseListComponent);
  }
}
