import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './component/Signup';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  console.log("0");
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1874CD', '#6E8B3D']}
        style={styles.background}
      ></LinearGradient>
      <Signup></Signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#668B8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
});
