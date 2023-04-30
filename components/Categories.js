import {Text, ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";
import {Suspense} from "react";


const Categories = () => {

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
            <CategoryCard imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/01/fastFoods1-1199461884-770x533-1.jpg" title="testing 1"/>
            <CategoryCard imgUrl="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" title="testing 2"/>
            <CategoryCard imgUrl="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" title="testing 3"/>
            <CategoryCard imgUrl="https://img.delicious.com.au/BeKyn8Dn/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png" title="testing 4"/>
            <CategoryCard imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2" title="testing 4"/>
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZi46hUxiQ8DDJ2ft29nMYZ1CQ8r-BVoMAMg&usqp=CAU" title="testing 4"/>
            <CategoryCard imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" title="testing 4"/>
        </ScrollView>
    );
};

export default Categories;