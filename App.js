import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Calculator = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const calc = (text) => {
    try {
      return eval(text);
    }
    catch (e) {
      return "Syntax Error";
    }
  }
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to calculate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        onKeyPress={ (event) => {
          if(event.nativeEvent.key == "Enter"){
            setResult(calc(text))
          }
    }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        { result
        }
      </Text>
    </View>
  );
}

export default Calculator;