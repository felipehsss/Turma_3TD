import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';


export default function App() {

  
  const [corDeFundo,setCorDeFundo] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState(''); 

  const propriedades = (dados) => {
    for (let key in dados) {
      switch (key) {
        case 'backgroundColor':
          console.log(`${key}: ${dados[key].slice(1)}`);
          break;
          case 'width':
            console.log(`${key}: ${dados[key]}`);
            break;
            case 'height': 
            console.log(`${key}: ${dados[key]}`);
            break;
      }
    }
  }


  const mostrarCor = (style) => {
    const cor= style.backgroundColor;
    alert(`A cor do botão é ${cor}`)
  }

  return (

    
    <View style={styles.container}>
      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={()=>{
            mostrarCor(styles.btn1)
          }}>

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={()=>{
            mostrarCor(styles.btn2)
          }}>

          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={()=>{
            mostrarCor(styles.btn3)
          }}>

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={()=>{
            mostrarCor(styles.btn4)
          }}>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
