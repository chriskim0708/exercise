/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input.js";

let container;

describe("Button", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new Input(container);
    const element = container.querySelector(".input-box");
    expect(element).toBeInTheDocument();
  });

  test("props type에 따라 input type이 변경된다. 없는 경우 type은 text가 된다.", () => {
    let element;

    new Input(container, { type: "text" });
    element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "text");

    new Input(container, { type: "number" });
    element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "number");

    new Input(container);
    element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "text");
  });
});
