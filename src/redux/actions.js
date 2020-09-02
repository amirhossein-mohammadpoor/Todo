import types from './types';


const addTodo = item => {
  return {
    type: types.ADD_TODO,
    item: item
  }
}

const editTodo = item => {
  return {
    type: types.EDIT_TODO,
    item: item
  }
}

const deleteTodo = id => {
  return {
    type: types.DELETE_TODO,
    id
  }
}

const checkTodo = (id, checked) => {
  
  if (checked) {
    return {
      type: types.CHECKED_TODO,
      id
    }
  }
  return {
    type: types.NOT_CHECKED_TODO,
    id
  }
}

export {
  addTodo,
  editTodo,
  deleteTodo,
  checkTodo
}