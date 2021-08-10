/**
 * @jest-environment jsdom 
 */
import '@testing-library/jest-dom/extend-expect'
import Run from "./Run.js";

let container;
let component;

describe('Run', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    container = document.querySelector("#app")
    component = new Run(container);
  })

  test('rendered Run component', () => {
    const element = container.querySelector('#run')
    expect(element).toBeInTheDocument()
  })
})

