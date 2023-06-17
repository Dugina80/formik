import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from "yup"

import "../../assets/style/elements/Form.scss";

const Form = () => (
  <div className='form-container'>
    <h1 className='form-container_title'>Зв'язатися з нами</h1>
    <span>Залиш нам повідомлення, а ми <br/> відповімо якнайшвидше</span>
    <Formik
      initialValues={{ name: "" , email: "" , telephone: "" , message:"" , checkboxValue: false }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Юзернейм повинен містити мінімум  4 символи"),
        email: Yup.string().email("Invalid email address").required("Неправильна адреса електронної пошти"),
        telephone: Yup.string()
        .matches(/^\+380\d{9}$/, 'Invalid phone number format')
        .required('Перевір формат номеру телефона'),
        message: Yup.string()
        .min(10, 'Повідомлення має бути не менше 10 символів')
        .required('Повідомлення є обов\'язковим полем'),
      })}
    
    >

      {props => (
        <form onSubmit={props.handleSubmit}>
          <div className='form-block'>
            <div>
               <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            placeholder="Ім'я та прізвище"
          />
           {props.errors.name && <div  className="error-message" id="feedback">{props.errors.name}</div>}
            </div>
          <div>
               <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeholder="Email"
          />
          {props.errors.email && <div  className="error-message" id="feedback">{props.errors.email}</div>} 
          </div>
       
          </div>
          
         <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.telephone}
            name="telephone"
            placeholder="Телефон у форматі +380"
          /> 
          {props.errors.telephone && <div  className="error-message" id="feedback">{props.errors.telephone}</div>}
           <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.message}
            name="message"
            placeholder="Повідомлення"
          /> 
          {props.errors.message && <div  className="error-message" id="feedback">{props.errors.message}</div>}
           <label className='checkbox'>
            <Field  type="checkbox" name="checkboxValue" />
            Надіслати мені оновлення про Академію
          </label>
          <br />

          
          <button type="submit" className='form-container_button'><p>Надіслати</p></button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;