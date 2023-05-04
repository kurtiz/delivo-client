import {ScrollView, Text, View} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import MainEnv from "../main.env";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import {getFeaturedListById, urlFor} from "../sanity.api";

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
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;