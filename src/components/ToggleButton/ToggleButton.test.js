/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import ToggleButton from "./ToggleButton.js";

let container;

describe("Button", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new ToggleButton(container);
    const element = container.querySelector(".btn");
    expect(element).toBeInTheDocument();
  });

  test("버튼명 '새 운동 루틴 +' 표시", () => {
    new ToggleButton(container, { text: "새 운동 루틴 +" });
    const element = container.querySelector(".btn");
    expect(element).toHaveTextContent("새 운동 루틴 +");
  });

  test("버튼 클릭 시 props로 전달 받은 이벤트 호출", () => {
    const onToggle = jest.fn();
    new ToggleButton(container, {
      text: "새 운동 루틴 +",
      onToggle: onToggle.bind(this)
    });
    const element = container.querySelector(".btn");
    element.click();
    expect(onToggle).toHaveBeenCalled();
  });
});
