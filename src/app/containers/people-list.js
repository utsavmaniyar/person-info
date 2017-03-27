import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPeople } from '../actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class PeopleList extends Component{
  constructor(){
    super();
    this.state ={
      list:[]
    }
  }
  componentWillMount(){
    this.getList();
  }
  getList(){
    axios.get('https://tw-namegen.herokuapp.com/names')
    .then((response) => {
      this.setState({list: response.data});
    })
}
  renderList(){
    if(!this.state.list){
      return 'loading....'
    }
    return this.state.list.map((people) => {
      return (
        <li
        key={people.name}
        onClick={() => this.props.selectPeople(people)}
        className="list-group-item">
        <img src = {people.image} alt = {people.name} />
        <div className="wrapper">
        <h4 className = "name">{people.name}</h4>
        <p className = "list_email"><a href = {'mailTo:' + people.email}>{people.email}</a></p>
        </div>
        </li>
      );
    });
  }

  render(){
    return (
      <div className = "col-sm-4">
        <div className="scrollbar" id="style-7">
          <ul className="list-group">
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispach){
  return bindActionCreators ({ selectPeople: selectPeople },dispach);
}

export default connect(null, mapDispatchToProps)(PeopleList);
