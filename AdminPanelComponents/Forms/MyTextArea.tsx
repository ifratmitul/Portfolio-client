import { useField } from "formik";
import React from "react";
import { InputTextarea } from 'primereact/inputtextarea';


interface Props {
    placeholder: string;
    name: string;
    label?: string;
    type?: string;
}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <>
      <span className="p-float-label">
        <InputTextarea  style={{width: '100%', margin:'5px 0'}} id="in" {...field} {...props} />
        <label htmlFor="in">{props.label}</label>
      </span>
        </>
    );
}