import React from 'react';
import { ErrorText, StyledInput } from './bikeFormField.style';

interface BikeFormFieldProps {
  placeholder: string;
  name: string;
  type?: string;
  description?: boolean;
}

const BikeFormField: React.FC<BikeFormFieldProps> = ({ placeholder, name, type = 'text', }) => (
  <div>
    <StyledInput type={type} name={name} placeholder={placeholder} $isDescription={name === "description"} />
    <ErrorText name={name} component="span" className="error-message" />
  </div>
);

export default BikeFormField;
