import React from "react";
import VerticalLineComponent from "./verticalLine";
import {FlatList, View} from "react-native";
import styles from "./styles";
import HorizontalUnionLineComponent from "./horizontalLine";
import ItemTreeComponent, {ITreeItem} from "./item";
import {ITreePosition} from "./treeGenerator";
import {itemBadge} from "../../helpers/tree";

interface IProps {
    shift: number
    _children: ITreeItem[]
    unionArr: ITreeItem[]
    setRootUser: (item: ITreeItem) => void
    spouse: ITreeItem[]
}

/**
 * Список детей
 * @param shift - смещение слева или справа
 * @param _children - массив детей
 * @constructor
 */
const ChildTreeComponent: React.FunctionComponent<IProps> = ({shift, spouse, _children, unionArr, setRootUser}) => {
    if (_children.length === 0) return null
    return (
        <View
            style={[
                // shift < 0 ? {marginRight: shift} : {marginLeft: shift},
                {marginLeft: shift},
                {alignItems: 'center',}]}>
            {spouse.length>0 && <View style={[styles.itemTreeWrapper, {width: '50%'}]}>
                <HorizontalUnionLineComponent alignItems={'center'}/>
            </View>}
            <VerticalLineComponent height={30} alignItems={'center'}/>
            {_children.length > 1 && <View style={[styles.itemTreeWrapper, {width: '50%'}]}>
                <HorizontalUnionLineComponent alignItems={'center'} invertDirection/>
            </View>}
            <FlatList data={_children}
                      renderItem={({item}) =>
                          <ItemTreeComponent item={item} onPress={() => setRootUser(item)}
                                             badge={itemBadge({item, unionArr})}/>}
                      horizontal={true} scrollEnabled={false}/>
        </View>
    )
}

export default ChildTreeComponent