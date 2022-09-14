/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Loader, Comments } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import{ErrorPage} from "next/error"
// import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
   
    const router = useRouter();

 if (!post || router.isFallback) {
        return <Loader />;
    }

    return (
        <>
            <div className="container mx-auto px-4 mb- 8 lg:px-10  lg:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-0">
                    <div className="col-span-1 lg:col-span-8">
                        <PostDetail post={post} />
                        {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
<CommentsForm slug={post.slug} />*/}
                        <Comments slug={post.slug} /> 
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <PostWidget id={post.postId} slug= {post.slug} categories={post.categories.nodes.map((category) => category.id)} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data || null,
        },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.map((post) => ({
        params: { slug: post.slug },

    }));
    console.log("getStaticPaths => paths", paths)
    return {
        paths: paths,
        fallback: true,
    };
}