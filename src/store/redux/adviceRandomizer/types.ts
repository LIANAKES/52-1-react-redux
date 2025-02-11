export interface AdviceRandomizerSliceState{
    data: string[];
    error?: any;
    status: "default" | "loading" | "success" | "error";
  }