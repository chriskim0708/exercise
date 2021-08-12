/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input.js";

let container;

describe("Input", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new Input(container);
    const element = container.querySelector(".input-box");
    expect(element).toBeInTheDocument();
  });

  test("렌더링 시 Props:value의 값을 초기값으로 표시한다.", () => {
    let element;

    new Input(container, { value: "" });
    element = container.querySelector(".input-box");
    expect(element.value).toBe("")

    new Input(container, { value: "아침 운동 루틴 45분" });
    element = container.querySelector(".input-box");
    expect(element.value).toBe("아침 운동 루틴 45분")
  })

  test("렌더링 시 Props:placeholder로 placeholder를 표시한다.", () => {
    new Input(container, { placeholder: "입력하세요." });
    const element = container.querySelector(".input-box");
    expect(element.getAttribute('placeholder')).toBe("입력하세요.")
  })

  test("Props:type에 따라 input type이 변경된다.", () => {
    let element;

    new Input(container, { type: "text" });
    element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "text");

    new Input(container, { type: "number" });
    element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "number");
  });

  test("Props:type이 없는 경우 type은 text가 된다.", () => {
    new Input(container);
    const element = container.querySelector(".input-box");
    expect(element).toHaveAttribute("type", "text");
  });
});
