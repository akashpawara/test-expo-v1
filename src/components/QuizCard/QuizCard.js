import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { func, string, shape, bool, number } from 'prop-types';
import styles from './QuizCard.styles';


const QuizCard = ({ data: { description, cards }, num, onPress, cardsAmount }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.95}
    >
      <View>
        <Text style={styles.mainText}>{description}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

QuizCard.propTypes = {
  onPress: func,
  data: shape({
    number: string,
    description: string,
    value: bool,
    revealed: bool,
    picked: bool,
  }),
  num: number,
  cardsAmount: number,
};

export default QuizCard;
