import { IRoot } from "./iroot";
import { userSlice } from "./slices/user.slice";

export const root: IRoot =  {
  user: userSlice
}