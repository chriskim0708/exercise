/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button.js";

let container;

describe("Button", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new Button(container);
    const element = container.querySelector(".btn");
    expect(element).toBeInTheDocument();
  });

  test("버튼명 '삭제' 표시", () => {
    new Button(container, { text: "삭제" });
    const element = container.querySelector(".btn");
    expect(element).toHaveTextContent("삭제");
  });

  test("버튼 클릭 시 onClick 이벤트 호출", () => {
    const onClick = jest.fn();
    new Button(container, {
      text: "삭제",
      onClick
    });
    const element = container.querySelector(".btn");
    element.click();
    expect(onClick).toHaveBeenCalled();
  });
});
