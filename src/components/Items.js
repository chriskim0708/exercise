import Component from "../core/component";
import "./Items.css";

export default class Items extends Component {
  setup() {
    this.state = {
      items: ["item1", "item2"]
    };
  }
  template() {
    const { items } = this.state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button class="addBtn red">추가</button>
    `;
  }
  setEvent() {
    this.addEvent("click", ".addBtn", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}
