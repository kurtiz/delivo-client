import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StarIcon} from "react-native-heroicons/solid";
import {MapPinIcon} from "react-native-heroicons/outline";
import MainEnv from "../main.env";
import {useNavigation} from "@react-navigation/native";
import RestaurantScreen from "../screens/RestaurantScreen";

const RestaurantCard = (
    {
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
) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            className="bg-white shadow rounded-t-sm mr-3"
            activeOpacity={0.9}
            onPress={() => {
                navigation.navigate(
                    "Restaurant", {
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
                    })
            }
            }
        >
            <Image source={{
                uri: imgUrl
            }}
                   className="h-36 w-64 rounded-md"
            />
            <View className="px-4 mb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
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
        </TouchableOpacity>
    );
};

export default RestaurantCard;