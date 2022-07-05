import {View, Modal, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import data from './Quizqs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuizScreen = () => {
  const allqns = data;
  const [qstn, setQstn] = useState(0);
  const [correctOption, setcorrectOption] = useState(null);
  const [correctOptionSelected, setcorrectOptionSelected] = useState(null);
  const [isDisabled, setisDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setshowNextButton] = useState(false);
  const [showScoreModal, setshowScoreModal] = useState(false);

  const renderQuestion = () => {
    return (
      <View>
        <Text>
          {qstn + 1}/{allqns.length}{' '}
        </Text>
        <Text>{allqns[qstn]?.question}</Text>
      </View>
    );
  };

  const validateAnswer = selectedOption => {
    let correct_option = allqns[qstn]['correct_option'];
    setcorrectOptionSelected(selectedOption);
    setcorrectOption(correct_option);
    setisDisabled(true);
    if (selectedOption == correct_option) {
      setScore(score + 1);
      setshowNextButton(true);
    } else {
      setshowNextButton(true);
    }
  };
  const handleNext = () => {
    if (qstn == allqns.length - 1) {
      setshowScoreModal(true);
    } else {
      setQstn(qstn + 1);
      setcorrectOptionSelected(null);
      setcorrectOption(null);
      setisDisabled(false);
      setshowNextButton(false);
    }
  };
  const renderOptions = () => {
    return (
      <View>
        {allqns[qstn]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isDisabled}
            key={option}>
            <Text>{option}</Text>
            {option == correctOption ? (
              <View>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: 'green',
                    fontSize: 30,
                  }
                }
                />
              </View>
            ) : option == correctOptionSelected ? (
              <View>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: 'red',
                    fontSize: 30,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity onPress={handleNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView>
      {renderQuestion()}
      {renderOptions()}
      {renderNextButton()}
     
    </SafeAreaView>
  );
};

export default QuizScreen;
