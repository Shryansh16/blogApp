import React, { useState, } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { spacing } from "../../styles/spacing";


const SearchBar = () => {

    const [input, Setinput] = useState('')

    return (
        <View style={styles.mainContainer}>
            <View style={styles.SearchImage}>
                <Image
                    style={styles.Image}
                    source={require('../assests/image/searchimage.png')}
                />
            </View>

            <TextInput style={styles.SearchBar}
                value={input}
                onChangeText={(Text) => Setinput(Text)}
                placeholder={"Search"}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: spacing.MARGIN_18,
        // marginLeft: spacing.MARGIN_8,
    },
    SearchBar: {
        height: spacing.HEIGHT_44,
        width: spacing.FULL_WIDTH - (spacing.PADDING_24 * 4),
        backgroundColor: 'Silver',
        padding: spacing.PADDING_12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#EFF5F5',
        fontWeight: '600',
    },
    SearchImage: {
        // height: 42,
        backgroundColor: '#EFF5F5',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        padding: spacing.PADDING_12,
        paddingLeft: spacing.PADDING_16,
        paddingRight: spacing.PADDING_4,
    },
    Image: {
        height: spacing.HEIGHT_20,
        width: spacing.WIDTH_20,
    }

})

export default SearchBar