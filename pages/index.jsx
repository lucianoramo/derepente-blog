/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import { PostWidget, Categories, PostCard } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
	if (!posts.length) {
		return <div>No posts found</div>;
	}
	return (
		<div className="container mx-auto px-4 lg:px-10 mb-8">
			<Head>
				<title>De repente autista</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-0">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post) => (
						<PostCard post={post} key={post.title} />
					))}
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget id={null} categories={null} slug={null} />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
}
export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: { posts },
	};
}
