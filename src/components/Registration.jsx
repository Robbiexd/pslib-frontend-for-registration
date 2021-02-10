import React from 'react';
import { useFormik } from 'formik';

import {Form, Input, Label, Button, Badge} from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Registration(){

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        school: '',
        userDataAgreed: false,
        toListAddAgreed: false,
        chosenField: ''
    }

    const onSubmit = values => {
        console.log('Data have been submitted to the api: ', values);
    }

    const validate = values => {
        let errors = {}

        if(!values.firstName){
            errors.firstName = 'Required';
        }

        if(!values.lastName){
            errors.lastName = 'Required';
        }

        if(!values.email){
            errors.email = 'Required';
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "invalid email format";
        }

        if(!values.userDataAgreed){
            errors.userDataAgreed = 'Required';
        }

        return errors;
    }

    const formik = useFormik({

        initialValues,
        onSubmit,
        validate
    })

    console.log('Form errors', formik.errors)

    return(
        <>
            <Row>
                <Col>
                    <Form onSubmit={formik.handleSubmit}>
                        <Label htmlFor='firstName'>FirstName</Label>
                        <Input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        onChange={formik.handlechange} 
                        value={formik.values.firstName}
                        />
                        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                        <Label htmlFor='lastName'>LastName</Label>
                        <Input 
                        type="text" id="lastName" 
                        name="lastName" 
                        onChange={formik.handlechange} 
                        value={formik.values.lastName}
                        />
                        {formik.errors.lastName ? <Badge>{formik.errors.lastName}</Badge> : null}

                        <Label htmlFor='email'>Email</Label>
                        <Input 
                        type="text" 
                        id="email" 
                        name="email" 
                        onChange={formik.handlechange} 
                        value={formik.values.email}
                        />
                        {formik.errors.email ? <Badge>{formik.errors.email}</Badge> : null}

                        <Label htmlFor='school'>School</Label>
                        <Input 
                        type="list" 
                        id="school" 
                        name="school" 
                        onChange={formik.handlechange} 
                        value={formik.values.school}
                        />

                        <Label htmlFor='userDataAgreed'>I consent with the further usage of my personal data</Label>
                        <Input 
                        type="radiobutton" 
                        id="userDataAgreed" 
                        name="userDataAgreed" 
                        onChange={formik.handlechange} 
                        value={formik.values.userDataAgreed}
                        />
                        {formik.errors.userDataAgreed ? <Badge>{formik.errors.userDataAgreed}</Badge> : null}

                        <Label htmlFor='toListAddAgreed'>I want to be receive news and updates on admissions </Label>
                        <Input 
                        type="radiobutton" 
                        id="toListAddAgreed" 
                        name="toListAddAgreed" 
                        onChange={formik.handlechange} 
                        value={formik.values.toListAddAgreed}
                        />

                        <Label htmlFor='chosenField'>Choose desired field</Label>
                        <Input 
                        type="list" 
                        id="chosenField" 
                        name="chosenField" 
                        onChange={formik.handlechange} 
                        value={formik.values.chosenField}
                        />

                        <Button type="submit"> Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Registration;