import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './component/Signup';
import { LinearGradient } from 'expo-linear-gradient';
import myStyling from './resource/Styling';

export default function App() {
  console.log("0");
  return (
    <View style={myStyling.container}>
      <LinearGradient
        colors={['#1874CD', '#6E8B3D']}
        style={myStyling.backgroundLinear}
      ></LinearGradient>
      <Signup></Signup>
    </View>
  );
}
