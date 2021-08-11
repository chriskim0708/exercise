/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button.js";

let container;
let component;

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

  test("버튼명 '새 운동 루틴 +' 표시", () => {
    new Button(container, { text: "새 운동 루틴 +" });
    const element = container.querySelector(".btn");
    expect(element).toHaveTextContent("새 운동 루틴 +");
  });
});
