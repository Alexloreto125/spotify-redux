import {
  // PayloadAction,
  // createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
// import { Datum } from "../../interfaces/interfaces";
// import { RootState } from "@reduxjs/toolkit/query";

const baseEndpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
export const getMusicAction = createAsyncThunk(
  "music/getMusic",
  // + query + "&limit=10"
  async (query: string) => {
    try {
      const response = await fetch(`${baseEndpoint}${query}`);
      if (response.ok) {
        const { data } = await response.json();
        const limitedResults = data.slice(0, 12);
        console.log("prova 2", data);
        return limitedResults;
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const musicSlice = createSlice({
  name: "music",
  initialState: {
    music: [],
    favourites: [],
    currentTrackPreviewUrl: null,
  },
  reducers: {
    setCurrentTrackPreviewUrl: (state, action) => {
      state.currentTrackPreviewUrl = action.payload;
    },
    // addToFavourite: (state, action: PayloadAction<Datum>) => {
    //   state.favourites.push(action.payload);
    // },
    // removeFromFavourite: (state, action: PayloadAction<number>) => {
    //   state.favourites = state.favourites.filter(
    //     (item) => item !== action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getMusicAction.fulfilled, (state, action) => {
      console.log("Action payload:", action.payload);

      state.music = action.payload;
      console.log("state.music", state.music);
    });
  },
});

// export const { addToFavourite, removeFromFavourite } = musicSlice.actions;

export const { setCurrentTrackPreviewUrl } = musicSlice.actions;
export default musicSlice.reducer;
