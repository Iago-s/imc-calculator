import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

import Result from '../../components/Result';

const Imc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [imc, setImc] = useState('');
  const [situation, setSituation] = useState('');
  const [color, setColor] = useState('');

  const handleIMC = () => {
    if(height === '' || weight === '') {
      return Alert.alert(
        'Entrada inválida!', 
        'Preencha os campos Altura e peso para continuar', 
        [
          { text: 'Ok', onPress: () => { return } }
        ], 
        { cancelable: false }
      );
    }

    const sum = weight / ((height/100) * (height/100)); 

    if(sum < 18.5){
      setSituation('Abaixo do peso');
      setColor('#ffca28');
    } else if(sum >= 18.5 && sum <= 24.9) {
      setSituation('Peso normal');
      setColor('#00c853');
    } else if(sum >= 25 && sum <= 29.9) {
      setSituation('Sobrepeso');
      setColor('#ffab91');
    } else if(sum >= 30 && sum <= 34.9) {
      setSituation('Obesidade grau 1');
      setColor('#e53935');
    } else if(sum >= 35 && sum <= 39.9) {
      setSituation('Obesidade grau 2');
      setColor('#d32f2f');
    } else if(sum >= 40) {
      setSituation('Obesidade grau 3');
      setColor('#b71c1c');
    }

    setImc(sum.toFixed(2));
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          placeholder="Altura (Centimetros)"
          placeholderTextColor="#78909c"
          keyboardType="numeric"

          value={height}
          onChangeText={event => setHeight(event)}
        /> 
        <TextInput 
          style={styles.input} 
          placeholder="Peso (Quilogramas)"
          placeholderTextColor="#78909c"
          keyboardType="numeric"

          value={weight}
          onChangeText={event => setWeight(event)}
        />
        <TouchableOpacity style={styles.button} onPress={handleIMC}>
          <Text style={styles.textButton}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>
      <Result imc={imc} situation={situation} color={color}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    backgroundColor: '#f5f5f5',

    marginTop: 30,
    padding: 20,
  },
  containerInput: {
    width: '100%',
  },
  input: {
    width: '100%',

    marginBottom: 10,

    fontSize: 20,
    textAlign: 'center',
    padding: 10,

    backgroundColor: '#eceff1',

  },
  button: {
    width: '100%',

    marginBottom: 10,

    backgroundColor: '#cfd8dc',

    borderBottomColor: '#cfd8dc',
    
    padding: 10
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f5f5f5',
  }
});

export default Imc;