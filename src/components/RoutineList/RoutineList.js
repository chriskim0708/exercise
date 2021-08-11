import Component from "../../core/component";
import Input from "../Input/Input";
import "./RoutineList.css";


export default class RoutineList extends Component {
  template() {
    return `
      <div class="routine-list pa-10">
        <div id="routine-input-component"></div>
      </div>
    `;
  }

  mounted() {
    const routineInputComponent = this.target.querySelector('#routine-input-component')
    new Input(routineInputComponent, { type: 'text' })
  }

  setEvent() {
    this.addEvent('keyup', '.input-box', ({ keyCode }) => {
      if (keyCode === 13) {
        console.log('enter')
        return;
      }

      if (keyCode === 27) {
        console.log('esc')
        return;
      }

      return false;
    })
  }
}
