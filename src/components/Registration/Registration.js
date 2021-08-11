import Component from "../../core/component";
import Header from "../Header/Header";
import RegToolbar from "../RegToolbar/RegToolbar";
import "./Registration.css";

export default class Registration extends Component {
  setup() {
    this.state = {};
  }
  template() {
    return `
      <div id="registration" class="container">
        <div class="row">
          <div class="col cols-8 pa-15">
            <div id="header-component" class="content-box"></div>
          </div>
        </div>
        <div class="row">
          <div class="col cols-8 pa-15 pt-0">
            <div id="reg-toolbar-component"></div>
          </div>
        </div>
        <div class="row">
          <div class="col cols-8">
            <div id="routine-list-component" class="content-item"></div>
          </div>
          <div class="col cols-8">
            <div id="exercise-list-component" class="content-item"></div>
            <div id="button-component" class="content-item"></div>
          </div>
        </div>
      </div>
    `;
  }
  mounted() {
    const headerComponent = this.target.querySelector("#header-component");
    const regToolbarComponent = this.target.querySelector(
      "#reg-toolbar-component"
    );
    new Header(headerComponent, { title: "매일 운동 루틴" });
    new RegToolbar(regToolbarComponent);
  }
}
