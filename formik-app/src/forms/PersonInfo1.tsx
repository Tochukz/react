import { Formik } from 'formik';

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
      {({
        values, 
        errors, 
        touched, 
        handleChange,
        handleBlur, 
        handleSubmit,
        isSubmitting,
        ...other
      }) => (
        <form onSubmit={handleSubmit}>
          <h3>Register 1 <small>Verbose</small></h3>          
          <div className="form-group">
            <input name="firstname" 
                    placeholder='Firstname'
                    className="form-control"
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={(values as any).firstname} />
              <p className='text-danger'>
                { (touched as any).firstname && (errors as any).firstname }
              </p>
          </div>
          <div className="form-group">
            <input name="lastname" 
                    placeholder='Lastname'
                    className="form-control"
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={(values as any).lastname} />
              <p className='text-danger'>
                { (touched as any).lastname && (errors as any).lastname }
              </p>
          </div>
          <div className="form-group">
            <input name="email" 
                    placeholder='Email'
                    className="form-control"
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={(values as any).email} />
              <p className='text-danger'>
                { (touched as any).email && (errors as any).email }
              </p>
          </div>
          <div className="form-group">
            <button type="submit" 
                    className={`form-control  ${isSubmitting ? 'btn-secondary' : 'btn-primary'}`} 
                    disabled={isSubmitting}>Submit</button>
            <p className={`text-center ${isSubmitting ? '' : 'd-none'}`}>Sending...</p>
          </div>
        </form>
      )}
    </Formik>
  );
}