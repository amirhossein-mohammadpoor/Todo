import types from "./types"

if (!localStorage.getItem("items")) {
  localStorage.setItem("items", JSON.stringify([]))
}

const initialState = {
  items: [...JSON.parse(localStorage.getItem("items"))],
  doneItems: []
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.item]
      }
    case types.EDIT_TODO:
      return {
        ...state,
        items: state.items.map(item => item.id === action.item.id ? action.item : item)
      }
    case types.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    case types.CHECKED_TODO:
      return {
        ...state,
        doneItems: [...state.doneItems, action.id]
      }
    case types.NOT_CHECKED_TODO:
      return {
        ...state,
        doneItems: state.doneItems.filter(doneItem => doneItem !== action.id)
      }
    default:
      return state
  }
}

export default reducer