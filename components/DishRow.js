import {View, Text, Image, TouchableOpacity} from 'react-native';
import Currency from 'react-currency-formatter';
import {useState} from "react";
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";
import MainEnv from "../main.env";

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <>
            <TouchableOpacity
                onPress={() => {setIsPressed(!isPressed)}}
                className={`bg-white border border-gray-100 p-4 ${isPressed && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">Chicken thigh</Text>
                        <Text className="text-gray-400">
                            7pcs Chicken Thighs, Coke, Smoothie, Cookies, Flakes and Pepsi
                            12 pieces of our juicy signature chicken, marinated for 12hrs in our traditional savory
                            Louisiana
                            herbs
                            and seasonings then battered up with our crunchy southern coating and fried until golden
                            brown
                        </Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency
                                quantity={78.60}
                                currency="GHS"
                            />
                        </Text>
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: "https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2"
                            }}
                            className="h-20 w-20 bg-gray-300 p-4 border border-gray-200"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color={MainEnv.themeColor}/>
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon size={40} color={MainEnv.themeColor}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;