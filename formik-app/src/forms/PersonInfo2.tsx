import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Register() {
  const initialValues = {firstname: '', lastname: '', email: ''};

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.firstname) {
      errors.firstname = 'Firstname is required';
    }
    if (!values.lastname) {
      errors.lastname = 'Lastname is requires'
    }
    return errors;
  }

  const onSubmit = (values: any, { setSubmitting }: any) => {
    const rand = Math.ceil(Math.random()) * 10 *1000;
    setTimeout(() => {
      console.log({values, setSubmitting});
      setSubmitting(false);
    }, rand);
  }

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({isSubmitting }) => (
        <Form>
          <h3>Register 2 <small>(Concise)</small></h3>          
          <div className="form-group">
            <Field type="text" 
                   name="firstname" 
                   placeholder='Firstname'
                   className="form-control" />
              <ErrorMessage name="firstname" component="p" className='text-danger' />
          </div>
          <div className="form-group">
            <Field type="text" 
                   name="lastname" 
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