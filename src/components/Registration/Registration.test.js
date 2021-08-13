/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import Registration from "./Registration.js";

let container;

describe("Registration", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    container = document.querySelector("#app");
  });

  test("렌더링 확인", () => {
    new Registration(container);
    const element = container.querySelector("#registration");
    expect(element).toBeInTheDocument();
  });
});
