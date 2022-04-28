// Work with state

import React from "react";
import {Button, Text, View} from "react-native"

class ExampleComponent3 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 20
        }

        console.log("Component Initialized ...")
    }

    // This is an onload function
    // Executed after First render
    componentDidMount(){
        console.log("Component did mount ...")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    incrementCounter(){

        // This function alters the state
        const newState = {counter:this.state.counter+1}
        // State is change assync
        this.setState(newState)
    }

    render(){
        console.log("Component rendered ...")

        return (
            <View>
                <Text style={{fontSize:40, textAlign:"center", margin:20}}>
                    {this.state.counter}
                </Text>
                <Button onPress={() => this.incrementCounter()} title="Increment" />
            </View>
        )
    }
}

export default ExampleComponent3