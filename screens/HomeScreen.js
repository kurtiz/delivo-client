import {View, Text, Image, TextInput, ScrollView} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import MainEnv from "../main.env";
import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon as SearchIcon, AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import {SafeAreaView} from "react-native-safe-area-context";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";


const HomeScreen = () => {
    const navigation = useNavigation(); // gives access to react navigation

    // specify activities to take place as soon as this screen appears
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <SafeAreaView className="bg-gray-50 pt-3">
            {/* Header */}

            <View className="flex-row pb-3 item-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl items-center">
                        Current Location
                        <ChevronDownIcon size={20} color={MainEnv.themeColor}/>
                    </Text>
                </View>
                <UserIcon size={35} color={MainEnv.themeColor}/>
            </View>
            {/* End Header */}


            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20}/>
                    <TextInput
                        placeholder="Find Restaurants"
                        keyboardType="default"
                        className="flex-1"
                    />
                </View>
                <AdjustmentsVerticalIcon color={MainEnv.themeColor}/>
            </View>
            {/* End Search bar and adjustments */}
                    {/* body */}
                    <ScrollView>
                        {/* Categories Row */}
                        <Categories/>
                        {/* End Categories Row */}

                        {/* Features Row */}
                        <FeaturedRow
                            id="f11"
                            title="Featured"
                            description="Recommended based on your previous orders"
                        />

                        <FeaturedRow
                            id="f22"
                            title="Yummy Discounts"
                            description="Incredible Discounts you can't afford to miss"
                        />
                        <FeaturedRow
                            id="f33"
                            title="Near You"
                            description="Order fast from the nearest restaurants"
                        />

                    </ScrollView>

        </SafeAreaView>
    )
};


export default HomeScreen;