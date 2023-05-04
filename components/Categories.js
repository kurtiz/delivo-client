import {ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";
import {useEffect, useState} from "react";
import {getCategories, urlFor} from "../sanity.api";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(data => {
                setCategories(data)
            })
            .catch(err => alert(err))
    })

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-3"
        >
            {/* Category Card */}
            {categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}/>
            ))}
            {/* End Category Card */}
        </ScrollView>
    );
};

export default Categories;