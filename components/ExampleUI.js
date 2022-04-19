import React from "react";
import {Text, ActivityIndicator, TextInput, Switch, Button, Alert, TouchableHighlight, Linking, TouchableOpacity, Image, View, ScrollView} from "react-native"


class ExampleUI extends React.Component{

    render(){
        return (
            <ScrollView style={styles.container} >
                <View style={styles.section}>
                    <Text>This is an example Text</Text>
                    <Text>Lorem impsum sit dolor amet</Text>
                </View>

                <View style={styles.section}>
                    <Text>Example Activity Indicator</Text>
                    <ActivityIndicator />
                </View>

                <View style={styles.section}>
                    <Text>Example Text Input</Text>
                    <TextInput placeholder="insert your text here ..." />
                </View>

                <View style={styles.section}>
                    <Text>Example Switch</Text>
                    <Switch />
                </View>

                <View style={styles.section}>
                    <Text>Example Button</Text>
                    <Button title="Press here" onPress={() => Alert.alert("Click in Button", "I just clicked on the button")}/>
                </View>

                <View style={styles.section}>
                    <Text>Example Touchable HighLight</Text>
                    <TouchableHighlight
                        underlayColor="#e1e1e1"
                        onPress={() => Linking.openURL("http://google.pt")}
                    >
                        <Text>This is a text with touch HighLight</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.section}>
                    <Text>Example Touchable Opacity</Text>
                    <TouchableOpacity
                        onPress={() => Linking.openURL("mailto: mail@mail.com")}
                    >
                        <Text>This is a text with a touch opacity</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text>Example of remote image</Text>
                    <Image source={{uri: "https://picsum.photos/250"}} style={{width:250, height:250}} />
                </View>

                <View style={styles.section}>
                    <Text>Example of local image</Text>
                    <Image source={require("../resources/images/exampleImage.jpeg")} style={{width:250, height:250}}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    container:{
        padding: 20
    },
    section:{
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#e1e1e1"
    }
}

export default ExampleUI