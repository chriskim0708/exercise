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

  test("초기 렌더링 시 Props:focus true라면 focus가 된 상태로 렌더링 되어야한다.", () => {
    new Input(container, { focus: true });
    const element = container.querySelector(".input-box");
    expect(element.matches(":focus")).toBe(true);
  });

  test("렌더링 시 Props:value의 값을 초기값으로 표시한다.", () => {
    let element;

    new Input(container, { value: "" });
    element = container.querySelector(".input-box");
    expect(element.value).toBe("");

    new Input(container, { value: "아침 운동 루틴 45분" });
    element = container.querySelector(".input-box");
    expect(element.value).toBe("아침 운동 루틴 45분");
  });

  test("렌더링 시 Props:placeholder로 placeholder를 표시한다.", () => {
    new Input(container, { placeholder: "입력하세요." });
    const element = container.querySelector(".input-box");
    expect(element.getAttribute("placeholder")).toBe("입력하세요.");
  });

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

  test("입력창에서 enter 클릭 시 현재 입력된 값을 Props:onEnter 이벤트에 전달한다.", () => {
    const onEnter = jest.fn();
    new Input(container, { onEnter });
    const element = container.querySelector(".input-box");
    const event = new KeyboardEvent("keypress", {
      keyCode: 13,
      bubbles: true
    });
    element.dispatchEvent(event);
    expect(onEnter).toHaveBeenCalledWith(element.value);
  });

  test("입력창에서 esc 클릭 시 Props:onCancel 이벤트를 호출한다.", () => {
    const onCancel = jest.fn();
    new Input(container, { onCancel });
    const element = container.querySelector(".input-box");
    const event = new KeyboardEvent("keypress", {
      keyCode: 27,
      bubbles: true
    });
    element.dispatchEvent(event);
    expect(onCancel).toHaveBeenCalledWith(element.value);
  });
});
