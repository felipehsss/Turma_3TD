import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function App() {
  const [colorData, setColorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.thecolorapi.com/id?hex=24B1E0")
      .then((res) => res.json())
      .then((data) => {
        setColorData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
  <View style={styles.ladoalado}>
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
  </View>
  <View style={styles.ladoalado}>
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
  </View>
  <View style={styles.ladoalado}>
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
  </View>
  <View style={styles.ladoalado}>
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
  </View>
  <View style={styles.ladoalado}>
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
    <View
      style={[
        styles.colorBox,
        { backgroundColor: colorData.hex.value },
      ]}
    />
  </View>
</View>

    
      

  );
}

