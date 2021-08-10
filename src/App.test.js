/**
 * @jest-environment jsdom 
 */
import '@testing-library/jest-dom/extend-expect'
import App from "./App.js";

test('rendered App component', () => {
  document.body.innerHTML = `<div id="root"></div>`;
  const container = document.querySelector("#root")
  new App(container);
  const element = container.querySelector('#app')
  expect(element).toBeInTheDocument()
})