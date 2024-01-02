import React, { useState } from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { Bike } from '../../App';
import BikeFormField from './BikeFormField';
import { Button, ErrorMessage, FormFieldsWrapper, WrapButtons, Wrapper } from './bikeForm.styled';


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

type FormValue = {
    [K in keyof Bike]: K extends 'wheelSize' | 'price' ? number | string : Bike[K];
};

const BikeForm: React.FC<BikeFormProps> = ({ onSave, bikes }) => {
    const [isDuplicateId, setIsDuplicateId] = useState(false);

    const onSubmit = (values: FormValue, { resetForm }: { resetForm: () => void }) => {
        const isUnique = bikes.every((bike) => bike.id !== values.id);

        if (isUnique) {
            onSave(values as Bike);
            resetForm();
            setIsDuplicateId(false);
        } else {
            setIsDuplicateId(true);
        }
    };

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: '',
                    type: '',
                    color: '',
                    wheelSize: '',
                    price: '',
                    id: '',
                    description: '',
                    status: 'Available'
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormFieldsWrapper>
                        <BikeFormField placeholder="Name" name="name" />
                        <BikeFormField placeholder="Type" name="type" />
                        <BikeFormField placeholder="Color" name="color" />
                        <BikeFormField placeholder="Wheel size" name="wheelSize" />
                        <BikeFormField placeholder="Price" name="price" />
                        <BikeFormField placeholder="ID" name="id" />
                        {isDuplicateId && <ErrorMessage>Bike ID must be unique.</ErrorMessage>}

                        <BikeFormField placeholder="Description" name="description" />
                    </FormFieldsWrapper>
                    <WrapButtons>
                        <Button type="submit">Save</Button>
                        <Button type="reset">Clear</Button>
                    </WrapButtons>
                </Form>
            </Formik>
        </Wrapper>

    );
};

export default BikeForm;
