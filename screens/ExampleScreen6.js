import React from "react";
import ExampleComponent6 from "../components/ExampleComponent6"
import { useSelector, useDispatch } from "react-redux";
import * as messages from "../store/message.duck"


// Container
// Connects to store
const ExampleScreen6 = () => {

    // messages => Reducer name
    // message => Reducer property (state)
    const message = useSelector(state => state.messages.message)
    const dispatcher = useDispatch()

    const setMessage = (message) => {
        dispatcher(messages.actions.setMessage(message))
    }


    return <ExampleComponent6 message={message} setMessage={setMessage}/>
}

export default ExampleScreen6