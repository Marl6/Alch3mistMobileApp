import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { styles } from './styles/LoadingScreenStyles';

const logo = require('../../assets/logo/alchemistlogo.png');

export default function LoadingScreen() {
  return (

      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Image 
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
  );
}