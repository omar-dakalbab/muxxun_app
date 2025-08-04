import React from 'react';
import { View, Text } from 'react-native';

type QuestionComponentProps = {
  question: string;
  answer: string;
};

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, answer }) => {
  return (
    <View className='bg-gray100 mx-5 rounded-2xl p-6 flex-col mb-4'>
      <Text className='text-h4-semibold font-bold mb-2'>{question}</Text>
      <Text className='text-h5-semibold leading-6 text-gray500'>{answer}</Text>
    </View>
  );
};

export default QuestionComponent;