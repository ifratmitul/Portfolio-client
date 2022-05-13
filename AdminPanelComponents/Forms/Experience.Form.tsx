import AdminLayout from '../../components/layout/AdminLayout'
import {Form, Formik} from "formik";
import style from "./Form.module.scss";
import {InputText} from "primereact/inputtext";
import {BaseSyntheticEvent} from "react";
import MyTextInput from "./MyTextInput";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {Experience} from "../../Model/Experience";
import {useDispatch} from "react-redux";
import {addExperience, updateExperience} from "../../actions/ExperienceAction";
import MyTextArea from "./MyTextArea";


interface  Props {
  dialogFlag:boolean;
  resetExpData:any;
  experienceInfo: Experience | null;
  resetFlagState:any;
}


const ExperienceForm = ({dialogFlag, resetExpData, experienceInfo, resetFlagState}:Props) => {
    console.log("Exp Form")
    const dispatch = useDispatch();
  const hideDialog = () => {
        resetFlagState();
        experienceInfo ? resetExpData() : null;
  }

  const handleEdit =(id:string, data:any) => {
      dispatch(updateExperience(id, data));
      hideDialog();
  }

  const handleNewExp = (data:any) => {
    dispatch(addExperience(data));
    hideDialog();
  }

  return (
      <Dialog
          header="Experience Form"
          visible={dialogFlag}
          style={{ width: "50rem" }}
          onHide={hideDialog}
      >
        <Formik
            initialValues={{
              id: experienceInfo ? experienceInfo.id : null,
              company: experienceInfo ? experienceInfo.company : "",
              position: experienceInfo ? experienceInfo.position : "",
              responsibilities: experienceInfo ? experienceInfo.responsibilities : "",
              startDate: experienceInfo ? new Date(experienceInfo.startDate) : null,
              endDate: experienceInfo?.endDate ? new Date(experienceInfo.endDate) : null,
              photoFile: null,
            }}
            onSubmit={(values: any, { resetForm }) => {
              experienceInfo ? handleEdit(values.id,values) :  handleNewExp(values)
            }}
        >
          {({ handleSubmit, isSubmitting, errors, setFieldValue, values }) => (
              <Form
                  className={style["education-form"]}
                  onSubmit={handleSubmit}
                  autoComplete="off"
              >
                <InputText
                    name="photoFile"
                    type="file"
                    placeholder=""
                    onChange={(event: BaseSyntheticEvent) => {
                      setFieldValue("photoFile", event?.currentTarget?.files[0]!);
                    }}
                />
                <MyTextInput
                    label="Company"
                    name="company"
                    placeholder=""
                />
                <div className="field">
              <span className="p-float-label">
                <Calendar
                    ariaLabelledBy="Start Date"
                    dateFormat="dd/mm/yy"
                    name="startDate"
                    style={{width: '100%'}}
                    value={values.startDate}
                    onChange={(event) => {
                      setFieldValue("startDate", event?.value);
                    }}
                    required
                ></Calendar>
                <label htmlFor="date">Start Date</label>
              </span>
                </div>
                <div className="field">
              <span className="p-float-label">
                <Calendar
                    dateFormat="dd/mm/yy"
                    name="endDate"
                    style={{width: '100%'}}
                    value={values.endDate}
                    onChange={(event) => {
                      setFieldValue("endDate", event?.value);
                    }}
                ></Calendar>
                <label htmlFor="date">End Date</label>
              </span>
                </div>

                <MyTextInput
                    label="Position"
                    type="text"
                    name="position"
                    placeholder=""
                />
                  <MyTextArea placeholder="" label="Responsibilities" name="responsibilities"/>
                <Button label={experienceInfo ?  "Edit Info" : "Add Experience"} icon={experienceInfo ? "pi pi-pencil" : "pi pi-plus" } type="submit" />
              </Form>
          )}
        </Formik>
      </Dialog>
  )
}

ExperienceForm.Layout = AdminLayout;
export default ExperienceForm