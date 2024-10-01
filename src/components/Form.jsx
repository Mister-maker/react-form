import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
        .string()
        .required("Phone number is required")
        .matches(/^(\+91[\-\s]?)?[6-9]\d{9}$/, "Phone number is not valid"),
    password: yup.string().min(8).max(20).required(),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandle = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>React Form</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitHandle)}>
                    <div className="group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...register("name")}
                        />
                        <p className="error-message">{errors.name?.message}</p>
                    </div>

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
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            {...register("phone")}
                        />
                        <p className="error-message">{errors.phone?.message}</p>
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
