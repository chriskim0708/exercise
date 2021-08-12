/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";

test("렌더링 확인", () => {
  document.body.innerHTML = `<div id="container"></div>`;
  const container = document.querySelector("#container");
  new App(container);
  const element = container.querySelector("#app");
  expect(element).toBeInTheDocument();
});
