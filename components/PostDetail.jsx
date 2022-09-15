/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import moment from "moment";

const PostDetail = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>;
    }
	return (
		<>
			<div className="bg-white shadow-lg rounded-lg lg:p-8 lg:pb-12 pb-4 lg:mb-8 mb-2">
				<div className="relative overflow-hidden w-full h-[60vw] md:h-[40vw] lg:h-[50vh] 2xl:h-[60vh] shadow-md lg:mb-6 mb-2">
					<Image
						src={post.featuredImage.node.sourceUrl}
						alt={post.title}
						className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                        layout="fill"
					/>
				</div>
				<div className="px-2 lg:px-0">
					<div className="flex justify-between items-center lg:mb-8 mb-4 w-full lg:px-4">
						<div className="md:flex flex items-center lg:justify-start lg:mb-0 lg:w-auto mr-8">
							<span className="flex flex-shrink-0 lg:flex-shrink relative h-6 w-6 lg:h-[30px] lg:w-[30px] ">
                                <Image
                                    alt={post.author.node.name}
                                    layout="fill"
                                    className="rounded-full object-cover"
                                    src={
                                        post.author.node.mediaItems.nodes[0]
                                            .sourceUrl
                                    }
                                />
                            </span>
							<p className="inline align-middle text-gray-700 ml-2 font-medium lg:text-xs text-[0.6rem]">
								{post.author.node.name}
							</p>
						</div>
						<div className="font-medium text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 inline mr-2 text-pink-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<p className="inline align-middle text-gray-700 font-medium lg:text-xs text-[0.6rem]">
								{moment(post.date).format("MMM DD, YYYY")}
							</p>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-4">
					<h1 className="lg:mb-8 mb-2 text-center lg:text-3xl text-lg font-semibold">
						{post.title}
					</h1>
					<p
						className="text-justify text-sm lg:text-lg text-gray-700 mb-2 mt-4 lg:mb-8 lg:mt-4"
						dangerouslySetInnerHTML={{ __html: post.content }}
					></p>
				</div>
			</div>
		</>
	);
};

export default PostDetail;
