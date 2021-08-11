/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import RoutineList from "./RoutineList.js";

let container;
let component;

describe("RoutineList", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new RoutineList(container);
    const element = container.querySelector(".routine-list");
    expect(element).toBeInTheDocument();
  });
});
