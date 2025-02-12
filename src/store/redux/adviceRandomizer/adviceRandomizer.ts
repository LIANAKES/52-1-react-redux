import axios from "axios";

import { createAppSlice } from "store/createAppSlice";
import {AdviceRandomizerSliceState} from "./types"


    const adviceRandomizerInitialState: AdviceRandomizerSliceState = {
    data: [],
    error: undefined,
    status: "default",
  };
  
  export const adviceRandomizerSlice = createAppSlice({
    name: "ADVICE_RANDOMIZER",
    initialState: adviceRandomizerInitialState,
    reducers: create => ({
      clearAdvices: create.reducer((state) => {
        state.data = [];
      }),

      getAdvice: create.asyncThunk(

        async (arg, thunkApi) => {
          try {
            const result = await axios.get("https://api.adviceslip.com/advice");
            return result.data.slip.advice;
          } catch (error) {
            return thunkApi.rejectWithValue(error);
          }
        },
        {
          pending: (state: AdviceRandomizerSliceState) => {
            state.status = "loading";
            state.error = undefined;
          },
          fulfilled: (state: AdviceRandomizerSliceState, action: any) => {
            state.data.push(action.payload);
            state.status = "success";
          },
          rejected: (state: AdviceRandomizerSliceState, action: any) => {
            console.error("Ошибка запроса:", action.payload);
            state.error = action.payload;
            state.status = "error";
          },
        }
      ),
    }),
    selectors: {
      adviceData: (state: AdviceRandomizerSliceState) => state
    }
  })
  
  export const adviceRandomizerActions = adviceRandomizerSlice.actions;
  export const adviceRandomizerSelectors = adviceRandomizerSlice.selectors;