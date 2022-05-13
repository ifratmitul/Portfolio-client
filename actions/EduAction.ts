import agent from "../api/agent";
import { EduAction } from "../reducers/EduReducer";
import {EducationPayload} from "../Model/skillPayload";

export const fetchEducationData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      let data = await agent.Education.list();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(EduAction.getEducationList(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addEducation = (newEdu:EducationPayload) => {
  return async (dispatch: any) => {
    const addData = async (data: EducationPayload) => {
      await agent.Education.add(data);
      return null;
    };

    try {
      await addData(newEdu);
      dispatch(fetchEducationData());
    } catch (error) {
      console.log(error);
    }
  };
};


export const updateEducation = (id: string,edu:EducationPayload) => {
  return async (dispatch: any) => {
    const updateEduDate = async (id:string, data: EducationPayload) => {
      await agent.Education.update(id, data);
      return null;
    };

    try {
      await updateEduDate(id, edu);
      dispatch(fetchEducationData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeEducation = (id: string) => {
  return async (dispatch: any) => {
    const deleteEduData = async (Id: string) => {
      await agent.Education.delete(Id);
      return null;
    };

    try {
      await deleteEduData(id);
      dispatch(fetchEducationData());
    } catch (error) {
      console.log(error);
    }
  };
};
