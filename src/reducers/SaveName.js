import { SAVE_NAME } from '../actions';

const GLOBAL_STATE = {
  name: ''
};

const reducerName = (state = GLOBAL_STATE, action) => {
  switch (action.type) {
  case SAVE_NAME:
    return { ...state, name: action.name };
  default:
    return state;
  }
};

export default reducerName;
