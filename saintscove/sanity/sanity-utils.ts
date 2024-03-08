import { createClient } from "next-sanity";
import { Blog } from "../types/Blogs";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: 'bqz1l84d',
    dataset: 'production',
    apiVersion: '2024-02-21',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export async function getBlogs(): Promise<Blog[]> {
    const query = `*[_type == "blog"]{
        _id, 
        _createdAt,
        name,
        description,
        'slug': slug.current,
        image,
        url, 
        content}`;
    const response = await client.fetch(query);
    return response;
}

export async function getBlog(slug:string): Promise<Blog> {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        name,
        description,
        'slug': slug.current,
        image,
        url, 
        content}`;
    const params = {slug}
    const response = await client.fetch(query ,params);
    return response;
}
 

export function urlFor(source: any) {
    if (source && source.asset && source.asset._ref) {
        return builder.image(source).url();
    }
    return '';
}