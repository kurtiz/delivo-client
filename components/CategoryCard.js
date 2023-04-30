import {Image, Text, TouchableOpacity, View} from "react-native";


const CategoryCard = ({imgUrl, title}) => {

    return (
        <TouchableOpacity>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-20 w-20 mx-1 rounded"
            />
            <Text className="text-sm">{title}</Text>
        </TouchableOpacity>
    );
};



export default CategoryCard;