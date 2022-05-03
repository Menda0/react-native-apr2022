import React, {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from "react-native"

const useCounter = (initialCounter) => {
    const [counter, setCounter] = useState(initialCounter)

    const incrementCounter = () => {
        setCounter(counter+1)
    }

    const decrementCounter = () => {
        setCounter(counter-1)
    }

    useEffect(()=>{
        console.log("Counter loaded ...")
    }, [])

    useEffect(() => {
        console.log("Counter Updated ...")
    }, [counter])

    console.log("Counter Render ...")

    return {counter, incrementCounter, decrementCounter}
}

const ExampleComponent5 = () => {

    // Use custom hook
    // const [counter, setCounter] = useState(10)
    const {counter, incrementCounter} = useCounter(0)

    return (
        <View>
            <Text style={styles.text}>Counter: "{counter}"</Text>
            <Button onPress={incrementCounter} title="Increment" />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        textAlign: "center",
        margin: 20
    }
})

export default ExampleComponent5