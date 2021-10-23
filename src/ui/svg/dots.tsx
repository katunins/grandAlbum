import React from "react";
import Svg, {Path} from "react-native-svg";
import {remCalc} from "../../helpers/utils";

const DotsIcon = () => {
    return (
        <Svg width={remCalc(13)} height={remCalc(3)} viewBox="0 0 13 3" fill="none">
            <Path
                d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z"
                fill="black"/>
            <Path
                d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z"
                fill="black"/>
            <Path
                d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                fill="black"/>
        </Svg>
    );
};

export default DotsIcon;
