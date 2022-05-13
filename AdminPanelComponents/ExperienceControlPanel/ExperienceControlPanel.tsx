import AdminLayout from "../../components/layout/AdminLayout";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Education} from "../../Model/education";
import style from "../admin.module.scss";
import {Button} from "primereact/button";
import {Experience} from "../../Model/Experience";
import ExperienceForm from "../Forms/Experience.Form";
import ExperienceItem from "../../components/Experience/Experience-item";
import {removeExperience} from "../../actions/ExperienceAction";

const ExperienceControlPanel = () => {
    const [flag, setFlag] = useState(false);
    const [experienceToEdit, setExperienceToEdit] = useState(null);
    const dispatch = useDispatch();
    const experiences: Experience[] = useSelector((state: any) => state.experience);

    const changeFlagState = () => {
        setFlag(!flag);
    };

    const selectExperienceToEdit = (education:any) => {
        setExperienceToEdit(education);
        changeFlagState();
    }

    const resetSelectedExperience = () => {
        setExperienceToEdit(null);
    }

    const deleteExperience = (exp:Experience) => {
        dispatch(removeExperience(exp.id));
    }

    return (
        <div className={style['experience-control-panel']}>
            <Button
                label="Add Education"
                icon="pi pi-plus"
                onClick={changeFlagState}
            />
            <ExperienceForm
                dialogFlag={flag}
                experienceInfo={experienceToEdit}
                resetFlagState={changeFlagState}
                resetExpData={resetSelectedExperience}
            />
            {experiences?.length && <ul className={style['experience-list']}>{
                experiences.map((item:Experience) => {
                    return (<div key={item.id} className={style['experience-list__item']}>
                        <ExperienceItem experience={item} />
                        <Button label="Edit Experience" onClick={() => selectExperienceToEdit(item) }/>
                        <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteExperience(item)} />
                    </div>)
                })
            }</ul>}
        </div>
    );
}

ExperienceControlPanel.Layout = AdminLayout;
export default ExperienceControlPanel;