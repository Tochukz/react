import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Register() {
  const initialValues = {firstname: '', lastname: '', email: ''};

  //No validating as expected yet. 
  const personInfoSchema = Yup.object().shape({
    firstname: Yup.string()
               .min(2, 'Firstname must be 2 letters or more letters')
               .max(10, 'Firstname should not be more than 10 letters')
               .required('Firstname is required'),
    lastname: Yup.string()
               .required('Lastname is required')
               .min(2, 'Lastname must be 2 letters or more letters')
               .max(10, 'Lastname should not be more than 10 letters'),
    email: Yup.string()
              .required('Email is required')
              .email('Invalid email address'),
  })

  const onSubmit = (values: any, { setSubmitting }: any) => {
    const rand = Math.ceil(Math.random()) * 10 *1000;
    setTimeout(() => {
      console.log({values, setSubmitting});
      setSubmitting(false);
    }, rand);
  }

  return (
    <Formik initialValues={initialValues} validatationSchema={personInfoSchema} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <h3>Register 3 <small>(Yup)</small></h3>          
          <div className="form-group">
            <Field name="firstname" 
                   placeholder='Firstname'
                   className="form-control" />
              <p className='text-danger'>
                { (touched as any).firstname && (errors as any).firstname }
              </p>
              <ErrorMessage name="firstname" component="p" className='text-danger' />
          </div>
          <div className="form-group">
            <Field name="lastname" 
                   placeholder='Lastname'
                   className="form-control" />
              <ErrorMessage  name="lastname" component="p" className='text-danger' />
          </div>
          <div className="form-group">
            <Field type="email"
                   name="email" 
                    placeholder='Email'
                    className="form-control" />
            <ErrorMessage name="email" component="p" className='text-danger' />
          </div>
          <div className="form-group">
            <button type="submit" 
                    className={`form-control  ${isSubmitting ? 'btn-secondary' : 'btn-primary'}`} 
                    disabled={isSubmitting}>Submit</button>
            <p className={`text-center ${isSubmitting ? '' : 'd-none'}`}>Sending...</p>
          </div>
        </Form>
      )}
    </Formik>
  );
}