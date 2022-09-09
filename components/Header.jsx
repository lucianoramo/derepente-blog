/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import MenuMobile from "./MenuMobile";

import { getCategories } from "../services";

const Header = () => {
    
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (categories) {
			getCategories().then((newCategories) => {
				setCategories(newCategories);
			});
		}
	}, [categories]);

	console.log("Header => categories", categories);

	return (
		<div className="container mx-auto px-4 lg:px-10 mb-8">
			<div className="flex border-b w-full justify-between items-center border-aut-green py-2">
				<div className="relative md:float-left block w-[110px] h-[80px] lg:w-[220px] lg:h-[160px] mouse-pointer">
					<Link href="/">
						<Image
							src="https://www.derepenteautista.com.br/wp-content/uploads/2016/08/Logo.png"
							className=""
							layout="fill"
						></Image>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents lg:flex justify-end">
					{categories.map((category) => (
						<Link
							href={`/category/${category.slug}`}
							key={category.slug}
						>
							<span className="md:float-right mt-2 align-middle text-gray-700 ml-4 font-semibold cursor-pointer">
								{category.name}
							</span>
						</Link>
					))}
				</div>
				<div className="md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>

					{/* <MenuMobile className="menu-mobile lg:hidden z-50" /> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
