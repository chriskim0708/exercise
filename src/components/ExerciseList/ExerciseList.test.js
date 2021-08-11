/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import ExerciseList from "./ExerciseList.js";

let container;
let component;

describe("ExerciseList", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new ExerciseList(container);
    const element = container.querySelector(".exercise-list");
    expect(element).toBeInTheDocument();
  });
});
