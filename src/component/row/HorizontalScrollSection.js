import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textScale } from "../../styles/responsiveStyles";
import { spacing } from "../../styles/spacing";


const HorizontalScrollSection = ({ item, index, onPressTitle, selectedCatigary }) => {

    return (
        <TouchableOpacity
            style={[styles.mainContainer, index == 0 && { marginLeft: spacing.MARGIN_24 },]}
            onPress={() => onPressTitle(item, index)}>
            <Text style={[styles.Text, selectedCatigary.id == item.id && { color: 'orange' }]}>
                {item.Title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginRight: spacing.MARGIN_24,
        marginVertical: spacing.MARGIN_24,
        // marginHorizontal: -25,
    },
    Text: {
        fontSize: textScale(16),
        fontWeight: '500',
    },
})

export default HorizontalScrollSection