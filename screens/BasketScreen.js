import {View, Text, Modal, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {removeFromBasket, selectBasketItems, selectBasketTotal} from "../features/basketSlice";
import {useMemo, useState} from "react";
import MainEnv from "../main.env";
import {XCircleIcon} from "react-native-heroicons/solid";
import {urlFor} from "../sanity.api";
import Currency from "react-currency-formatter";


const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch()
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    useMemo(() => {
        // groups the items in the basket by id for easy counting and manipulating
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items])

    return (

        <Modal animationType="slide" onRequestClose={() => navigation.goBack()}>
            <View className="flex-1 bg-gray-100 rounded-tl">
                <View className="p-5 border-b border-gray-300 shadow bg-white">
                    <View>
                        <Text className="text-lg font-bold text-center">
                            Basket
                        </Text>
                        <Text className="text-gray-400 text-center">
                            {restaurant.title}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="rounded-full absolute top-4 right-3">
                        <XCircleIcon color={MainEnv.themeColor} size={45}/>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-4">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-7 w-7 bg-gray-300p-4 rounded-full"
                    />
                    <Text className="flex-1 text-center">
                        Deliver in 15-40 min
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color: MainEnv.themeColor}}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-100">
                    {Object.entries(groupedItemsInBasket).map(([key, item]) => (
                        <View key={key} className="flex-row items-center bg-white space-x-3 py-2 px-5">
                            <Text style={{color: MainEnv.themeColor}}>{item.length} x</Text>
                            <Image
                                source={{
                                    uri: urlFor(item[0]?.image).url()
                                }}
                                className="h-12 w-12 rounded-full"/>
                            <Text className="flex-1">{item[0]?.name}</Text>
                            <Text className="text-gray-500">
                                <Currency quantity={item[0]?.price} currency="GHS"/>
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    className="text-xs"
                                    style={{color: MainEnv.themeColor}}
                                    onPress={(() => dispatch(removeFromBasket({id: key})))}>
                                    Remove
                                </Text>
                            </TouchableOpacity>

                        </View>
                    ))}
                </ScrollView>
                <View className="p-5 mt-3 rounded-t-xl bg-white space-y-4">

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="GHS"/>
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={20} currency="GHS"/>
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency quantity={basketTotal + 20} currency="GHS"/>
                        </Text>
                    </View>

                    <TouchableOpacity className="rounded-lg p-4 bg-teal-500">
                        <Text className="text-white text-center font-bold">Place Order</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
};

export default BasketScreen;