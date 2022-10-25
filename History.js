import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';

const History = (props) => {
    console.log('search: ', props.history)
    return (
        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
            {props && props.history && props.history.map((v, i) => {
                if (v.includes(props.search))
                    return (
                        < Text
                            key={i}
                            style={{ fontSize: 16 }}
                        >
                            {v}
                        </Text>
                    )
            })
            }
        </View >
    )
}
export default History;