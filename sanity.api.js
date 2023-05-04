import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: "a269qp6h",
    useCdn: true,
    dataset: "production",
    apiVersion: "2023-05-03"
});

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
export const getFeatured = async() => {
    return await client.fetch('*[_type == "featured"] {...,restaurants[]->{...,dish[]->}}')
        .then((data) => {
            return data;
        });
}

export const getFeaturedListById = async(id) => {
    return await client.fetch(
        '*[_type == "featured" && _id == $id] {...,restaurants[]->{...,dish[]->, type-> { name }}}[0]',
        {id: id}
    ).then((data) => {
            return data;
        });
}

export const getCategories = async() => {
    return await client.fetch(
        '*[_type == "category" ]'
    ).then((data) => {
            return data;
        });
}
export default client;