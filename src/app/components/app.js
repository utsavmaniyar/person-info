import React, { Component } from 'react';
import PeopleList from '../containers/people-list';
import PeopleDetail from '../containers/people-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <PeopleList />
        <PeopleDetail />
      </div>
    );
  }
}
