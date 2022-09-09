/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>;
    }
	return (
		<div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-8 lg:pb-12 mb-4 lg:mb-8">
			<div className="relative overflow-hidden bg-gray-50  rounded-t-lg shadow-md lg:mb-6 mb-4">
				<div className="flex justify-items-start py-4">
					<div className="flex justify-items-start items-center text-gray-600 lg:text-lg text-xs pl-4 mr-4 font-semibold">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="lg:w-6 lg:h-6 w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<p className="pl-2">{post.author.node.name}</p>
					</div>
					<div className="flex justify-items-start text-gray-600 items-center lg:text-lg text-xs ml-2 italic">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="lg:w-6 lg:h-6 w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
							/>
						</svg>
						<p className="pl-2">
							{moment(post.date).format("DD/MM/YYYY")}
						</p>
					</div>
				</div>
				<div className="relative object-top lg:h-[36rem] h-[60vw] w-full shadow-lg  lg:rounded-lg">
					<Image
                        className="object-cover h-full "
						src={post.featuredImage.node.sourceUrl}
						layout="fill"
					/>
				</div>
			</div>
			<h1 className="transition duration-700 text-center text-gray-600 lg:mb-4 mb-2 cursor-pointer hover:text-aut-yellow lg:text-3xl text-lg font-semibold">
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h1>
			<div
				className="text-center lg:px-8 px-4 text-sm lg:text-lg text-gray-700 mb-4 mt-4 lg:mb-8 lg:mt-4"
				dangerouslySetInnerHTML={toMarkup(post.excerpt)}
			></div>
			<div className="text-center">
				<Link href={`/post/${post.slug}`}>
					<span className="transition duration-500 cursor-pointer hover:bg-auto-yellow hover:opacity-75 inline-block bg-aut-yellow text-white rounded-full text-sm lg:text-lg lg:px-8 lg:py-3 px-4 py-2">
						Ler mais
					</span>
				</Link>
			</div>
		</div>
	);
};
const toMarkup = (content) => {
	return { __html: content };
};
export default PostCard;
