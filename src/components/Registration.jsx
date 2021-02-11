import React from 'react';
import { useFormik } from 'formik';

import {
    Form,
    Input, 
    Label, 
    Button, 
    Badge,
} from 'reactstrap';

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
        chosenField: []
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
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
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
                        <Row>
                            <Label htmlFor='firstName'>FirstName</Label>
                            <Input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            onChange={formik.handlechange} 
                            value={formik.values.firstName}
                            />
                            <br/>
                            {formik.errors.firstName ? <Badge color="danger">{formik.errors.firstName}</Badge> : null}
                        </Row>
                        
                        <Row>
                            <Label htmlFor='lastName'>LastName</Label>
                            <Input 
                            type="text" id="lastName" 
                            name="lastName" 
                            onChange={formik.handlechange} 
                            value={formik.values.lastName}
                            />
                            <br/>
                            {formik.errors.lastName ? <Badge color="danger">{formik.errors.lastName}</Badge> : null}
                        </Row>
                        
                        <Row>
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={formik.handlechange} 
                            value={formik.values.email}
                            />
                            <br/>
                            {formik.errors.email ? <Badge color="danger">{formik.errors.email}</Badge> : null}
                        </Row>
                        

                        <Row>
                            <Label htmlFor='school'>School</Label>
                            <Input 
                            type="list" 
                            id="school" 
                            name="school" 
                            onChange={formik.handlechange} 
                            value={formik.values.school}
                            />
                        </Row>

                        <Row>
                            <Label htmlFor='userDataAgreed'>I consent with the further usage of my personal data</Label>
                            <Input 
                            type="checkbox" 
                            id="userDataAgreed" 
                            name="userDataAgreed" 
                            onChange={formik.handlechange} 
                            value={formik.values.userDataAgreed}
                            />
                            <br/>
                            {formik.errors.userDataAgreed ? <Badge color="danger">{formik.errors.userDataAgreed}</Badge> : null}
                        </Row>

                        <Row>
                            <Label htmlFor='toListAddAgreed'>I want to be receive news and updates on admissions </Label>
                            <Input 
                            type="checkbox" 
                            id="toListAddAgreed" 
                            name="toListAddAgreed" 
                            onChange={formik.handlechange} 
                            value={formik.values.toListAddAgreed}
                            />
                        </Row>

                        <Row>
                            <Label htmlFor='chosenField'>Choose desired field</Label>
                            <Input 
                            type="list" 
                            id="chosenField" 
                            name="chosenField" 
                            onChange={formik.handlechange} 
                            value={formik.values.chosenField}
                            />
                        </Row>
                        <Row>
                            <Button type="submit"> Submit</Button>
                        </Row>                       
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Registration;