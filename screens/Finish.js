import { Button, Image, Text, View } from "react-native";
import Cardo from "../component/Cardo";


export default function Finish(props) {
    const { phoneText, screenSet, confirmedState, clearTxts } = props;

    let imgCmp;

    let hintCmp;

    const lastDigit = phoneText.length > 0 ? phoneText[phoneText.length - 1] : '';

    const imgUrl = `https://picsum.photos/id/${lastDigit}/100/100`;

    console.log(imgUrl);

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
        imgCmp = (
            <View>
                <Image
                    source={{
                        uri: imgUrl
                    }}
                ></Image>
            </View>
        );
    } else {
        hintCmp = (
            <Text>
                Sorry to see you go.
            </Text>
        );
        imgCmp = (
            <View>
                <Image
                    source={ require('../resource/sad-smiley-face.png') }
                ></Image>
            </View>
        );
    }

    return (
        <View>
            <Cardo>
                {hintCmp}
                {imgCmp}
            </Cardo>

            <Button title="Start Again" onPress={ () => { onPressStartAgain() } }></Button>
        </View>
    );
}