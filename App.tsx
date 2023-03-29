import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('./assets/background_image.jpg')}
      >
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});