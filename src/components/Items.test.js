/**
 * @jest-environment jsdom 
 */
import '@testing-library/jest-dom/extend-expect'
import Items from "./Items.js";

let container;
let component;

describe('Items', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    container = document.querySelector("#app")
    component = new Items(container);
  })

  test('rendered Items component', () => {
    const element = container.querySelector('#items')
    expect(element).toBeInTheDocument()
  })
})

