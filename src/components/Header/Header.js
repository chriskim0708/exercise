import Component from "../../core/component";
import "./Header.css";

export default class Header extends Component {
  template() {
    const { title } = this.props || { title: "" };
    return `
      <h1 class="title">${title}</h1>
    `;
  }
}
