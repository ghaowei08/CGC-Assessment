import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const albumReducer = (state, action) => {
  switch (action.type) {
    case "get_albums":
      return action.payload;
    default:
      return state;
  }
};

const onSelectAlbum = (dispatch) => {};

const getAlbums = (dispatch) => {
  return async () => {
    const response = await trackerApi.get("/albums");

    dispatch({ type: "get_albums", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  albumReducer,
  { getAlbums, onSelectAlbum },
  [{
    "id": 1,
    "title": "quidem molestiae enim",
    "userId": 1,
  }]
);
