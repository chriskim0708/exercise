/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import RegToolbar from "./RegToolbar.js";

let container;
let component;

describe("RegToolbar", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
    component = new RegToolbar(container);
  });

  test("rendered RegToolbar component", () => {
    const element = container.querySelector("#reg-toolbar");
    expect(element).toBeInTheDocument();
  });
});
