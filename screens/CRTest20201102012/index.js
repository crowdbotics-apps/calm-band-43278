import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const CRTest20201102012 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#fac201"
  }
});
export default CRTest20201102012;