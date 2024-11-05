

import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import useDarkMode from "@/shared/hooks/useDarkMode";
import {_styles} from './style'
import { KeyboardAvoidingView, Platform } from "react-native";

interface WrapperProps {
  children: React.ReactNode
}
export default function Wrapper({children}: WrapperProps) {
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isDarkMode);
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
  )
}
