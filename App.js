import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './main/Signup';
import { LinearGradient } from 'expo-linear-gradient';
import myStyling from './resource/Styling';

export default function App() {
  return (
    <View style={myStyling.container}>
      <LinearGradient
        colors={[myStyling.colors.bgColor1, myStyling.colors.bgColor2]}
        style={myStyling.backgroundLinear}
      ></LinearGradient>
      <Signup></Signup>
    </View>
  );
}
