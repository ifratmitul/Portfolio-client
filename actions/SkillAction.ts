import agent from "../api/agent";
import { Skill } from "../Model/skill";
import { SkillPayload } from "../Model/skillPayload";
import { SkillActions } from "../reducers/SkillReducer";

export const fetchSkills = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      let data = await agent.Skills.list();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(SkillActions.getSkills(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addSkill = (newSkill: SkillPayload) => {
  return async (dispatch: any) => {
    const addData = async (data: SkillPayload) => {
      await agent.Skills.add(data);
      return null;
    };

    try {
      await addData(newSkill);
      dispatch(fetchSkills());
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeSkill = (id: string) => {
  return async (dispatch: any) => {
    const deleteSkillData = async (skillId: string) => {
      await agent.Skills.delete(skillId);
      return null;
    };

    try {
      await deleteSkillData(id);
      dispatch(fetchSkills());
    } catch (error) {
      console.log(error);
    }
  };
};

