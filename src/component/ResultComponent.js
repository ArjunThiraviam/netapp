import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../actions';
import { Link } from 'react-router-dom';
import './ResultComponent.css';

class ResultComponent extends Component {
    componentDidMount() {
        this.props.fetchResults();
    }

    renderList() {
        let lastValue = Object.keys(this.props.details); 
        let result = lastValue[lastValue.length -1];
        
        let ourValue = this.props.details[result];
        console.log(ourValue) 
        return this.props.details.map( details => {
            if(details.id === ourValue.id) {
                console.log(details.tdd)
                return (
                    <div className="result" key={details.id}>
                        <div>
                            Your Name is <span> {details.uname}</span>
                        </div>
                        <div>
                            Your Bio is <span>{details.bio}</span>
                        </div>
                        <div>
                        {details.primarySkill ?
                            `Your primary skill is ${details.primarySkill}`: ""
                        }
                        </div>
                        <div>
                        {details.lib ?
                            `Your JavaScript Library is ${details.lib}` : ""
                        }
                        </div>
                        <div>
                        {(details.tdd || details.heroku || details.github) ?
                            `Your Additional Experience inculude ${details.tdd ? "TDD" : ""} ${details.heroku ? "Heroku" : ""} ${details.github ? "github" : ""}` : ""
                        }
                        </div>
                        <div>
                        Your start date is  <span>{details.startdate}</span>
                        </div>
                    </div>
                )
                    
            }
            return null;
        })
    }

    render() {

        return(
            <div className="result-container">
                {this.renderList()}
                <Link to="/"><button>Back</button></Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { details: Object.values(state.details)}
}

export default connect(mapStateToProps, { fetchResults } )(ResultComponent);