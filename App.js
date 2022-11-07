import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Button } from "react-native";
import History from './History';

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const [his, setHis] = useState([]);
  const calc = (text) => {
    try {
      const res = eval(text);
      if (!his.includes(text) && text.includes("+") || text.includes("-") || text.includes("*") || text.includes("/"))
        setHis([...his, text])
      return res;
    }
    catch (e) {
      return "Syntax Error";
    }
  }

  const Replace = (text) => {
    while (text.includes("++") || text.includes("+-") || text.includes("-+") || text.includes("--"))
      text = text.replace("++", "+ +").replace("+-", "+ -").replace("-+", "- +").replace("--", "- -");
    return text;
  }
  const onButtonClick = (text) => {
    if (text == "=") {
      return calculateResult();
    }
    setResultText(resultText + text);
  };

  const calculateResult = () => {
    setCalcText(calc(Replace(resultText)));
  };

  const onOperationClick = (operation) => {

    if (operation == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    setResultText(resultText + operation);
  };
  console.log(resultText)

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{calcText}</Text>
        </View>
        <History
          history={his}
          search={resultText}
        />
      </View>
      <View style={styles.calculation}>
        {/* <TextInput
          onChangeText={newText => setText(newText)}
          defaultValue={resultText}
        /> */}
        <Text style={styles.calculationText}>
          {resultText}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(1)}
              style={styles.btn}
            >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(2)}
              style={styles.btn}
            >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(3)}
              style={styles.btn}
            >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(4)}
              style={styles.btn}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(5)}
              style={styles.btn}
            >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(6)}
              style={styles.btn}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(7)}
              style={styles.btn}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(8)}
              style={styles.btn}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(9)}
              style={styles.btn}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onButtonClick(".")}
              style={styles.btn}
            >
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(0)}
              style={styles.btn}
            >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick("=")}
              style={styles.btn}
            >
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => onOperationClick("DEL")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("AC")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("+")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("-")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("/")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("*")}
            style={styles.btn}
          >
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    flexDirection: "row"
  },
  result: {
    flex: 2,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-end",
    border: "2px solid black",
    padding: 30
  },
  resultText: {
    fontSize: 60,
    color: "white",
  },
  calculationText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  number: {
    fontSize: 30,
    color: "white",
  },
  calculation: {
    flex: 1,
    backgroundColor: "#d6d6c2",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: "30",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  operations: {
    flex: 1,
    backgroundColor: "#636363",
    alignItems: "center",
    justifyContent: "space-around",
  },
  operationButton: {
    fontSize: 30,
    color: "white",
  },
});
