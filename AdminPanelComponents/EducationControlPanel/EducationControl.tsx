import { Button } from "primereact/button";
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import EducationItem from "../../components/Education/Education-item";
import AdminLayout from "../../components/layout/AdminLayout";
import { Education } from "../../Model/education";
import EducationForm from "../Forms/Education.Form";
import style from '../admin.module.scss'
import {removeEducation} from "../../actions/EduAction";

const EducationControl = () => {
  const [flag, setFlag] = useState(false);
  const [educationToEdit, setEducationToEdit] = useState(null);
  const dispatch = useDispatch();
  const educations: Education[] = useSelector((state: any) => state.education);

  const changeFlagState = () => {
    setFlag(!flag);
  };

  const selectEducationToEdit = (education:any) => {
    setEducationToEdit(education);
    changeFlagState();
  }

  const resetSelectedEducation = () => {
    setEducationToEdit(null);
  }

  const deleteEducation = (education:Education) => {
      dispatch(removeEducation(education.id));
  }

  return (
    <div className={style['education-control-panel']}>
      <Button
        label="Add Education"
        icon="pi pi-plus"
        onClick={changeFlagState}
      />
      <EducationForm 
      dialogFlag={flag} 
      educationInfo={educationToEdit} 
      formDialogState={changeFlagState} 
      resetEduData={resetSelectedEducation}
      />
      {educations?.length && <ul className={style['education-list']}>{
            educations.map((item:Education) => {
                return (<div key={item.id} className={style['education-list__item']}>
                    <EducationItem  education={item} />
                    <Button label="Edit Edu" onClick={() => selectEducationToEdit(item) }/>
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteEducation(item)} />
                </div>)
            })
        }</ul>}
    </div>
  );
};

EducationControl.layout = AdminLayout;

export default EducationControl;
