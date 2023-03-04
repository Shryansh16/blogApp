import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textScale } from "../../styles/responsiveStyles";
import { spacing } from "../../styles/spacing";
import HorizontalScrollSection from "../row/HorizontalScrollSection";
import SearchBar from "../row/SearchBar";
import Articles from "./Articles";

const HomeSCreen = () => {

    const [selectedCatigary, setselectedCatigary] = useState(0);

    const DATA = [
        {
            id: 1,
            Title: 'Articles'
        },
        {
            id: 2,
            Title: 'Videos'
        },
        {
            id: 3,
            Title: 'Podcast'
        },
        {
            id: 4,
            Title: 'Saved'
        },
        {
            id: 5,
            Title: 'Articles'
        },
        {
            id: 6,
            Title: 'Audios'
        },
        {
            id: 7,
            Title: 'For You'
        },
        {
            id: 8,
            Title: 'Reels'
        },
        {
            id: 9,
            Title: 'Notification'
        },

    ]
    function onPressTitle(item) {
        console.log("item >> ", item);
        setselectedCatigary(item)
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ paddingHorizontal: spacing.PADDING_24 }} >
                <Text style={styles.BlogText}>Blog</Text>
                <SearchBar />
            </View>
            <View style={{}} >
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalScrollSection
                                item={item}
                                index={index}
                                onPressTitle={onPressTitle}
                                selectedCatigary={selectedCatigary} />
                        )
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


            <Articles />


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Arrow: {
        marginLeft: 5,
    },
    Blog: {
        marginTop: spacing.MARGIN_8,
        marginLeft: spacing.MARGIN_5,
    },
    BlogText: {
        marginTop: spacing.MARGIN_8,
        marginLeft: spacing.MARGIN_5,
        fontSize: textScale(30),
        fontWeight: '800',
        color: 'black',
        fontFamily: 'Oswal',
    },
})


export default HomeSCreen