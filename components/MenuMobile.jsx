import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const MenuMobile = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);

    return (
        <div className=" text-end bg-white p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Menu Mobile
            </h3>
            {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                    <span
                        className={`cursor-pointer block ${
                            index === categories.length - 1
                                ? "border-b-0"
                                : "border-b"
                        } pb-3 mb-3`}
                    >
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default MenuMobile;