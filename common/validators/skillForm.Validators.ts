import * as Yup from "yup";

export const  SkillFormValidator = Yup.object({
  skillName: Yup.string().required("skill name required"),
  photFile: Yup.object().required("must have skill logo"),
  rating: Yup.number()
    .min(0, "rating must be in between 0-10")
    .max(10, "rating must be in between 0-10")
    .required(),
});

