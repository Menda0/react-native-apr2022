import {configureStore} from "@reduxjs/toolkit"
import * as messages from "./message.duck"

const store = configureStore({
    reducer:{
        messages: messages.reducer
    }
})

export default store