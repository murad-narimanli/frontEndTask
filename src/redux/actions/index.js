import { GET_PHOTOS , GET_PHOTOS_ERROR} from "../types";
import api from "../../const/api";

export const getPhotos = () => async (dispatch) => {
    api
        .get("v2/list?limit=5")
        .then((res) => {
            dispatch({
                type: GET_PHOTOS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_PHOTOS_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};