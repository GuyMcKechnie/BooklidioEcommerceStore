import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { MdFunctions, MdScience, MdBrush } from "react-icons/md";
import { TbWritingSign } from "react-icons/tb";

const ShopBySubject = () => {
    const subjects = [
        {
            subject: "Mathematics",
            icon: <MdFunctions size={180} />,
            href: "shop/mathematics",
        },
        {
            subject: "Science",
            icon: <MdScience size={180} />,
            href: "shop/science",
        },
        {
            subject: "English",
            icon: <TbWritingSign size={180} />,
            href: "shop/english",
        },
        {
            subject: "Art",
            icon: <MdBrush size={180} />,
            href: "shop/art",
        },
    ];

    return (
        <div id="grades" className="bg-white overflow-hidden py-16 px-6">
            <div>
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-col">
                    <h1 className="text-3xl pb-6 text-zinc-800 font-md">
                        Shop by Subject
                    </h1>
                    <div className="grid grid-cols-6  gap-4">
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md p-4 transition duration-300ms ease-in-out hover:scale-105"
                            >
                                <a href={subject.href} className="">
                                    <div className="text-red-900">
                                        {subject.icon}
                                    </div>
                                    <h1 className="text-2xl text-zinc-700 font-bold text-center">
                                        {subject.subject}
                                    </h1>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Mobile Menu */}
                <div>
                    <h1 className="text-3xl pb-6 text-zinc-800 font-md">
                        Shop by Subject
                    </h1>
                    <CCarousel caption className="md:hidden">
                        {subjects.map((subject, index) => (
                            <CCarouselItem key={index}>
                                <div className="flex flex-col justify-center items-center">
                                    <a
                                        href={subject.href}
                                        className="text-red-900"
                                    >
                                        {subject.icon}
                                    </a>
                                    <h1 className="text-zinc-700 text-3xl">
                                        {subject.subject}
                                    </h1>
                                </div>
                            </CCarouselItem>
                        ))}
                    </CCarousel>
                </div>
            </div>
        </div>
    );
};

export default ShopBySubject;
