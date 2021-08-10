/**
 * @jest-environment jsdom 
 */
import '@testing-library/jest-dom/extend-expect'
import Registration from "./Registration.js";

let container;
let component;

describe('Registration', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    container = document.querySelector("#app")
    component = new Registration(container);
  })

  test('rendered Registration component', () => {
    const element = container.querySelector('#registration')
    expect(element).toBeInTheDocument()
  })
})

