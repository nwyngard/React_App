// Feedback.jsx - Contains a feedback form where users can rate the app and provide feedback.
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { Button, Form } from "react-bootstrap";

const Feedback = () => {

    // Setup schema using Joi - Defines form fields and validation rules
    const schema = Joi.object({
        appRating: Joi.number().min(0).max(4).required(),
        name: Joi.string().min(2).max(30).required(),
        feedback: Joi.string().min(5).max(100).required()
    });

    // Create a link between Bootstrap form components and React Hook form
    // useForm hook uses resolver function to pass in Joi schema and validates data against it
    // Sets default values for form fields
    // Returns handleSubmit() when form is submitted, formState (including any errors that don't pass validation)
    // Watches form elements for changes 
    const { control, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            appRating: 2,
            name: "",
            feedback: ""
        }
    });

    // watchAppRating function watches for changes made to App Rating and returns selected value
    // Used to display ratings in real time as the user makes changes
    const watchAppRating = watch("appRating");

    // onSubmit function accepts input form data and submits it via Axios post request to the server API.
    const onSubmit = async (data) => {
        const res = await axios.post('http://localhost:4000/api', data);
    };
   
    return (
        <div className="feedback-container">
            <h2>Feedback Form</h2>
            <p>Please let me know what you think of this Recipe App</p>
            {/*Bootstrap form - OnSubmit event runs handleSubmit() which passes in the onSubmit() function when feedback is submitted */}
            <Form noValidate="noValidate" onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Rate the app</Form.Label>
                <Controller
                    name="appRating"
                    control={control}
                    render={({ field }) => 
                        <Form.Range {...field} type="range" min={0} max={4} />
                    }
                />
                {errors.appRating && <p>{errors.appRating.message}</p>}
                <p className="app-rating">App Rating: {watchAppRating}</p>
                <Form.Label>Your Name</Form.Label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <Form.Control {...field} />
                    )}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <Form.Label>Feedback</Form.Label>
                <Controller
                    name="feedback"
                    control={control}
                    render={({ field }) => (
                        <Form.Control {...field} as="textarea" />
                    )}
                />
                {errors.feedback && <p>{errors.feedback.message}</p>}
                <Button type="submit">Send Feedback</Button>
            </Form>
        </div>
    );
}

export default Feedback;

