import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { boxShadow } from "../../styles/Mixins";
import { spacing } from "../../styles/spacing";
import colors from "../../utility/colors";
import { textScale } from "../../styles/responsiveStyles";


const ArticlesSection = ({ item, index, onPressPost }) => {
    return (
        <TouchableOpacity
            style={[styles.mainContainer, index == 0 && {}]}
            onPress={() => onPressPost(item, index)}
        >
            <Image
                style={styles.Himg}
                source={item.HeadImage}
                resizeMode='contain'
            />

            <View style={styles.DetailContainer} >

                <View style={styles.Heading}>
                    <Text style={styles.HeadingText}>{item.Heading}</Text>
                </View>

                <View style={styles.userDetailContainer}>
                    <View style={styles.PersonImageContainer}>
                        <Image style={styles.personImage}
                            source={item.personImage}
                        />
                    </View>
                    <View >
                        <Text style={styles.Name}>{item.Name}</Text>
                        <Text style={styles.Description}>{item.Description}</Text>
                    </View>
                </View>
            </View>




        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.MARGIN_20,
        borderRadius: spacing.RADIUS_20,
        backgroundColor: colors.grey50,
        marginHorizontal: spacing.MARGIN_24,
        ...boxShadow()
    },
    HeadImage: {
        borderTopRightRadius: spacing.RADIUS_20,
        borderTopLeftRadius: spacing.RADIUS_20,
    },
    Himg: {
        height: spacing.HEIGHT_178,
        width: '100%',
        borderTopRightRadius: spacing.RADIUS_20,
        borderTopLeftRadius: spacing.RADIUS_20,
    },
    DetailContainer: {
        marginTop: spacing.MARGIN_10,
        marginBottom: spacing.MARGIN_18,
        marginHorizontal: spacing.MARGIN_12
    },
    Heading: {
        marginTop: spacing.MARGIN_18,
        marginBottom: spacing.MARGIN_18,
    },
    HeadingText: {
        fontSize: textScale(14),
        fontWeight: '700',
        color: 'black',
    },

    userDetailContainer: {
        flexDirection: 'row',
        marginTop: spacing.MARGIN_10,
    },
    PersonImageContainer: {
        marginRight: spacing.MARGIN_12,
    },
    personImage: {
        height: spacing.HEIGHT_44,
        width: spacing.HEIGHT_44,
        borderRadius: spacing.RADIUS_50,
    },
    Name: {
        fontSize: textScale(13),
        fontWeight: '600',

    },
    Description: {
        fontSize: textScale(10),
        fontWeight: '400',
        color: 'lightGray',
    },
})


export default ArticlesSection