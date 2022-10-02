import {getScreens} from '../../../Utilites/Network';
export const GET_PHOTO = 'GET_PHOTO';
export const getPhotos = (page) => {
  try {
    return async dispatch => {
      const result = await getScreens(page);
      // const json=await result.json()
      if (result) {
        dispatch({
          type: GET_PHOTO,
          payload: result,
        });
        // console.log(result)
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
