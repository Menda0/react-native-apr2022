import React from "react"
import {Text, SafeAreaView} from "react-native"
import ExampleComponent1 from "./components/ExampleComponent1"
import ExampleComponent2 from "./components/ExampleComponent2"
import ExampleComponent3 from "./components/ExampleComponent3"
import ExampleComponent4 from "./components/ExampleComponent4"
import ExampleComponent5 from "./components/ExampleComponent5"
import ExampleUI from "./components/ExampleUI"
import CollectionListScreen from "./screens/CollectionListScreen"
import SearchCollections from "./components/SearchCollections"
import AppNavigation from "./AppNavigation"
import {Provider} from "react-redux"
import store from "./store"


class MainComponent extends React.Component{
    render(){
        return (
            <Provider store={store}>
                {/*
                    <SafeAreaView>
                        {/* <ExampleComponent1 />
                        <ExampleComponent2 message="Hello Reginaldo" />
                        <ExampleComponent2 message="Hello Sofia" />
                        <ExampleUI />
                        <CollectionListScreen />
                        <ExampleComponent3 />
                        <SearchCollections />
                        <ExampleComponent4 name="Marco"/> 
                        <ExampleComponent5 />
                    </SafeAreaView>
                */}
                <AppNavigation />
            </Provider>
        )
    }
}


export default MainComponent