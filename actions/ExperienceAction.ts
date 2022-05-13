import agent from "../api/agent";
import { ExperienceAction } from "../reducers/ExperienceReducer";
import {ExperiencePayload} from "../Model/skillPayload";

export const fetchExperienceData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      let data = await agent.Experience.list();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(ExperienceAction.getExperience(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateExperience = (id: string,exp:ExperiencePayload) => {
  return async (dispatch: any) => {
    const updateExpData = async (id:string, data: ExperiencePayload) => {
      await agent.Experience.update(id, data);
      return null;
    };

    try {
      await updateExpData(id, exp);
      dispatch(fetchExperienceData());
    } catch (error) {
      console.log(error);
    }
  };
};


export const addExperience = (newExp:ExperiencePayload) => {
  return async (dispatch: any) => {
    const addData = async (data: ExperiencePayload) => {
      await agent.Experience.create(data);
      return null;
    };

    try {
      await addData(newExp);
      dispatch(fetchExperienceData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeExperience = (id: string) => {
  return async (dispatch: any) => {
    const deleteExpData = async (Id: string) => {
      await agent.Experience.delete(Id);
      return null;
    };

    try {
      await deleteExpData(id);
      dispatch(fetchExperienceData());
    } catch (error) {
      console.log(error);
    }
  };
};


