import { RematchDispatch, RematchRootState, init } from "@rematch/core";
import { root } from "./root";
import { IRoot } from "./iroot";

const store = init({ models: root});

export default store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<IRoot>;
export type RootState = RematchRootState<IRoot>;