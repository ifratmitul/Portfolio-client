import AdminLayout from "../../components/layout/AdminLayout";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import MyTextInput from "./MyTextInput";
import style from "./Form.module.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Education } from "../../Model/education";
import { Dialog } from "primereact/dialog";
import { BaseSyntheticEvent, ReactPropTypes } from "react";
import {addEducation, updateEducation} from "../../actions/EduAction";

interface Props {
  dialogFlag: boolean;
  educationInfo?: Education | null;
  formDialogState: any;
  resetEduData: any;
}

const EducationForm = ({dialogFlag, educationInfo, formDialogState,resetEduData,}: Props) => {
    const dispatch = useDispatch();
    const hideDialog = () => {
    formDialogState();
    educationInfo ? resetEduData() : null;
  };

  const handleEdit= (id:string, data:any) => {
      dispatch(updateEducation(id, data));
      hideDialog();
  }

  const handleNewEducation = (data:any) => {
      dispatch(addEducation(data));
      hideDialog();
  }
  return (
    <Dialog
      header="Education Form"
      visible={dialogFlag}
      style={{ width: "50rem" }}
      onHide={hideDialog}
    >
      <Formik
        initialValues={{
            id: educationInfo ? educationInfo.id : null,
          institution: educationInfo ? educationInfo.institution : "",
          priority: educationInfo ? educationInfo.priority : 0,
          degree: educationInfo ? educationInfo.degree : "",
          major: educationInfo ? educationInfo.major : "",
          result: educationInfo ? educationInfo.result : "",
          startDate: educationInfo ? new Date(educationInfo.startDate) : null,
          endDate: educationInfo ? new Date(educationInfo.endDate) : null,
          photoFile: null,
        }}
        onSubmit={(values: any, { resetForm }) => {
          educationInfo ? handleEdit(values.id,values) :  handleNewEducation(values)
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
              label="Institution"
              name="institution"
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
                  required
                ></Calendar>
                <label htmlFor="date">End Date</label>
              </span>
            </div>

            <MyTextInput
              label="Degree"
              type="text"
              name="degree"
              placeholder=""
            />
              <MyTextInput
                  label="Major"
                  type="text"
                  name="major"
                  placeholder=""
              />

              <MyTextInput
                  label="Result"
                  type="number"
                  name="result"
                  placeholder=""
              />
            <MyTextInput
              label="Priority"
              type="number"
              name="priority"
              placeholder=""
            />
            <Button label={educationInfo ?  "Edit Info" : "Add Education"} icon={educationInfo ? "pi pi-pencil" : "pi pi-plus" } type="submit" />
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

EducationForm.Layout = AdminLayout;
export default EducationForm;
