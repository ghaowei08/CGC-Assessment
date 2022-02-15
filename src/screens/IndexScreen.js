import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AlbumContext } from "../context/AlbumContext";
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, getAlbums, onSelectAlbum } = useContext(AlbumContext);

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <View>
      <FlatList
        data={state.albums}
        keyExtractor={album => album.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onSelectAlbum(item.id, () => navigation.navigate('Show'))}>
              <View style={styles.row}>
                <Text>
                  {item.title}
                </Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
      justifyContent: "space-between",
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "gray",
  }
})