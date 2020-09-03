export const initialState = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Отличный магазин":
      return {
        first: state.first + 1,
        second: state.second,
        third: state.third,
        fourth: state.fourth,
        fifth: state.fifth,
      };
    case "Хороший магазин":
      return {
        first: state.first,
        second: state.second + 1,
        third: state.third,
        fourth: state.fourth,
        fifth: state.fifth,
      };
    case "Обычный магазин":
      return {
        first: state.first,
        second: state.second,
        third: state.third + 1,
        fourth: state.fourth,
        fifth: state.fifth,
      };
    case "Плохой магазин":
      return {
        first: state.first,
        second: state.second,
        third: state.third,
        fourth: state.fourth + 1,
        fifth: state.fifth,
      };
    case "Ужасный магазин":
      return {
        first: state.first,
        second: state.second,
        third: state.third,
        fourth: state.fourth,
        fifth: state.fifth + 1,
      };
    default:
      return;
  }
};
