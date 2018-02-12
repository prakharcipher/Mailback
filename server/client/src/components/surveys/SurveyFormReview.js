import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h4 style={{ textAlign: 'center' }}>
        <b>Please Confirm Your Entries</b>
      </h4>
      <div>{reviewFields}</div>
      <button className="red btn-flat white-text" onClick={onCancel}>
        Go Back
        <i className="material-icons right">chevron_left</i>
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
