import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AlbumContext } from "../context/AlbumContext";

const IndexScreen = ({ navigation }) => {
  const { state, getAlbums } = useContext(AlbumContext);

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={album => album.id}
        renderItem={({ item }) => {
          return <TouchableOpacity>
            <View style={styles.row}>
              <Text>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
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
    borderColor: "gray"
  }
});
