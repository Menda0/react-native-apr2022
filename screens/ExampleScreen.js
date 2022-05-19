import React from "react";
import {Button, StyleSheet, View} from "react-native"

const ExampleScreen = (props) => {
    return (
        <View>
            <View style={styles.button}>
                <Button 
                    title="ExampleComponent1"
                    onPress={() => props.navigation.navigate("ExampleComponent1")}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    onPress={() => props.navigation.navigate("ExampleUi")}
                    title="ExampleUi" 
                />
            </View>
            <View style={styles.button}>
                <Button 
                    onPress={() => props.navigation.navigate("ExampleScreen6")}
                    title="Example Screen 6" 
                />
            </View>
        </View>
    )
} 


const styles = StyleSheet.create({
    button:{
        padding: 20,
        paddingBottom: 0
    }
})

export default ExampleScreen