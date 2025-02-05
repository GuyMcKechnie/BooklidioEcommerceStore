import { Button, Input } from "@relume_io/relume-ui";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import { useState } from "react";

const Footer = (props) => {
    const {
        logo,
        newsletterDescription,
        inputPlaceholder,
        columnLinks,
        footerText,
        footerLinks,
    } = {
        ...FooterDefaults,
        ...props,
    };

    const [emailInput, setEmailInput] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <footer className="px-[5%] py-12 md:py-18 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
                    <div className="flex flex-col">
                        <a
                            href={logo.url}
                            className="mb-5 text-2xl font-semibold md:mb-6 text-primary font-heading"
                        >
                            Booklidio
                        </a>
                        <p className="mb-5 md:mb-6 text-text font-body">
                            {newsletterDescription}
                        </p>
                        <div className="w-full max-w-md">
                            <form
                                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={inputPlaceholder}
                                    value={emailInput}
                                    onChange={(e) =>
                                        setEmailInput(e.target.value)
                                    }
                                    className="rounded-lg text-text font-body"
                                />
                                <Button className="rounded-lg font-body text-text">
                                    Subscribe
                                </Button>
                            </form>
                            <div>
                                <p className="text-xs font-body">
                                    By subscribing you agree to with our{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="underline"
                                    >
                                        Privacy Policy
                                    </a>{" "}
                                    and provide consent to receive updates from
                                    Booklidio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid items-start grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
                        {columnLinks.map((column, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start justify-start"
                            >
                                <h2 className="mb-3 font-semibold md:mb-4 font-heading">
                                    {column.title}
                                </h2>
                                <ul>
                                    {column.links.map((link, linkIndex) => (
                                        <li
                                            key={linkIndex}
                                            className="py-2 text-sm font-body"
                                        >
                                            <a
                                                href={link.url}
                                                className="flex items-center gap-3"
                                            >
                                                {link.icon && (
                                                    <span>{link.icon}</span>
                                                )}
                                                <span>{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-px bg-black" />
                <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm font-body md:flex-row md:items-center md:pb-0 md:pt-8">
                    <p className="mt-6 text-center md:mt-0">{footerText}</p>
                </div>
            </div>
        </footer>
    );
};

export const FooterDefaults = {
    logo: {
        url: "/",
    },
    newsletterDescription:
        "Join our newsletter to receive updates on new textbooks, promotions, and more.",
    inputPlaceholder: "Enter your email",
    columnLinks: [
        {
            title: "For You",
            links: [
                { title: "FAQ", url: "/faq" },
                { title: "Trading Process", url: "/trading-process" },
                { title: "Shipping Information", url: "/shipping-information" },
                { title: "Orders", url: "/orders" },
                { title: "Account", url: "/account" },
            ],
        },
        {
            title: "About Us",
            links: [
                { title: "Privacy Policy", url: "/privacy-policy" },
                { title: "Terms of Service", url: "/terms-of-service" },
                { title: "Returns Policy", url: "/returns-policy" },
                { title: "Cookies Settings", url: "/cookies-settings" },
                { title: "Our Company", url: "/about-us" },
            ],
        },
        {
            title: "Follow Us",
            links: [
                {
                    title: "Facebook",
                    url: "/https://www.facebook.com/Booklidio",
                    icon: <BiLogoFacebookCircle className="size-6" />,
                },
                {
                    title: "Instagram",
                    url: "https://www.instagram.com/booklidio/",
                    icon: <BiLogoInstagram className="size-6" />,
                },
            ],
        },
    ],
    footerText: "© 2025 Booklidio. All rights reserved.",
};

export default Footer;
