import Component from "../../core/component";
import Button from "../Button/Button";
import TotalTimer from "../TotalTimer/TotalTimer";
import "./RegToolbar.css";

export default class Registration extends Component {
  setup() {
    this.state = {};
  }
  template() {
    return `
      <div id="reg-toolbar" class="toolbar-container">
        <div id="routine-button-component" class="toolbar-item"></div>
        <div class="toolbar-item ml-15">
          <div id="exercise-button-component" class="col"></div>
          <div id="delete-button-component" class="col ml-1"></div>
          <div id="total-timer-component" class="col push-left">전체 시간 4분 25초</div>
        </div>
      </div>
    `;
  }
  mounted() {
    const routineButtonComponent = this.target.querySelector(
      "#routine-button-component"
    );
    const exerciseButtonComponent = this.target.querySelector(
      "#exercise-button-component"
    );
    const deleteButtonComponent = this.target.querySelector(
      "#delete-button-component"
    );
    const totalTimerComponent = this.target.querySelector(
      "#total-timer-component"
    );
    new Button(routineButtonComponent, { text: "새 운동 루틴 +" });
    new Button(exerciseButtonComponent, { text: "+ 운동 추가" });
    new Button(deleteButtonComponent, { text: "삭제" });
    new TotalTimer(totalTimerComponent, { time: 0 });
  }
}
