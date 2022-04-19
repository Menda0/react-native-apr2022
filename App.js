import React from "react"
import {Text, SafeAreaView} from "react-native"
import ExampleComponent1 from "./components/ExampleComponent1"
import ExampleComponent2 from "./components/ExampleComponent2"
import ExampleUI from "./components/ExampleUI"


class MainComponent extends React.Component{
    render(){
        return (
            <SafeAreaView>
                {/* <ExampleComponent1 />
                <ExampleComponent2 message="Hello Reginaldo" />
                <ExampleComponent2 message="Hello Sofia" /> */}
                <ExampleUI />
            </SafeAreaView>
        )
    }
}

export default MainComponent