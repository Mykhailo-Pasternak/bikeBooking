import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface BikeFormFieldProps {
    placeholder: string;
    name: string;
    type?: string;
}

const BikeFormField: React.FC<BikeFormFieldProps> = ({ placeholder, name, type = 'text' }) => (
    <div>
        <Field type={type} name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component="div" className="error-message" />
    </div>
);

export default BikeFormField;
