import React from "react";
import Svg, {Circle, Path} from "react-native-svg";
import {remCalc} from "../../helpers/utils";

const DeleteIcon = () => {
    return (
        <Svg width={remCalc(6)} height={remCalc(6)} viewBox="0 0 6 6" fill="none">
            <Path
                d="M3.74845 3L5.84339 0.905053C5.94282 0.805803 5.99875 0.671121 5.99887 0.530636C5.99899 0.39015 5.94331 0.25537 5.84406 0.155944C5.74481 0.0565184 5.61012 0.000591953 5.46964 0.000467886C5.32915 0.00034382 5.19437 0.0560323 5.09495 0.155283L3 2.25023L0.905053 0.155283C0.805627 0.0558569 0.670777 0 0.530168 0C0.389559 0 0.254708 0.0558569 0.155283 0.155283C0.0558569 0.254708 0 0.389559 0 0.530168C0 0.670777 0.0558569 0.805627 0.155283 0.905053L2.25023 3L0.155283 5.09495C0.0558569 5.19437 0 5.32922 0 5.46983C0 5.61044 0.0558569 5.74529 0.155283 5.84472C0.254708 5.94414 0.389559 6 0.530168 6C0.670777 6 0.805627 5.94414 0.905053 5.84472L3 3.74977L5.09495 5.84472C5.19437 5.94414 5.32922 6 5.46983 6C5.61044 6 5.74529 5.94414 5.84472 5.84472C5.94414 5.74529 6 5.61044 6 5.46983C6 5.32922 5.94414 5.19437 5.84472 5.09495L3.74845 3Z"
                fill="black"/>
        </Svg>
    );
};

export default DeleteIcon;
