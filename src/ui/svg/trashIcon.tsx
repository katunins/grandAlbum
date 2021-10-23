import React from "react";
import Svg, {Circle, Path} from "react-native-svg";
import {remCalc} from "../../helpers/utils";

const TrashIcon = () => {
    return (
        <Svg width={remCalc(10)} height={remCalc(11)} viewBox="0 0 10 11" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.42276 1.50077C1.64034 1.48714 1.82775 1.65296 1.84135 1.87114L2.33477 9.7878C2.33486 9.78926 2.33494 9.79072 2.33502 9.79218C2.34867 10.0586 2.52504 10.2083 2.73027 10.2083H7.26973C7.47294 10.2083 7.64853 10.0619 7.6652 9.78835L8.15866 1.87114C8.17225 1.65296 8.35966 1.48714 8.57724 1.50077C8.79483 1.51441 8.96019 1.70234 8.94659 1.92053L8.4532 9.83664C8.4532 9.83661 8.4532 9.83666 8.4532 9.83664C8.41409 10.4779 7.93837 11 7.26973 11H2.73027C2.0679 11 1.581 10.4825 1.54671 9.83518L1.05342 1.92053C1.03982 1.70234 1.20518 1.51441 1.42276 1.50077Z"
                  fill="black"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 1.99999C0 1.72385 0.186548 1.49999 0.416667 1.49999H9.58333C9.81345 1.49999 10 1.72385 10 1.99999C10 2.27613 9.81345 2.49999 9.58333 2.49999H0.416667C0.186548 2.49999 0 2.27613 0 1.99999Z"
                  fill="black"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.92219 0.791667C3.89405 0.791591 3.86618 0.796629 3.84018 0.80649C3.81417 0.816351 3.79054 0.830841 3.77065 0.849127C3.75075 0.867413 3.73499 0.889133 3.72426 0.91304C3.71353 0.936946 3.70805 0.962566 3.70814 0.988425L3.70814 0.989585V1.58333H6.29186V0.989585L6.29187 0.988425C6.29195 0.962566 6.28647 0.936946 6.27574 0.91304C6.26501 0.889132 6.24925 0.867412 6.22936 0.849127C6.20946 0.830842 6.18583 0.816351 6.15983 0.80649C6.13382 0.796628 6.10595 0.791591 6.07781 0.791667L6.07655 0.791669H3.92345L3.92219 0.791667ZM3.924 2.54015e-06C3.78258 -0.000292237 3.64249 0.0250718 3.51176 0.0746429C3.3808 0.124297 3.26182 0.19726 3.16166 0.289335C3.06149 0.38141 2.98211 0.49078 2.9281 0.611154C2.87417 0.731326 2.84657 0.8601 2.8469 0.990091V1.97917C2.8469 2.19778 3.03969 2.375 3.27752 2.375H6.72248C6.96031 2.375 7.15311 2.19778 7.15311 1.97917V0.990172C7.15344 0.860153 7.12584 0.731351 7.07191 0.611154C7.01789 0.490781 6.93851 0.38141 6.83835 0.289335C6.73818 0.197259 6.61919 0.124297 6.48824 0.0746429C6.35751 0.0250719 6.21742 -0.000292237 6.076 2.54015e-06H3.924ZM3.04684 3.16692C3.28451 3.15912 3.48406 3.3299 3.49255 3.54837L3.70786 9.09003C3.71635 9.30851 3.53056 9.49194 3.29289 9.49974C3.05521 9.50754 2.85566 9.33676 2.84717 9.11829L2.63186 3.57663C2.62337 3.35815 2.80916 3.17472 3.04684 3.16692ZM6.95316 3.16692C7.19084 3.17472 7.37663 3.35815 7.36814 3.57663L7.15283 9.11829C7.14434 9.33676 6.94479 9.50754 6.70712 9.49974C6.46944 9.49194 6.28365 9.30851 6.29214 9.09003L6.50745 3.54837C6.51594 3.3299 6.71549 3.15912 6.95316 3.16692ZM5 3.16667C5.23783 3.16667 5.43062 3.34389 5.43062 3.5625V9.10416C5.43062 9.32277 5.23783 9.49999 5 9.49999C4.76218 9.49999 4.56938 9.32277 4.56938 9.10416V3.5625C4.56938 3.34389 4.76218 3.16667 5 3.16667Z"
                  fill="black"/>
        </Svg>
    );
};

export default TrashIcon;
