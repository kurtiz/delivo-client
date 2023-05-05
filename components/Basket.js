import {View, Text, TouchableOpacity} from 'react-native';
import MainEnv from "../main.env";
import Currency from "react-currency-formatter";
import {useSelector} from "react-redux";
import {selectBasketItems, selectBasketTotal} from "../features/basketSlice";

const Basket = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    return (
        <View className="absolute w-full bottom-10 z-50">
            <TouchableOpacity
                className={
                    `mx-5 p-4 rounded-lg 
                    flex-row items-center  
                    space-x-1`
                }
                style={{
                    backgroundColor: MainEnv.themeColor
                }}>
                <Text className={
                    `text-white text-lg 
                    py-1 px-2 font-extrabold 
                    rounded-sm`
                }
                      style={{
                    backgroundColor: MainEnv.offColor
                }}>
                    {items.length}
                </Text>
                <Text className="flex-1 text-lg text-white font-extrabold text-center">
                    View Basket
                </Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="GHS"/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Basket;