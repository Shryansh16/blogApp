import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticlesSection from "../row/ArticlesSection";


const Articles = () => {
    const navigation = useNavigation()



    const DATA = [
        {
            id: 1,
            HeadImage: require('../assests/image/maskImage.webp'),
            Heading: '10 Tips to Maintain Your Mental Health While Working From Home',
            personImage: { uri: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000' },
            Name: 'Lia Castro',
            Description: '9.10 am, 12 aug 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            Heading: 'Top 5 Podcast Episodes of 2022. You should Watch Early',
            personImage: { uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            Name: 'jagdish Yadav',
            Description: '10.10 pm, 18 sep 2021',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png' },
            Heading: 'Netflixs most-watched movies and TV shows of 2022: The Gray Man and Stranger Things 4come out on top',
            personImage: { uri: 'https://st2.depositphotos.com/3143277/8644/i/600/depositphotos_86446164-stock-photo-business-man-in-office.jpg' },
            Name: 'Ajay Soni',
            Description: '2.10 am, 12 jan 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://media.gettyimages.com/id/490129858/photo/gender-equality-in-the-workplace.jpg?s=612x612&w=0&k=20&c=7Gq2DGzWKUAVfgxahICxvEq1ALL5-ul0ZYxnw4faZCU=' },
            Heading: 'A Gendered Dilemma: The Unspoken Smiles Fellowship as an Avenue of Equality',
            personImage: { uri: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            Name: 'Ravi Soni',
            Description: '12.06 am, 30 feb 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15OpQs.img?w=1920&h=1080&q=60&m=2&f=jpg' },
            Heading: 'Top 10 Crime Thriller Films & Web Series Of 2022 That You Shouldn’t Miss',
            personImage: { uri: 'https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg' },
            Name: 'Aditya Raj Sen',
            Description: '3.20 pm, 2 March 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15MqIf.img?w=800&h=415&q=60&m=2&f=jpg' },
            Heading: 'The most brutal acts of revenge in history',
            personImage: { uri: 'https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg?w=2000' },
            Name: 'Nehil Sharma',
            Description: '5.37 am, 5 April 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15O2WX.img?w=602&h=414&m=6' },
            Heading: 'US military aircraft shoots down Chinese fighter jet in South China Sea',
            personImage: { uri: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg' },
            Name: 'Shryansh Gangwal',
            Description: '7.40 pm, 6 may2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15MPdM.img?w=1920&h=1080&q=60&m=2&f=jpg' },
            Heading: 'Covid-19 4th wave to hit India? Expert believes next few days crucial',
            personImage: { uri: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
            Name: 'Mukash Ambani',
            Description: '11.35 am, 25 june 2020',

        },
        {
            id: 1,
            HeadImage: { uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1gCIuR.img?w=800&h=415&q=60&m=2&f=jpg' },
            Heading: '20 companies you didn’t know are owned by celebrities',
            personImage: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVu5Q8f6xrJZQ3gwh2Fvs6hR8Xr6Zsg2fbzSkf-vMWk3DPI-96OJ_ZEyxkfVjg0OwKxc&usqp=CAU' },
            Name: 'Paplo Di al Ber',
            Description: '5.50 pm, 16 july 2020',
        },


    ]
    function onPressPost(item) {
        navigation.navigate('PostDetailScreen', { data: item })
    }
    return (
        // <View style={styles.mainContainer}>


        <FlatList data={DATA}
            renderItem={({ item, index }) => {
                return (
                    <ArticlesSection item={item} index={index} onPressPost={onPressPost} />
                )
            }}

            showsVerticalScrollIndicator={false}
        />

        // </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})

export default Articles