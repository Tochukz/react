import { Models } from "@rematch/core";
import { userSlice } from "./slices/user.slice";

export interface IRoot extends Models<IRoot> {
  user: typeof userSlice
}