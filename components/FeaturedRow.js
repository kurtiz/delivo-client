import {ScrollView, Text, View} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import MainEnv from "../main.env";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import {getFeaturedListById, urlFor} from "../sanity";

const FeaturedRow = ({id, title, description, classes}) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedListById(id)
            .then(data => {
                setRestaurants(data?.restaurants)
            })
            .catch(err => alert(err))
    })

    return (
        <View className={classes}>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={MainEnv.themeColor}/>
            </View>
            <Text className="text-sm text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="pt-4"
            >
                {/* RestaurantCards */}
                {restaurants?.map((
                    {_id, address, dish, image, name, rating, short_description, type, long, lat}) => (
                    <RestaurantCard
                        key={_id}
                        id={_id}
                        imgUrl={urlFor(image).url()}
                        title={name}
                        rating={rating}
                        genre={type?.name}
                        address={address}
                        short_description={short_description}
                        dishes={dish}
                        long={long}
                        lat={lat}
                    />
                ))}


                <RestaurantCard
                    id="gte"
                    imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2"
                    title="McDonald's Yum Crunch"
                    rating={3.6}
                    genre="American"
                    address="Men's ST, Kwashieman"
                    short_description="Yummy and Crunchy!! Burger and chicken wings"
                    dishes={[]}
                    long={7.90}
                    lat={0.98}
                />
                <RestaurantCard
                    id="gte"
                    imgUrl="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                    title="McDonald's Yum Crunch"
                    rating={3.6}
                    genre="American"
                    address="Men's ST, Kwashieman"
                    short_description="Yummy and Crunchy!! Burger and chicken wings"
                    dishes={[]}
                    long={7.90}
                    lat={0.98}
                />
                <RestaurantCard
                    id="gte"
                    imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    title="McDonald's Yum Crunch"
                    rating={3.6}
                    genre="American"
                    address="Men's ST, Kwashieman"
                    short_description="Yummy and Crunchy!! Burger and chicken wings"
                    dishes={[]}
                    long={7.90}
                    lat={0.98}
                />
                <RestaurantCard
                    id="gte"
                    imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2"
                    title="McDonald's Yum Crunch"
                    rating={3.6}
                    genre="American"
                    address="Men's ST, Kwashieman"
                    short_description="Yummy and Crunchy!! Burger and chicken wings"
                    dishes={[]}
                    long={7.90}
                    lat={0.98}
                />


            </ScrollView>
        </View>
    );
};

export default FeaturedRow;