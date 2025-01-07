import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const SellFeature = (props) => {
    const { tagline, heading, description, buttons, image } = {
        ...Layout192Defaults,
        ...props,
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-100">
            <div className="container">
                <div className="grid grid-cols-1 text-text gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <img
                            src={image.src}
                            className="object-cover size-full md:max-w-md lg:max-w-lg"
                            alt={image.alt}
                        />
                    </div>
                    <div>
                        <p className="mb-3 font-semibold uppercase md:mb-4 font-heading opacity-70">
                            {tagline}
                        </p>
                        <h1 className="mb-5 text-2xl font-bold rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                            {heading}
                        </h1>
                        <p className="md:text-md font-body text-text">
                            {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    {...button}
                                    className="px-4 py-2 text-xl text-white border-none rounded-lg font-heading bg-primary"
                                >
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Layout192Defaults = {
    tagline: "Selling Made Easy",
    heading: "Make Money Selling Textbooks with Booklidio",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [
        { title: "Sell Now", variant: "secondary" },
        {
            title: "Contact Us",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
        },
    ],
    image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
    },
};

export default SellFeature;