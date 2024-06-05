import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NegotiationState {
  amount: number | null;
  response: {
    agreed: boolean;
    message?: string;
    responded: boolean;
  };
  partyBTurn: boolean;
}

const initialState: NegotiationState = {
  amount: null,
  response: {
    agreed: false,
    responded: false,
  },
  partyBTurn: false,
};

export const negotiationSlice = createSlice({
  name: "negotiation",
  initialState,
  reducers: {
    submitAmount: (state, action: PayloadAction<number | null>) => {
      state.amount = action.payload;
      state.response.responded = false;
    },
    resetAmount: (state) => {
      state.amount = null;
    },
    setResponse: (
      state,
      action: PayloadAction<{ agreed: boolean; message?: string }>
    ) => {
      state.response = { ...action.payload, responded: true };
    },
    resetRespondedFlag: (state) => {
      state.response.responded = false;
    },
    changePartyBTurnFlag: (state, action) => {
      state.partyBTurn = action.payload;
    },
  },
});

export const {
  submitAmount,
  resetAmount,
  setResponse,
  resetRespondedFlag,
  changePartyBTurnFlag,
} = negotiationSlice.actions;

export default negotiationSlice.reducer;
