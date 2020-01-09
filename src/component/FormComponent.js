import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { createFormDetails } from '../actions';
import { connect } from 'react-redux';
import './FormComponent.css';


class formComponent extends Component {
    renderError( {error, touched}) {
        if(touched && error) {
            return (
                <div>
                    <div>{error}</div>
                </div>
            )
        }
    }


    renderInput = ({input, meta}) =>  {
        const className = `field ${meta.error && meta.touched?'error': ''}`;
        return  (
            <div className={className}>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }
    renderTextArea = ({input, meta}) =>  {
      const className = `field ${meta.error && meta.touched?'error': ''}`;
      return  (
          <div className={className}>
              <textarea {...input} />
              {this.renderError(meta)}
          </div>
      );
  }
    onSubmit = (formValues) => {
        this.props.createFormDetails(formValues);
        this.props.history.push('/result')
    }

    render() {
        return(
            <div> 
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div>
                        <label>Your name</label>
                        <Field name="uname" component={this.renderInput} type="text" />
                    </div>
                    <div>
                        <label>Your Bio</label>
                        <Field name="bio" component={this.renderTextArea} rows="4" cols="20" />
                    </div>                    
                    <div>
                    <label>Primary Skill</label>
                    <div>
                      <Field name="primarySkill" component="select">
                        <option />
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                        <option value="javascript">JQuery</option>
                        <option value="javascript">Bootstrap</option>
                      </Field>
                    </div>
                  </div>
            
                  <div>
                    <label>JavaScript library of choice</label>
                    <div className="radioButton">
                      <label>
                        <Field name="lib" component="input" type="radio" value="react" />
                        <span>React</span>
                      </label>
                      <label>
                        <Field name="lib" component="input" type="radio" value="angular" />
                        <span>Angular</span>
                      </label>
                      <label>
                        <Field name="lib" component="input" type="radio" value="vue" /> 
                        <span>Vue</span>
                      </label>
                    </div>
                  </div>
            
                  <div>
                    <label htmlFor="experience">Additional Experience</label>
                    <div className="checkbox">
                      <label>
                        <Field name="tdd" id="tdd" component="input" type="checkbox" />
                        <span>TDD</span>
                      </label>
                      <label>
                        <Field
                          name="heroku"
                          id="heroku"
                          component="input"
                          type="checkbox"
                        />
                        <span>Heroku</span>
                      </label>
                      <label>
                        <Field
                          name="github"
                          id="github"
                          component="input"
                          type="checkbox"
                        />
                        <span>Github</span>
                      </label>
                    </div>
                  </div>
            
                  <div>
                    <label>Start Date</label>
                    <div>
                      <Field name="startdate" component="input" type="date"/>
                    </div>
                  </div>
                  <button>Submit</button>
                </form>            
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.uname) {
        errors.uname = "Please enter a Your Name";
    }
    if (!formValues.bio) {
        errors.bio = "Please enter a Bio";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'formcreate',
    validate: validate
})(formComponent);

export default connect(null, {createFormDetails} )(formWrapped);