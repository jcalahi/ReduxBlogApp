import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Home extends Component {
  componentWillMount() {
    fetchPosts();
  }
  render() {
    return (
      <div>Homepage</div>
    );
  }
}

export default connect(null, { fetchPosts })(Home);
