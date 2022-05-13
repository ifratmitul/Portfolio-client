import axios, { AxiosError, AxiosResponse } from "axios";
import { Education } from "../Model/education";
import { Experience } from "../Model/Experience";
import { Project } from "../Model/project";
import { Skill } from "../Model/skill";
import {SkillPayload, EducationPayload, ExperiencePayload} from "../Model/skillPayload";
import {AuthInfo} from "../Model/Auth";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Education = {
  list: () => request.get<Education[]>("/education"),
  add: (payload:EducationPayload) => {
    const StartDate = payload.startDate.getFullYear()+"-"+payload.startDate.getMonth()+"-"+payload.startDate.getDate();
    const EndDate =  payload.endDate.getFullYear()+"-"+payload.endDate.getMonth()+"-"+payload.endDate.getDate();
    const formData = new FormData();
    formData.append("Institution", payload.institution);
    formData.append("Degree", payload.degree);
    formData.append("Major", payload.major);
    formData.append("StartDate", StartDate);
    formData.append("EndDate", EndDate);
    formData.append("Priority", JSON.stringify(payload.priority));
    formData.append("Result", JSON.stringify(payload.result));
    formData.append("PhotoFile", payload.photoFile);

    return axios.post<any>("/education", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },

  update: (id:string, payload:EducationPayload) => {
    const StartDate = payload.startDate.getFullYear() + "-" + payload.startDate.getMonth() + "-" + payload.startDate.getDate();
    const EndDate = payload.endDate.getFullYear() + "-" + payload.endDate.getMonth() + "-" + payload.endDate.getDate();
    const formData = new FormData();
    formData.append("Id", id);
    formData.append("Institution", payload.institution);
    formData.append("Degree", payload.degree);
    formData.append("Major", payload.major);
    formData.append("StartDate", StartDate);
    formData.append("EndDate", EndDate);
    formData.append("Priority", JSON.stringify(payload.priority));
    formData.append("Result", JSON.stringify(payload.result));
    if(payload.photoFile) formData.append("PhotoFile", payload.photoFile);

    return axios.put<any>(`/education/${id}`, formData, {
      headers: {"Content-type": "multipart/form-data"},
    });
  },
  delete: (id:string) => axios.delete<any>(`education/${id}`)

};

const Experience = {
  list: () => request.get<Experience[]>("/experience"),
  create: (payload:ExperiencePayload) => {
    const StartDate = payload.startDate.getFullYear() + "-" + payload.startDate.getMonth() + "-" + payload.startDate.getDate();
    const EndDate = payload.endDate ? payload.endDate.getFullYear() + "-" + payload.endDate.getMonth() + "-" + payload.endDate.getDate() : null;
    const formData = new FormData();
    formData.append("Company", payload.company);
    formData.append("Position", payload.position);
    formData.append("Responsibilities", payload.responsibilities);
    formData.append("StartDate", StartDate);
    if(EndDate) formData.append("EndDate", EndDate);
    formData.append("PhotoFile", payload.photoFile);

    return axios.post<any>("/experience", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },
  update:(id:string, payload:ExperiencePayload) => {
    const StartDate = payload.startDate.getFullYear() + "-" + payload.startDate.getMonth() + "-" + payload.startDate.getDate();
    const EndDate = payload.endDate ? payload.endDate.getFullYear() + "-" + payload.endDate.getMonth() + "-" + payload.endDate.getDate() : null;
    const formData = new FormData();
    formData.append("Company", payload.company);
    formData.append("Position", payload.position);
    formData.append("Responsibilities", payload.responsibilities);
    formData.append("StartDate", StartDate);
    if(EndDate) formData.append("EndDate", EndDate);
    if(payload.photoFile) formData.append("PhotoFile", payload.photoFile);

    return axios.put<any>(`/experience/${id}`, formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },
  delete: (id:string) => axios.delete(`experience/${id}`)
};

const Skills = {
  list: () => request.get<Skill[]>("/skill"),
  add: (data: SkillPayload) => {
    const formData = new FormData();
    formData.append("skillName", data.skillName);
    formData.append("photoFile", data.photFile);
    formData.append("rating", JSON.stringify(data.rating));

    return axios.post<any>("/skill", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },
  delete: (id: string) => axios.delete<any>(`skill/${id}`)
};

const Projects = {
  list: () => request.get<Project[]>("/project"),
};

const Auth = {
  login: (payload:any) => axios.post<AuthInfo>('account/login', payload),
  logout:(payload:any) => {}

}

const agent = {
  Education,
  Experience,
  Skills,
  Projects,
  Auth
};

export default agent;
