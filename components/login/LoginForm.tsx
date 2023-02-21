import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import React from "react";


interface MyFormValues {
    username: string;
    password: string;
}



let SchemaLogin = yup.object().shape({
    username: yup.string().required("Le nom d'utilisateur est obligatoire pour ce connecter"),
    password: yup.string().required("Le mot de passe est obligatoire pour ce connecter"),
});

export default function LoginForm(){

    const onSubmit = (values) =>{
        console.log(values)
       toast.error("Une erreur est survenue lors de la connexion", {
           icon : "🧙",
           theme :"light"
       })
    }


    const initialValues: MyFormValues = { username:'',password : '' };
    return (<>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SchemaLogin}>
            <Form>
                <div className={"form-row-label-input"}>
                    <label className={""}>Nom d'utilisateur</label>
                    <Field type={"text"} name={"username"} placeholder={"Axel"}/>
                    <ErrorMessage name={"username"} component={"p"} className={"color-error text-primary"}/>
                </div>
                <div className={"form-row"}>
                    <label className={""}>Mot de passe</label>
                    <Field type={"password"} name={"password"} placeholder={"Mot de passe"} />
                    <ErrorMessage name={"password"} component={"p"} className={"color-error text-primary"}/>
                </div>
                <button type={"submit"} className={"btn-reset btn-yellow"}>Connexion</button>
            </Form>
        </Formik>
    </>
    )
}
