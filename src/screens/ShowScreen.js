import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { Context as AlbumContext } from '../context/AlbumContext'

const ShowScreen = ({ navigation }) => {


    const { state } = useContext(AlbumContext)

    return (
        <View>
            <FlatList
                data={state.album}
                keyExtractor={album => album.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                            <View style={styles.column}>
                                <Text>
                                    {item.title}
                                </Text>
                                {item.thumbnailUrl ? <Image style={styles.image} source={{ uri: item.thumbnailUrl }} /> : null}
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

ShowScreen.navigationOptions = {
    title: 'Album'
}

export default ShowScreen
const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
    },
    image: {
        width: 66,
        height: 58,
    },
    form: {
        flexDirection: 'row',
        justifyContent: "flex-end",
    }
})