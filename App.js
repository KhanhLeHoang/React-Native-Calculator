import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import History from './History';

const Calculator = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [his, setHis] = useState([]);
  const calc = (text) => {
    try {
      const res = eval(text);
      setHis([...his, text])
      return res;
    }
    catch (e) {
      return "Syntax Error";
    }
  }
  return (
    <View style={{ padding: 10, display: 'flex' }}>
      <TextInput
        style={{ width: '500px', height: 40, fontSize: 30, }}
        placeholder="Type here to calculate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        onKeyPress={(event) => {
          if (event.nativeEvent.key == "Enter") {
            setResult(calc(text))
          }
        }}
      />
      <Text style={{}}>
        {result}
      </Text>
      <History
        history={his}
        search={text}
      />
    </View>
  );
}

export default Calculator;