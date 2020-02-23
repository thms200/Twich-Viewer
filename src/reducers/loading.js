import { LOADING } from '../constants/actionTypes';

const initialState = {
  loading: true,
};

export function loading(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
