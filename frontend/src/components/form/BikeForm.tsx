import React, { useState } from 'react';
import { Formik, Field, Form, useFormikContext, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Bike } from '../../App';
import BikeFormField from './BikeFormField';


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(5, 'Name should be at least 5 characters'),
    type: Yup.string().required('Type is required').min(5, 'Type should be at least 5 characters'),
    color: Yup.string().required('Color is required').min(5, 'Color should be at least 5 characters'),
    wheelSize: Yup.number().required('Wheel Size is required').positive('Wheel Size should be a positive number'),
    price: Yup.number().required('Price is required').positive('Price should be a positive number'),
    id: Yup.string().required('ID is required').min(5, 'ID should be at least 5 characters'),
    description: Yup.string().required('Description is required').min(5, 'Description should be at least 5 characters'),
});


interface BikeFormProps {
    onSave: (bike: Bike) => void;
    bikes: Bike[];
}

const BikeForm: React.FC<BikeFormProps> = ({ onSave, bikes }) => {
    const [isDuplicateId, setIsDuplicateId] = useState(false);

    const onSubmit = (values: Bike, { resetForm }: { resetForm: () => void }) => {
        const isUnique = bikes.every((bike) => bike.id !== values.id);

        if (isUnique) {
            onSave(values);
            resetForm();
            setIsDuplicateId(false);
        } else {
            setIsDuplicateId(true);
        }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                type: '',
                color: '',
                wheelSize: 0,
                price: 0,
                id: '',
                description: '',
                status: 'Available'
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <BikeFormField label="Name" name="name" />
                <BikeFormField label="Type" name="type" />
                <BikeFormField label="Color" name="color" />
                <BikeFormField label="Wheel size" name="wheelSize" />
                <BikeFormField label="Price" name="price" />
                <BikeFormField label="ID" name="id" />
                {isDuplicateId && <p style={{ color: 'red' }}>Bike ID must be unique.</p>}

                <BikeFormField label="Description" name="description" />

                <button type="submit">Save</button>
                <button type="reset">Clear</button>
            </Form>
        </Formik>
    );
};

export default BikeForm;
