import {GET_PHOTO} from '../actions/postActions';

const initialState = {
  photos: [],
};
export const useReducer = (state = initialState, action) => {
  // console.log('action',action)
  switch (action.type) {
    case GET_PHOTO:
      const newPhotos =
        action.payload.page == 1
          ? action.payload.data
          : [...state.photos, ...action.payload.data];
      return {...state, photos: newPhotos};
    default:
      return state;
  }
};
