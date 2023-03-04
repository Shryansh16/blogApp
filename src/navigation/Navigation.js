import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSCreen from "../component/modules/HomeScreen";
import PostDetailScreen from "../component/screens/PostDetailScreen";


const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (

        <View style={styles.mainContainer} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="home" component={HomeSCreen} />
                    <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <HomeSCreen /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    }
})

export default Navigation