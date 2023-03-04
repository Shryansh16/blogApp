import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../utility/colors";
import { spacing } from "../../styles/spacing";
import { textScale } from "../../styles/responsiveStyles";

const PostDetailScreen = ({ route }) => {

    const { params } = route
    const { data } = params
    const navigation = useNavigation()
    console.log(route)
    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity style={styles.Arrow} title="Go back" onPress={() => navigation.goBack()}>
                <Image
                    style={styles.ArrowImage}
                    source={require("../assests/image/arrow.png")}
                />
            </TouchableOpacity>

            <Text style={styles.Heading}>{data.Heading}</Text>

            <ScrollView>
                <View style={styles.userDetailContainer}>
                    <View style={styles.PersonImageContainer}>
                        <Image style={styles.personImage}
                            // source={require('../assests/image/PersonImage.jpg')}
                            source={data.personImage}
                        />
                    </View>
                    <View >
                        <Text style={styles.Name}>{data.Name}</Text>
                        <Text style={styles.Description}>{data.Description}</Text>
                    </View>
                </View>

                <Image
                    style={styles.MainImage}
                    source={data.HeadImage}
                />

                <Text style={styles.Paragraph}>As more countries report infection and lockdown, more domestic violence helplines and shelters across the world are reporting rising calls for help. In Argentina, Canada, France, Germany, Spain, the United Kingdom [1], and the United States [2], government authorities, women’s rights activists and civil society partners have flagged increasing reports of domestic violence during the crisis, and heightened demand for emergency shelter [3,4,5]. Helplines in Singapore [6] and Cyprus have registered an increase in calls by more than 30 per cent [7]. In Australia, 40 per cent of frontline workers in a New South Wales survey reported increased requests for help with violence that was escalating in intensity [8].

                    Confinement is fostering the tension and strain created by security, health, and money worries.And it is increasing isolation for women with violent partners, separating them from the people and resources that can best help them. It’s a perfect storm for controlling, violent behaviour behind closed doors. And in parallel, as health systems are stretching to breaking point, domestic violence shelters are also reaching capacity, a service deficit made worse when centres are repurposed for additional COVID-response.

                    Even before COVID-19 existed, domestic violence was already one of the greatest human rights violations. In the previous 12 months, 243 million women and girls (aged 15-49) across the world have been subjected to sexual or physical violence by an intimate partner. As the COVID-19 pandemic continues, this number is likely to grow with multiple impacts on women’s wellbeing, their sexual and reproductive health, their mental health, and their ability to participate and lead in the recovery of our societies and economy.

                    Wide under-reporting of domestic and other forms of violence has previously made response and data gathering a challenge, with less than 40 per cent of women who experience violence seeking help of any sort or reporting the crime. Less than 10 per cent of those women seeking help go to the police. The current circumstances make reporting even harder, including limitations on women’s and girls’ access to phones and helplines and disrupted public services like police, justice and social services. These disruptions may also be compromising the care and support that survivors need, like clinical management of rape, and mental health and psycho-social support. They also fuel impunity for the perpetrators. In many countries the law is not on women’s side; 1 in 4 countries have no laws specifically protecting women from domestic violence.</Text>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,

    },
    ArrowImage: {
        height: spacing.HEIGHT_32,
        width: spacing.WIDTH_30,
        margin: spacing.MARGIN_22,

    },
    Heading: {
        fontSize: textScale(26),
        fontWeight: '600',
        marginLeft: spacing.MARGIN_22,
        // marginTop: 28,
        color: 'black',

    },
    userDetailContainer: {
        flexDirection: 'row',
        margin: spacing.MARGIN_22,
    },
    PersonImageContainer: {
        marginRight: 11,
    },
    personImage: {
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    Name: {
        fontSize: 15,
        fontWeight: '600',

    },
    Description: {
        fontSize: 12,
        fontWeight: '400',
        color: 'lightGray',
    },
    MainImage: {
        height: 250,
        width: 373,
        alignSelf: 'center',
        borderRadius: 20,
    },
    Paragraph: {
        marginTop: 20,
        // marginHorizontal: 25,
        marginLeft: 25,
        marginRight: 10,
        fontSize: 15,
        // fontWeight: '300',
        color: 'black',
    },

})

export default PostDetailScreen