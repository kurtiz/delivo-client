import {View, Text, Image, TouchableOpacity} from 'react-native';
import Currency from 'react-currency-formatter';
import {useState} from "react";
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";
import MainEnv from "../main.env";
import {urlFor} from "../sanity.api";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, removeFromBasket, selectBasketItemsWithId} from "../features/basketSlice";

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => selectBasketItemsWithId(state, id));

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}))
    }

    const removeItemFromBasket = () => {
        if (!items.length) return
        dispatch(removeFromBasket({id}))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => {setIsPressed(!isPressed)}}
                className={`bg-white border border-gray-100 p-4 ${isPressed && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">
                            {description}
                        </Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency
                                quantity={price}
                                currency="GHS"
                            />
                        </Text>
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: urlFor(image).url()
                            }}
                            className="h-20 w-20 bg-gray-100 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <MinusCircleIcon size={40} color={items.length ? MainEnv.themeColor : "gray"}/>
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={40} color={MainEnv.themeColor}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;