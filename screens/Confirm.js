import { Button } from "react-native";
import Cardo from "../component/Cardo";


export default function Starting(props) {

    const { emailText, phoneText, screenSet, clearTxts } = props;

    const goBackFunc = function f1() {
        clearTxts();
        screenSet(0);
    }

    const confirmFunc = function f2() {
        screenSet(2);
    }

    const finishLaterFunc = function f3() {
        screenSet(2);
    }

    return (
        <Cardo>
            <Text>
                You have entered:
            </Text>
            <Text>
                {emailText}
            </Text>
            <Text>
                {phoneText}
            </Text>
            <Text>
                Please confirm they are correct.
            </Text>
            
            <Button title="Go back" onPress={ () => { goBackFunc(); } }></Button>

            <Button title="Confirm" onPress={ () => { confirmFunc(); } }></Button>

            <Button title="Finish Later" onPress={ () => { finishLaterFunc(); } }></Button>
        </Cardo>
    );
}