/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import RoutineList from "./RoutineList.js";
import { routineListMock } from "@/__mocks__/testMock";

let container;

describe("RoutineList", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.querySelector("#container");
  });

  test("렌더링 확인", () => {
    new RoutineList(container);
    const element = container.querySelector(".routine-list-container");
    expect(element).toBeInTheDocument();
  });

  test("Props:isInputRoutine true면 운동 루틴 input을 보여준다.", () => {
    new RoutineList(container, {
      isInputRoutine: true
    });
    const element = container.querySelector("#routine-input-component");
    expect(element).toBeInTheDocument();
  });

  test("Props:isInputRoutine false면 운동 루틴 input을 감춘다.", () => {
    new RoutineList(container, {
      isInputRoutine: false
    });
    const element = container.querySelector("#routine-input-component");
    expect(element).not.toBeInTheDocument();
  });

  test("Props:routineItems의 길이만큼 리스트를 생성한다.", () => {
    new RoutineList(container, {
      routineItems: routineListMock
    });
    const element = container.querySelectorAll(".routine-list-item");
    expect(element).toHaveLength(3);
  });

  test("Props:routineItems가 없거나 빈 배열이면 아무 것도 표시되지 않는다.", () => {
    new RoutineList(container, {
      routineItems: []
    });
    const element = container.querySelectorAll(".routine-list-item");
    expect(element).toHaveLength(0);
  });

  test("운동 루틴 리스트를 클릭하면 Props:onSelect 이벤트가 실행된다.", () => {
    const onSelect = jest.fn();
    new RoutineList(container, {
      onSelect,
      routineItems: routineListMock
    });
    const element = container.querySelectorAll(".routine-list-item")[0];
    element.click();
    expect(onSelect).toHaveBeenCalled();
  });

  test("onSelect 호출 시 리스트의 index를 넘겨줘야한다.", () => {
    const onSelect = jest.fn();
    new RoutineList(container, {
      onSelect,
      routineItems: routineListMock
    });
    const element = container.querySelector("[data-index='0']");
    const idx = Number(element.dataset.index);
    element.click();
    expect(onSelect).toBeCalledWith(idx);
  });

  test("deleteItem 호출 시 리스트의 index를 넘겨줘야한다.", () => {
    const deleteItem = jest.fn();
    new RoutineList(container, {
      deleteItem,
      routineItems: routineListMock
    });
    const element = container
      .querySelectorAll(".routine-list-item")[0]
      .querySelector(".delete-item");
    const idx = Number(element.parentElement.dataset.index);
    element.click();
    expect(deleteItem).toBeCalledWith(idx);
  });

  test("updateItem 호출 시 리스트의 index를 넘겨줘야한다.", () => {
    const updateItem = jest.fn();
    new RoutineList(container, {
      updateItem,
      routineItems: routineListMock
    });
    const element = container
      .querySelectorAll(".routine-list-item")[0]
      .querySelector(".update-item");
    const idx = Number(element.parentElement.dataset.index);
    element.click();
    expect(updateItem).toBeCalledWith(idx);
  });

  test("Props:routineItems의 selected가 true라면 해당 리스트에 selected 클래스가 활성화된다.", () => {
    new RoutineList(container, {
      routineItems: routineListMock
    });
    const element = container.querySelectorAll(".routine-list-item")[0];
    expect(element).toHaveClass("selected");
  });
});
