import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 const initialState = [{
    items:[],
    loading: false
 }]
export const fetchCombos = createAsyncThunk("combos/fetchCombos", async (combo)=>{
    const resp = await fetch("/api/combos");
    return resp.json()
})

export const añadirCombo = createAsyncThunk("combos/añadirCombo", async (combo)=>{
    const resp = await fetch("/api/combos", {
        method: "POST",
        headers: { "Content-Type": "application.json"},
        body: JSON.stringify(combo)
    })
    return resp.json();
} )
const comboSlice = createSlice({
    name: "combos",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
      .addCase(fetchCombos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(añadirCombo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
})
export default comboSlice.reducer;