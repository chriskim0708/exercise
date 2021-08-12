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

  test("전달 받은 Props:text를 표시한다.", () => {
    new ToggleButton(container, { text: "새 운동 루틴 +" });
    const element = container.querySelector(".btn");
    expect(element).toHaveTextContent("새 운동 루틴 +");
  });

  test("Props:isActivate true면 버튼은 active class를 적용한다.", () => {
    new ToggleButton(container, { isActivate: true });
    const element = container.querySelector(".btn");
    expect(element).toHaveClass('active');
  });

  test("Props:isActivate false면 버튼은 deactive class를 적용한다.", () => {
    new ToggleButton(container, { isActivate: false });
    const element = container.querySelector(".btn");
    expect(element).toHaveClass('deactive')
  });

  test("버튼 클릭 시 Props:onToggle 이벤트를 호출한다.", () => {
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
