import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Context as AlbumContext } from '../context/AlbumContext'

const DetailScreen = ({ navigation }) => {

    const [name, setName] = useState('')
    const { state, onEditName, onSubmitName } = useContext(AlbumContext)

    const url = navigation.getParam('url')
    const title = navigation.getParam('title')
    const id = navigation.getParam('id')

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            {
                state.editable
                    ?
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={(name) => setName(name)}
                            placeholder='Enter new name'
                        />
                        <Button title="Save" onPress={() => onSubmitName(name)} />
                        <Button title="Cancel" onPress={() => onEditName(false, 0)} />
                    </View>

                    :
                    <TouchableOpacity onPress={() => onEditName(true, id)}>
                        <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>
            }
            {url ? <Image style={styles.image} source={{ uri: url }} /> : null}
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    view: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 200
    },
    image: {
        height: 300,
        width: 300
    },
    text: {
        fontSize: 30
    },
    textInput: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})