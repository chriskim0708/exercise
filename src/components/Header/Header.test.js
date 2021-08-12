/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header.js";

let container;

describe("Header", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new Header(container);
    const element = container.querySelector(".title");
    expect(element).toBeInTheDocument();
  });

  test("타이틀로 '매일 운동 루틴' 표시", () => {
    new Header(container, { title: "매일 운동 루틴" });
    const element = container.querySelector(".title");
    expect(element).toHaveTextContent("매일 운동 루틴");
  });
});
