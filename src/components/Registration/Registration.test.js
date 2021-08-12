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

  test('렌더링 확인', () => {
    const element = container.querySelector('#registration')
    expect(element).toBeInTheDocument()
  })

  test('새 운동 등록 이벤트가 호출되면 state.isInputRoutine 상태 변경', () => {
    let state;
    
    component.addRoutineItem()
    state = component.state.isInputRoutine;
    expect(state).toEqual(true)
    
    component.addRoutineItem()
    state = component.state.isInputRoutine;
    expect(state).toEqual(false)
  })
})

