export interface SkillPayload {
    skillName: string;
    photFile: File;
    rating: number;
}

export interface EducationPayload {
    institution: string;
    startDate: Date;
    endDate: Date;
    degree: string;
    major: string;
    result: number;
    priority: number;
    photoFile: File;
}
export interface ExperiencePayload {
    company:string;
    position:string;
    responsibilities:string;
    startDate: Date;
    endDate?: Date | null;
    photoFile: File;
}

export interface LoginPayload {
    email:string;
    password:string;
}

export interface LogOutPayLoad {}
