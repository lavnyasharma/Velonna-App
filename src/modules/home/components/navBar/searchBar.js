import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FONT } from "@/shared/constans/fonts";

const SearchBar = ({openSearch}) => {
  return (
    <View style={styles.searchBarContainer}>
      <Pressable
        onPress={() => {
            openSearch();
        }}
        style={styles.searchBar}
      >
        <View style={styles.searchBarIconContainer}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#b0b0b0", margin: 10 }}
          />
        </View>
        <Text numberOfLines={1} style={styles.searchBarText}>
          Search for rings, braclets etc
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    flexShrink: 1,
  },
  searchBar: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f5fa",
    borderWidth: 0,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: 10,
  },
  searchBarIconContainer: {
    aspectRatio: 1,
  },
  searchBarText: {
    color: "#919191",
    width: 250,
    overflow: "hidden",
    fontFamily:FONT.NORMAL
  },
});

export default SearchBar;
