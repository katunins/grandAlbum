import React, {useEffect} from "react";
import {SafeAreaView, View} from "react-native";
import {TabsNavigator} from "../navigation";
import ModalScreen from "./modal";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./loader";
import {loaderSelector, modalSelector} from "../store/selectors";
import globalStyles from "../styles/styles";
import {actionCheckAuth} from "../store/slice/user.slice";

const Screens = () => {

    const selectModal = useSelector(modalSelector);

    const dispatch = useDispatch()
    const checkAuth = () => {
        dispatch(actionCheckAuth())
    }
    useEffect(checkAuth, [])
    return (
        <SafeAreaView style={globalStyles.body}>
            <TabsNavigator/>
            {selectModal.active && <ModalScreen
                title={selectModal.data.title}
                bodyText={selectModal.data.bodyText}
                buttons={selectModal.data.buttons}
            />}
        </SafeAreaView>
    );
};

export default Screens;
