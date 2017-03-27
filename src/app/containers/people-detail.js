import React, { Component } from 'react';
import { connect } from 'react-redux';

class PeopleDetail extends Component{
  render(){
    if(!this.props.people){
      return (
        <h2 className="text_white">Please select the person from list. </h2>
      );
    }
    return (
      <div className = "person_detail text_white">
        <div className="upper_detail">
          <div className = "img_wrapper">
            <img src = {this.props.people.image} alt = {this.props.people.name} />
          </div>
          <div className = "head_wrapper">
            <h3>{this.props.people.name}</h3>
            <p> {this.props.people.address} </p>
          </div>
          <div className = "email_wrapper">
            <p className = "email"><a href={'mailTo:'+ this.props.people.email}>{this.props.people.email}</a></p>
          </div>
      </div>
        <div className = "bio"><strong>Bio: </strong> <p>{this.props.people.bio}{this.props.people.bio}{this.props.people.bio}</p></div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    people : state.activePeople
  };
}

export default connect (mapStateToProps)(PeopleDetail);
