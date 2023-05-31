import { createModel } from "@rematch/core";
import { PersonalInfo } from '../../models/personal-info';
import { ProfessionalInfo } from '../../models/professional-info';
import { IRoot } from "../iroot";
import { users } from "../../data/users";

export interface IUserState {
  personalInfo: PersonalInfo, 
  professionalInfo:  ProfessionalInfo,
}

export const userSlice = createModel<IRoot>()({
  state: {
    personalInfo: {},
    professionalInfo: {},
  } as IUserState,
  reducers: {
    setPersonalInfo(state, payload){  
      return {
        ...state,
        personalInfo: payload,
      };
    },
    setProfessionalInfo(state, payload) {     
      return {
        ...state,
        professionalInfo: payload,
      };
    }
  },
  effects: (dispatch) => ({
    async getPersonalInfo(userId, state){
      const response = await new Promise((resolve, reject) => {
        console.log(`Fetching personal info for userId ${userId} ...`);
        const time = Math.round(Math.random() * 10000);       
        setTimeout(() => {
          const user = users.find(usr => usr.userId == userId);
          console.log('user', user);
          resolve(user?.personalInfo ?? {});
        }, time);
      });      
      dispatch.user.setPersonalInfo(response);
      return response;
    },
    async getProfessionalInfo(userId, state) {
      const response = await new Promise((resolve, reject) => {
        console.log(`Fetching professional info for userId ${userId} ...`);
        const time =  Math.round(Math.random() * 10000);
        setTimeout(() =>{
          const user = users.find(usr => usr.userId == userId);
          resolve(user?.professionalInfo ?? {});         
        }, time);
      });
      dispatch.user.setProfessionalInfo(response);
      return response;
    }
  })
})