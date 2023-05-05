import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {urlFor} from "../sanity.api";
import {ArrowLeftIcon, StarIcon} from "react-native-heroicons/solid";
import MainEnv from "../main.env";
import {ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    } = useRoute();
    const navigation = useNavigation()
    // specify activities to take place as soon as this screen appears
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className="w-full h-56 bg-gray-200 p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 p-4 bg-gray-100 rounded-full"
                    activeOpacity={0.8}
                >
                    <ArrowLeftIcon size={20} color={MainEnv.themeColor}/>
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">
                        {title}
                    </Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-2">
                            <StarIcon color={MainEnv.themeColor} size={21} opacity={0.5}/>
                            <Text opacity={0.8} className="text-xs text-gray-500">
                                <Text style={{
                                    color: MainEnv.themeColor
                                }}>{rating} • {genre}</Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon size={22} opacity={0.5} color="gray"/>
                            <Text className="text-xs text-gray-500">
                                Nearby • {address}
                            </Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 mt-2 pb-4">
                        {short_description}
                    </Text>
                </View>
                <TouchableOpacity className="flex-row space-x-2 p-4 border-y border-gray-200">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                    <Text className="flex-1 pl-2 font-bold text-md">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color={MainEnv.themeColor} size={20}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text className="pt-4 px-6 mb-3 font-bold text-xl">
                    Menu
                </Text>
            </View>

            {/* Dish Rows */}
            {dishes.map((dish) => (
                <DishRow
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}
        </ScrollView>
    );
};

export default RestaurantScreen;