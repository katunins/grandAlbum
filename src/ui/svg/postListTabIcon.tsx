import React from "react";
import Svg, { Path } from "react-native-svg";
import { remCalc } from "../../helpers/utils";
interface IProps {
    color:string
}
const PostsListTabIcon:React.FunctionComponent<IProps> = ({ color }) => {
  return (<Svg width={remCalc(24)} height={remCalc(21)} viewBox="0 0 24 21" fill="none">
          <Path d="M3 4.92391V20.0761C3 20.3211 3.10243 20.5561 3.28476 20.7294C3.46708 20.9027 3.71437 21 3.97222 21H23.0278C23.2856 21 23.5329 20.9027 23.7152 20.7294C23.8976 20.5561 24 20.3211 24 20.0761V4.92391C24 4.67888 23.8976 4.44388 23.7152 4.27061C23.5329 4.09734 23.2856 4 23.0278 4H3.97222C3.71437 4 3.46708 4.09734 3.28476 4.27061C3.10243 4.44388 3 4.67888 3 4.92391ZM17.2499 6.83318C17.6915 6.83573 18.1225 6.96253 18.4884 7.19758C18.8544 7.43262 19.1389 7.76539 19.306 8.1539C19.4732 8.54241 19.5155 8.96926 19.4277 9.38062C19.3399 9.79197 19.1259 10.1694 18.8126 10.4653C18.4994 10.7612 18.1009 10.9623 17.6675 11.0432C17.2341 11.1242 16.7852 11.0814 16.3774 10.9202C15.9696 10.7589 15.6212 10.4866 15.3761 10.1374C15.131 9.78824 15.0001 9.37791 15.0001 8.95818C15.0026 8.39307 15.2408 7.85196 15.6626 7.45357C16.0844 7.05519 16.6552 6.83207 17.2499 6.83318ZM4.54243 19.5832V15.1724L10.5099 10.0817L15.0687 14.394L9.57563 19.5832H4.54243ZM22.4444 19.5832H11.7014L18.7296 12.931L22.4444 15.9457V19.5832Z" fill={color}/>
          <Path d="M0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375L0 17.0625C0 17.3111 0.098772 17.5496 0.274587 17.7254C0.450403 17.9012 0.68886 18 0.9375 18H2.25V3.1875C2.25 2.93886 2.34877 2.7004 2.52459 2.52459C2.7004 2.34877 2.93886 2.25 3.1875 2.25H21V0.9375C21 0.68886 20.9012 0.450403 20.7254 0.274587C20.5496 0.098772 20.3111 0 20.0625 0H0.9375Z" fill={color}/>
    </Svg>
  );
};

export default PostsListTabIcon;
