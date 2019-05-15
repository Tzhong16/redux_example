import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts } from '../actions/postActions';

class PostForm extends Component {
  state = {
    post: {
      title: '',
      body: ''
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const post = { ...this.state.post };
    post[input.name] = input.value;
    this.setState({ post });
  };

  handleSubmit = e => {
    e.preventDefault();

    const post = { ...this.state.post };

    //CALL action
    this.props.createPosts(post);
  };

  render() {
    return (
      <div>
        <h1>PostForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.post.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea
              name="body"
              type="text"
              value={this.state.post.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPosts }
)(PostForm);
