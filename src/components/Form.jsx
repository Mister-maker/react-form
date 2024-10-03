import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
});

const Form = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandle = (data) => {
        props.signUpForm(data.email, data.password);
        reset();
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit((data) => props.signUpForm(data))}>
                    <div className="group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email")}
                        />
                        <p className="error-message">{errors.email?.message}</p>
                    </div>

                    <div className="group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register("password")}
                        />
                        <p className="error-message">
                            {errors.password?.message}
                        </p>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
