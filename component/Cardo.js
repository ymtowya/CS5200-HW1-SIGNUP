import { View } from "react-native";
import myStyling from "../resource/Styling";

/**
 * Cardo is the component that will display content in a card on the screen.
 * @param {children} props the inner content to display
 * @returns the Card on the screen
 */
export default function Cardo(props) {

    return (
        <View
            style={myStyling.myCardo}
        >
            { props.children }
        </View>
    );
}