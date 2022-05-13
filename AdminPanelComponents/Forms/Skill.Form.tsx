import AdminLayout from "../../components/layout/AdminLayout";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addSkill } from "../../actions/SkillAction";
import MyTextInput from "./MyTextInput";
import style from './Form.module.scss';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { BaseSyntheticEvent } from "react";


const SkillForm = () => {
  console.log("hello from skill form");
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ skillName: "", rating: 0, photFile: null }}
      onSubmit={(values:any , {resetForm}) => {
        dispatch(addSkill(values));
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting, errors, setFieldValue }) => (
        <Form 
        className={style['skill-form']}
        onSubmit={handleSubmit} autoComplete="off">
          <InputText  name="photFile" type="file" placeholder="" onChange={(event:BaseSyntheticEvent) => {
            setFieldValue("photFile", event?.currentTarget?.files[0]!);
          }}/>          
          <MyTextInput  label="Skill Name" name="skillName" placeholder="" />
          <MyTextInput  label="Priority" type="number" name="rating" placeholder="" />
          <Button label="Add Skill" icon="pi pi-plus"  type="submit"/>
        </Form>
      )}
    </Formik>
  );
};

SkillForm.Layout = AdminLayout;
export default SkillForm;
