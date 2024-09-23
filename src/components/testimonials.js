import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const testimonials = [
    {
        name: "Mr. Hadahama",
        location: "NMDC quaters, Jos",
        text: "The team at Jatto Constructions was amazing! Their attention to detail and commitment to good services is very satisfactory.",
        image: 'https://via.placeholder.com/150/0000FF/808080?text=Hadahama'
    },
    {
        name: "Mr. Michael",
        location: "After PTS, Jos",
        text: "Superb! work on my varanda handrails. Highly recommend their services!",
        image: 'https://via.placeholder.com/150/0000FF/808080?text=Michael'
    },
    {
        name: "Timothy",
        location: "Elcortex, Jos",
        text: "Professional and timely service! The windows look incredible and the whole process was fast and on time.",
        image: 'https://via.placeholder.com/150/0000FF/808080?text=Timothy'
    },
];
export default function Testimonials() {
    return (_jsx("section", { className: "relaive py-8", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold text-center bg-gray-800 rounded-lg p-5 my-12 text-white", children: "What Our Clients Say" }), _jsx("div", { className: "flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible scrollbar-hide", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "min-w-[300px] md:min-w-0 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 transition-all ease-in", style: {
                            backgroundImage: `url('/images/testimonial-bg.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-70 rounded-lg" }), _jsxs("div", { className: "relative z-10 text-center", children: [_jsx("img", { src: testimonial.image, alt: `${testimonial.name} profile`, className: "w-30 h-30 rounded-full mx-auto mb-6 border-4 border-gray-300 object-cover" }), _jsx("h3", { className: "text-xl font-semibold text-gray-100", children: testimonial.name }), _jsx("p", { className: "text-gray-400 mb-4", children: testimonial.location }), _jsx("p", { className: "text-gray-300 text-xl line-clamp-5 ", children: testimonial.text })] })] }, index))) })] }) }));
}
