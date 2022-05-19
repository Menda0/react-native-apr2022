import React, {useEffect} from "react";
import {Text, TextInput, View} from "react-native"


// Presentational Component
const ExampleComponent6 = ({message, setMessage}) => {
    useEffect(()=>{
        console.log("Message as been changed")
    }, [message])
    return (
        <View>
            <TextInput onChangeText={setMessage} />
            <Text>{message}</Text>
        </View>
    )
}

export default ExampleComponent6