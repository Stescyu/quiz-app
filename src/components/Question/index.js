import React from 'react';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { children, questionConfig } = this.props;
    return (
      <div>
        <h2> { questionConfig.question } </h2>
        { children }
      </div>
    );
  }
}

Question.propTypes = {
  children: PropTypes.node,
  questionConfig: PropTypes.object.isRequired,
};

Question.defaultProps = {
  children: null,
};
