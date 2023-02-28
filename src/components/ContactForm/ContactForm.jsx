import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
    )
    .required('Name is a required field'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required field'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values });
        resetForm();
      }}
    >
      <StyledForm>
        <StyledFormField>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" name="name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledFormField>

        <StyledFormField>
          <StyledLabel>Number</StyledLabel>

          <StyledInput type="tel" name="number" />
          <StyledErrorMessage name="number" component="div" />
        </StyledFormField>
        <StyledButton type="submit">Add contacts</StyledButton>
      </StyledForm>
    </Formik>
  );
};
