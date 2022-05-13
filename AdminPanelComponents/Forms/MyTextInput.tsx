import { InputText } from "primereact/inputtext";
import { useField } from "formik";
import React from "react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <>
      <span className="p-float-label">
        <InputText {...field} {...props} />
        <label htmlFor="in">{props.label}</label>
      </span>
    </>
  );
}
