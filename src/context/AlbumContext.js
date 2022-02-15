import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const albumReducer = (state, action) => {
  switch (action.type) {
    case "get_albums":
      return { ...state, albums: action.payload };
    case "select_album":
      return { ...state, album: action.payload };
    case "edit_name":
      return { ...state, ...action.payload }
    case "submit_name":
      state.album.map(element => {
        if (element.id == state.edit_id) {
          element.title = action.payload
        }
      });
      return {...state, editable: false}
    default:
      return state;
  }
};

const onSubmitName = (dispatch) => {
  return (name) => {
    dispatch({ type: 'submit_name', payload: name })
  }
}

const onEditName = (dispatch) => {
  return (editable, edit_id) => {
    dispatch({ type: 'edit_name', payload: { editable, edit_id } })
  }
}

const onSelectAlbum = (dispatch) => {
  return async (id, callback) => {
    const response = await trackerApi.get(`/albums/${id}/photos`)

    dispatch({ type: "select_album", payload: response.data });

    callback()
  }
};

const getAlbums = (dispatch) => {
  return async () => {
    const response = await trackerApi.get("/albums");
    dispatch({ type: "get_albums", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  albumReducer,
  { getAlbums, onSelectAlbum, onEditName, onSubmitName },
  { albums: [], album: [], edit_id: '', editable: false }
);
