import { combineReducers } from 'redux';

function token(state = '', action){
  switch(action.type){
    case 'ADD_TOKEN':
      return action.token;
    case 'REMOVE_TOKEN':
      return action.token;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  token
})

export default rootReducer;