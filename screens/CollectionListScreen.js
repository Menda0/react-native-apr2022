import React, {useEffect} from "react";
import {ScrollView, Text} from "react-native"
import axios from "axios";

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

const useCollections = () => {
    // 1. Get with axios https://api.opensea.io/api/v1/collections?offset=0&limit=10
    // 2. Get colletions from axios promise response
    // 3. SET_COLECTIONS, set my nft collections inside our store 
    const loadNFTCollections = (offset, limit) => {
        axios
            .get("https://api.opensea.io/api/v1/collections?offset=0&limit=10")
            .then((response) => {
                const {collections} = response.data
                // dispatch(actions.setCollections(collections))
            })
    }
    useEffect(() =>{ loadNFTCollections(null. null)}, [])

    // return collectionsList -> store | useSelector(state => ...)
}

// 1. Create a component called NFTCOllectionItem
// 2. NFTCollectionItem has the following attributes (image, title, description)
const CollectionListScreen = () =>{

    const collections = useCollections()

    return (
        <ScrollView>
            <Text> Add a list of component NFTCollectionItem </Text>
        </ScrollView>
    )

}

export default CollectionListScreen