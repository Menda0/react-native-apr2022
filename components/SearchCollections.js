import React from "react";
import {Text, TextInput, View} from "react-native"

class SearchCollections extends React.Component{
    render(){
        return (
            <View>
                <TextInput onChangeText={(text) => {console.log(`I just typed ${text}`)}}/>
                <Text>Search result for ""</Text>
            </View>
        )
    }
}

export default SearchCollections