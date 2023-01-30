import { Button, Image, Text, View } from "react-native";
import Cardo from "../component/Cardo";


export default function Finish(props) {
    const { phoneText, screenSet, confirmedState, clearTxts } = props;

    let hintCmp;

    const lastDigit = phoneText.length > 0 ? phoneText[phoneText.length - 1] : '';

    const imgUrl = `https://picsum.photos/id/${lastDigit}/100/100`;

    const onPressStartAgain = function f1() {
        clearTxts();
        screenSet(0);
    };

    if (confirmedState) {
        hintCmp = (
            <Text>
                Thank you for signing up. Here's a picture for you (based on the last digit of your phone number).
            </Text>
        );
    } else {
        hintCmp = (
            <Text>
                Sorry to see you go.
            </Text>
        );
    }

    const imgSrc = confirmedState ? { uri: imgUrl } : require('../resource/sad-smiley-face.png');

    return (
        <View>
            <Cardo>
                {hintCmp}
                <View>
                    <Image
                        source={ imgSrc }
                        style={{
                            width: 120,
                            height: 120,
                        }}
                    ></Image>
                </View>
            </Cardo>

            <Button title="Start Again" onPress={ () => { onPressStartAgain() } }></Button>
        </View>
    );
}