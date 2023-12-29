import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface BikeFormFieldProps {
    label: string;
    name: string;
    type?: string;
}

const BikeFormField: React.FC<BikeFormFieldProps> = ({ label, name, type = 'text' }) => (
    <div>
        <label>{label}:</label>
        <Field type={type} name={name} />
        <ErrorMessage name={name} component="div" className="error-message" />
    </div>
);

export default BikeFormField;