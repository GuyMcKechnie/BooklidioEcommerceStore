import { BiSolidStar } from "react-icons/bi";

const Testimonials = (props) => {
    const { testimonials } = {
        ...TestimonialDefaults,
        ...props,
    };
    return (
        <section className="px-[5%] py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="w-full mx-auto mb-12 text-center md:mb-18 lg:mb-20 text-text">
                    <h1 className="mb-5 text-2xl font-bold rb-5 md:mb-6 md:text-5xl font-heading">
                        Find Out What Our Customers Say
                    </h1>
                    <p className="md:text-md font-body">
                        You are the priority. For the people, from the people.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start justify-start w-full p-6 md:p-8"
                        >
                            <div className="flex items-center w-full gap-4 mb-4 md:w-fit">
                                <p className="text-lg font-semibold font-heading text-nowrap">
                                    {testimonial.name}
                                </p>
                                <div className="flex">
                                    {Array(testimonial.numberOfStars)
                                        .fill(null)
                                        .map((_, starIndex) => (
                                            <BiSolidStar
                                                key={starIndex}
                                                className="mr-1 text-yellow-500 size-6 md:size-4"
                                            />
                                        ))}
                                </div>
                            </div>
                            <blockquote className="md:text-md text-text font-body">
                                {testimonial.quote}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TestimonialDefaults = {
    testimonials: [
        {
            quote: "Booklidio has been a life saver! The amount of money that I've gotten back from selling my old textbooks is crazy. The process is simple and you get paid quickly.",
            name: "Themba Molefe",
            information: "30+ Textbooks Sold",
            numberOfStars: 5,
        },
        {
            quote: "I've bought countless textbooks using Booklidio and the service never disappoints. The textbooks are always of good quality and the savings are unbelievable.",
            name: "Roshaan Naidoo",
            information: "R2,100+ Saved",
            numberOfStars: 4,
        },
        {
            quote: "I have been using Booklidio since the beginning and I have never had an issue with their service delivery. They are faster than most other textbook retailers.",
            name: "Siyabonga Mkhize",
            information: "3 Year Customer",
            numberOfStars: 5,
        },
    ],
};

export default Testimonials;
