import React from "react";
import {ScrollView, Text} from "react-native"

const NFT_COLLETIONS = [
    {
        "image": "https://picsum.photos/250",
        "title": "Example 1",
        "description": "Lorem impsum"
    },
    {
        "image": "https://picsum.photos/250",
        "title": "Example 2",
        "description": "Lorem impsum"
    },
    {
        "image": "https://picsum.photos/250",
        "title": "Example 3",
        "description": "Lorem impsum"
    }
]

// 1. Create a component called NFTCOllectionItem
// 2. NFTCollectionItem has the following attributes (image, title, description)


class CollectionListScreen extends React.Component{

    render(){
        return (
            <ScrollView>
                <Text> Add a list of component NFTCollectionItem </Text>
            </ScrollView>
        )
    }
}

export default CollectionListScreen