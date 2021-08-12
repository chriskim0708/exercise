/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import RegToolbar from "./RegToolbar.js";

let container;

describe("RegToolbar", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new RegToolbar(container);
    const element = container.querySelector("#reg-toolbar");
    expect(element).toBeInTheDocument();
  });

  test("새 운동 루틴 클릭 시 true 전달", () => {});
});
