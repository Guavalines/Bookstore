import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../../app/store"

export enum Statuses {
  Initial = "Not Fetched",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Deleted = "Deleted",
  Error = "Error"
}

export interface PostState {
  id?: number;
  title?: string;
  body?: string;
  created_at?: any;
  updated_at?: any;
}

export interface PostsState {
  posts: PostState[];
  status: string;
}

const initialState: PostsState = {
  posts: [
    {
      id: 0,
      title: "",
      body: "",
      created_at: "",
      updated_at: "",
    }
  ],
  status: Statuses.Initial
}

export const postSlice = createSlice({
  name: "posts",
  initialState,
  /**
   * Synchronous actions
   */
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchPostsAsync.pending, (state) => {
          return produce(state, (draftState) => {
            draftState.status = Statuses.Loading;
          })
        })

        .addCase(fetchPostsAsync.fulfilled, (state) => {
          return produce(state, (draftState) => {
            draftState.status = Statuses.UpToDate;
          })
        })

        .addCase(fetchPostsAsync.pending, (state) => {
          return produce(state, (draftState) => {

          })
        })
  }

})
