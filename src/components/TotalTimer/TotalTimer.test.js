/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import TotalTimer from "./TotalTimer.js";

let container;
let component;

describe("Button", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new TotalTimer(container);
    const element = container.querySelector(".total-timer");
    expect(element).toBeInTheDocument();
  });

  test("초기 시간 0초 표시", () => {
    const time = 0;
    new TotalTimer(container, { time });
    const element = container.querySelector(".total-timer");
    expect(element).toHaveTextContent(`전체 시간: ${time}초`);
  });
});
