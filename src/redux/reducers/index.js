import {GET_PHOTOS, GET_PHOTOS_ERROR} from '../types'


export function photoReducer(photo=[], action) {
    switch (action.type) {
        case GET_PHOTOS:
            return action.payload;
        case GET_PHOTOS_ERROR:
            return action.payload.message;
        default:
            return photo;
    }
}