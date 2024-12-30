import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Markdown from "react-native-markdown-display"; // Import markdown display component
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export default function CollapsableSections({
  name,
  collapsable = false,
  collapsableData,
  callback,
  extraChild,
}) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animationController = useRef(new Animated.Value(0)).current;
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.measure((x, y, width, height) => {
        setContentHeight(height);
      });
    }
  }, []);

  const toggleSection = () => {
    if (collapsable) {
      if (expanded) {
        Animated.timing(animationController, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animationController, {
          toValue: contentHeight,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
      setExpanded(!expanded);
    } else {
      callback();
    }
  };

  // Ensure interpolation works only when contentHeight is greater than 0
  const arrowRotation = contentHeight > 0 ? animationController.interpolate({
    inputRange: [0, contentHeight],
    outputRange: ["0deg", "180deg"], // Flip for collapse/expand
  }) : "0deg"; // Default to 0deg if contentHeight is not set

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSection} style={styles.headBar}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.arrowContainer}>
          {extraChild}
          {collapsable ? (
            <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
              <FontAwesomeIcon icon={faChevronDown} />
            </Animated.View>
          ) : null}
          {!collapsable ? <FontAwesomeIcon icon={faChevronRight} /> : null}
        </View>
      </TouchableOpacity>
      {collapsable ? (
        <Animated.View
          style={[styles.collapsibleContent, { height: animationController }]}
        >
          <View
            style={styles.content}
            ref={contentRef}
            onLayout={() => {
              if (contentRef.current) {
                contentRef.current.measure((x, y, width, height) => {
                  setContentHeight(height);
                });
              }
            }}
          >
            {/* Use Markdown component to render collapsableData as markdown */}
            <Markdown style={markdownStyles}>
              {collapsableData}
            </Markdown>
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  headBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F0F0", // Make the header more visible
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: normalize(20),
    color: "#181725",
    fontWeight: "bold",
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  collapsibleContent: {
    overflow: "hidden",
  },
  content: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 8,
  },
});

const markdownStyles = {
  heading1: {
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
    marginVertical: 10,
  },
  heading2: {
    marginVertical: 8,
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
  },
  paragraph: {
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
    color: "#7c7c7c",
    marginBottom: 10,
  },
  listItem: {
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
    color: "#7c7c7c",
    marginBottom: 6,
  },
  strong: {
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
  },
};
