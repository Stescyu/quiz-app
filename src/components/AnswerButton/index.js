import React from 'react';
import PropTypes from 'prop-types';

export default class AnswerButton extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { answer } = this.props;
    return (
      <button className="quizAnswer">
        <p>{ answer }</p>
      </button>
    );
  }
}

AnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
};
