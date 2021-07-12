import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Name</label>
        <div>
          <Field
            name="moviename"
            component="input"
            type="text"
            placeholder="movie name"
          />
        </div>
      </div>
      <div>
        <label>Actor</label>
        <div>
          <Field
            name="actor"
            component="input"
            type="text"
            placeholder="actor"
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

const movieform = reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

export default movieform;
