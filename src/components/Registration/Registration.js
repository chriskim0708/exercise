import Component from "../../core/component";
import Header from "../Header/Header";
import RegToolbar from "../RegToolbar/RegToolbar";
import RoutineList from "../RoutineList/RoutineList";
import ExerciseList from "../ExerciseList/ExerciseList";
import "./Registration.css";

export default class Registration extends Component {
  setup() {
    this.state = {};
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
  mounted() {
    const headerComponent = this.target.querySelector("#header-component");
    const regToolbarComponent = this.target.querySelector(
      "#reg-toolbar-component"
    );
    const routineListComponent = this.target.querySelector("#routine-list-component");
    const exerciseListComponent = this.target.querySelector("#exercise-list-component");
    new Header(headerComponent, { title: "매일 운동 루틴" });
    new RegToolbar(regToolbarComponent);
    new RoutineList(routineListComponent);
    new ExerciseList(exerciseListComponent);
  }
}
