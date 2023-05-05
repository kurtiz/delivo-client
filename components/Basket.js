import {View, Text, TouchableOpacity} from 'react-native';
import MainEnv from "../main.env";
import Currency from "react-currency-formatter";

const Basket = () => {
    const [quantity, price] = [5, 45];
    return (
        <View className="absolute w-full bottom-10 z-50">
            <TouchableOpacity
                className={
                    `mx-5 p-4 rounded-lg 
                    flex-row items-center 
                    bg-[${MainEnv.themeColor}] 
                    space-x-1`
                }>
                <Text className={
                    `text-white text-lg 
                    py-1 px-2 font-extrabold 
                    bg-[${MainEnv.offColor}]
                    rounded-sm`
                }>
                    {quantity}
                </Text>
                <Text className="flex-1 text-lg text-white font-extrabold text-center">
                    View Basket
                </Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={price} currency="GHS"/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Basket;