import Component from "../../core/component";
import "./TotalTimer.css";

export default class TotalTimer extends Component {
  template() {
    const { time } = this.props || { time: 0 };
    return `
      <span class="total-timer">전체 시간: ${time}초</span>
    `;
  }
}
