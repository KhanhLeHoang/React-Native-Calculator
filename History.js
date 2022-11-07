import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const History = (props) => {
    console.log('his: ', props.history)
    console.log('search: ', props.search)
    return (
        <View style={styles.history}><View style={styles.historyTitle}>Suggestions</View>
            {props && props.history && props.history.map((v, i) => {
                if (props.search && v.includes(props.search))
                    return (
                        < Text
                            key={i}
                            style={styles.historyText}
                        >
                            {v}
                        </Text>
                    )
            })
            }
        </View >
    )
}
const styles = StyleSheet.create({
    historyTitle: {
        alignItems: "center",
        // position: "absolute",
        // left: "50%",
        // transform: "translate(-50%, 0)",
    },
    history: {
        flex: 2,
        backgroundColor: "white",
        paddingLeft: 20
    },
    historyText: {
        fontSize: 18,
        color: "black"
    }
})
export default History;