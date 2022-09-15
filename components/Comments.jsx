import React, { useEffect, useState } from "react";
import moment from "moment";

import { getComments } from "../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(slug).then((result) => {
			setComments(result);
		});
	}, [comments]);

	return (
		<>
			{comments.length > 0 && (
				<div className="bg-gray-200 shadow-lg rounded-lg lg:p-8 lg:pb-12 lg:mb-8 p-4 pb-6 mb-4">
					<h3 className="text-md mb-4 font-semibold border-b border-gray-400 pb-2">
						{comments.length }{comments.length>1?" Comentários":" Comentário"} 
					</h3>
					{comments.map((comment, index) => (
						<div
							key={index}
							className="border-dotted border-b  border-gray-400 mb-2 pt-2"
						>
							<p className="mb-3 text-xs">
								<span className="text-sm font-semibold text-gray-700">
									{comment.author.node.name}
								</span>{" "}
								em {moment(comment.date).format("MMM DD, YYYY")}
							</p>
							<p
								className="text-gray-700 w-full text-sm mb-4"
								dangerouslySetInnerHTML={{
									__html: comment.content,
								}}
							></p>
							{comment.replies.nodes.length > 0 && (
								<div className=" bg-gray-100 border-gray-500 mb-4 ml-4 p-4">
									{comment.replies.nodes.map(
										(reply, index) => (
											<div
												key={index}
												className="border-b border-gray-100 mb-2 "
											>
												<p className="mb-2 text-xs text-gray-700">
													<span className="font-semibold">
														{reply.author.node.name}
													</span>{" "}
													em{" "}
													{moment(reply.date).format(
														"MMM DD, YYYY"
													)}
												</p>
												<p
													className=" text-gray-600 w-full text-sm"
													dangerouslySetInnerHTML={{
														__html: reply.content,
													}}
												></p>
											</div>
										)
									)}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
