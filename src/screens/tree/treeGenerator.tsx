import React, {useState} from "react";
import {View} from "react-native";
import styles from "./styles";
import ItemTreeComponent, {ITreeItem} from "./item";
import VerticalLineComponent from "./verticalLine";
import HorizontalUnionLineComponent from "./horizontalLine";
import BrothersWrapperComponent from "./brothersWrapper";
import {getBrothers, getChildren, itemBadge} from "../../helpers/tree";
import {CommonActions, useNavigation} from "@react-navigation/native";


export interface ITreePosition {
    alignItems: 'flex-start' | 'center' | 'flex-end'
}

interface IProps extends ITreePosition {
    rootUser: ITreeItem
    setRootUser: (user: ITreeItem) => void
    unionArr: ITreeItem[]
    root?: boolean
    spouse?: boolean
}

/**
 * Генератор древа
 * @param rootUser - центральный пользователь
 * @param unionArr - массив всех родственников для поиска
 * @param alignItems - тип древа (слева, справа, по центру)
 * @param root - главный пользователь в древе
 * @constructor
 */
const TreeGenerator: React.FunctionComponent<IProps> = ({
                                                            rootUser,
                                                            spouse,
                                                            setRootUser,
                                                            unionArr,
                                                            alignItems,
                                                            root
                                                        }) => {

    const getTreeElements: (item: ITreeItem | undefined, alignItems: ITreePosition['alignItems']) => React.ReactElement | null = (item, alignItems) => {
        if (!item) return null
        const onPress = () => {
            if (item._id === rootUser._id && !spouse) return
            setRootUser(item)
        }
        const firstElement = item._id === rootUser._id
        const father = getTreeElements(unionArr.find(el => item.parents.father === el._id), 'flex-end')
        const mother = getTreeElements(unionArr.find(el => item.parents.mother === el._id), 'flex-start')
        return (
            <View
                style={[styles.itemTreeContainer, {alignItems},
                    {backgroundColor: '#'+((1<<24)*Math.random() | 0).toString(16)}
                ]}>
                <View style={styles.itemTreeWrapper}>
                    {father}
                    {mother}
                </View>
                {father && mother ?
                    <HorizontalUnionLineComponent alignItems={alignItems}/>
                    :
                    <>{(father || mother) && <VerticalLineComponent height={7} alignItems={alignItems}/>}</>
                }
                {(father || mother) && <VerticalLineComponent height={30} alignItems={alignItems}/>}
                <View style={{flexDirection: 'row'}}>
                    <BrothersWrapperComponent alignItems={alignItems} unionArr={unionArr}
                                              brothers={firstElement ? getBrothers({user: item, unionArr}) : []}
                                              setRootUser={setRootUser}
                    >
                        <ItemTreeComponent
                            item={item}
                            root={root && firstElement}
                            // badge={itemBadge({item, unionArr})}
                            onPress={onPress}
                        />
                    </BrothersWrapperComponent>
                </View>
            </View>
        )
    }
    return getTreeElements(rootUser, alignItems)
}

export default TreeGenerator