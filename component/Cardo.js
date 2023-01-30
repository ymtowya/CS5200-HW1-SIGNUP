import { View } from "react-native";
import myStyling from "../resource/Styling";

export default function Cardo(props) {

    return (
        <View
            style={myStyling.myCardo}
        >
            { props.children }
        </View>
    );
}