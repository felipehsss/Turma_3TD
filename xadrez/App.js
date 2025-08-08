import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <View style={styles.area1}>
          <Image source={require('./imgs/wpp.png')} style={styles.img1} />
        </View>
        <View style={styles.area2}>
          <Image source={require('./imgs/apple.png')} style={styles.img1} />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.area3}>
          <Image source={require('./imgs/spotify.png')} style={styles.img1} />

        </View>
        <View style={styles.area4}>
          <Image source={require('./imgs/vs.png')} style={styles.img1} />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.area5}>
          <Image source={require('./imgs/java.png')} style={styles.img1} />
        </View>
        <View style={styles.area6}>
          <Image source={require('./imgs/win.png')} style={styles.img1} />
        </View>
      </View>

    </View>
  );
}


;
