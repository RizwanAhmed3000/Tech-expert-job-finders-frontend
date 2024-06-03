import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  websiteAllData: null,
  templateId: null,
  loading: false,
  error: false,
};

export const websiteSlice = createSlice({
  name: "websiteSlice",
  initialState,
  reducers: {
    websitePending: (state) => {
      state.loading = true;
    },

    websiteSuccess: (state, action) => {
      state.loading = false;
      state.websiteAllData = action.payload;
      // state.templateId = action.payload.templateId;
    },

    websiteFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  websitePending,
  websiteSuccess,
  websiteFailure,
} = websiteSlice.actions;

export default websiteSlice.reducer;
