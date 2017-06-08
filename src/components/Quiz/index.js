import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question';
import AnswerButton from '../AnswerButton';

import styles from './index.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>
          { data.quizName }
        </h1>
        <Question questionConfig={data.questions[0]}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {
              Object.keys(data.questions[0].answers).map(answerKey =>
                <AnswerButton
                  answer={data.questions[0].answers[answerKey]}
                  key={answerKey}
                />
              )
            }
          </div>
        </Question>
      </div>
    );
  }
}

Quiz.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quiz;
