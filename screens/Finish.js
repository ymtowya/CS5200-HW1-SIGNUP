import { Button, Image, Text, View } from "react-native";
import Cardo from "../component/Cardo";
import myStyling from "../resource/Styling";


export default function Finish(props) {
    const { phoneText, screenSet, confirmedState, clearTxts } = props;

    let hintTxt;

    const lastDigit = phoneText.length > 0 ? phoneText[phoneText.length - 1] : '';

    const imgUrl = `https://picsum.photos/id/${lastDigit}/100/100`;

    const onPressStartAgain = function f1() {
        clearTxts();
        screenSet(0);
    };

    if (confirmedState) {
        hintTxt = "Thank you for signing up. Here's a picture for you (based on the last digit of your phone number).";
    } else {
        hintTxt = "Sorry to see you go.";
    }

    const imgSrc = confirmedState ? { uri: imgUrl } : require('../resource/sad-smiley-face.png');

    return (
        <View>
            <Cardo>
                <Text style={myStyling.boldText}>
                    {hintTxt}{"\n\n"}
                </Text>
                <View>
                    <Image
                        source={ imgSrc }
                        style={myStyling.image}
                    ></Image>
                </View>
            </Cardo>

            <Button title="Start Again" onPress={ () => { onPressStartAgain() } }></Button>
        </View>
    );
}