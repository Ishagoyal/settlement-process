import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NegotiationState {
  amount: number | null;
  response: {
    agreed: boolean;
    message?: string;
  };
}

const initialState: NegotiationState = {
  amount: null,
  response: {
    agreed: false,
  },
};

export const negotiationSlice = createSlice({
  name: "negotiation",
  initialState,
  reducers: {
    submitAmount: (state, action: PayloadAction<number | null>) => {
      state.amount = action.payload;
    },
    resetAmount: (state) => {
      state.amount = null;
    },
    setResponse: (
      state,
      action: PayloadAction<{ agreed: boolean; message?: string }>
    ) => {
      state.response = action.payload;
    },
  },
});

export const { submitAmount, resetAmount, setResponse } =
  negotiationSlice.actions;

export default negotiationSlice.reducer;
