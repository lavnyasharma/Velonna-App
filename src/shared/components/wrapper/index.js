import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import useDarkMode from "@/shared/hooks/useDarkMode";
import {styless} from './style';
import { KeyboardAvoidingView, Platform } from "react-native";

export default function Wrapper({children}) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ height: '100%' }}
        keyboardVerticalOffset={0}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
