import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";

import { Button, Form } from "react-bootstrap";

const Feedback = () => {
    const schema = Joi.object({
        appRating: Joi.number().min(0).max(4).required(),
        name: Joi.string().min(2).max(30).required(),
        feedback: Joi.string().min(5).max(100).required()
    });

    const { control, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            appRating: 2,
            name: "",
            feedback: ""
        }
    });

    const watchAppRating = watch("appRating");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="feedback-container">
            <h2>Feedback Form</h2>
            <p>Please let me know what you think of this Recipe App</p>
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

