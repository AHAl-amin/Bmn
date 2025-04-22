


import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Subscribsion = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const monthlyPlans = [
        {
            name: "BASIC",
            price: "$69",
            period: "/month",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
            ],
        },
        {
            name: "Premium",
            price: "$79",
            period: "/month",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
            ],
        },
        {
            name: "Annual Premium",
            price: "$99",
            period: "/month",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
            ],
        },
    ];

    const yearlyPlans = [
        {
            name: "STARTER",
            price: "$599",
            period: "/year",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "Priority Support",
                "Use with Unlimited Projects",
                "All UI Components",
                "Use with Unlimited Projects",
            ],
        },
        {
            name: "BUSINESS",
            price: "$699",
            period: "/year",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "Priority Support",
                "Advanced Analytics",
                "All UI Components",
                "Advanced Analytics",
            ],
        },
        {
            name: "ENTERPRISE",
            price: "$899",
            period: "/year",
            features: [
                "All UI Components",
                "Use with Unlimited Projects",
                "24/7 Premium Support",
                "Advanced Analytics",
                "Custom Integrations",
                "Advanced Analytics",
            ],
        },
    ];

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
        },
        exit: { y: -50, opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
    };

    return (
        <div id="pricing" className="w-full py-8 px-4 md:px-4 md:pt-28 relative">
            <div className="w-full absolute top-0">
                {/* Header Section */}
                <div className="text-center mb-6 md:mb-12">
                    <h3 className="text-[#2D4162] font-medium mb-2 text-sm md:text-2xl">
                        Our Powerful Features
                    </h3>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#004C3F] mb-3 md:mb-4">
                    Choose your subscription
                    </h1>
                    <p className="text-gray-600 max-w-full md:max-w-2xl mx-auto text-xs md:text-base">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                    </p>
                </div>

                {/* Toggle Switch */}
           

                {/* Pricing Cards Container */}
                <div className="">
                    <AnimatePresence mode="wait">
                        {billingCycle === "monthly" ? (
                            <motion.div
                                key="monthly"
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full justify-items-center"
                                variants={cardContainerVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                {monthlyPlans.map((plan, index) => (
                                    <motion.div
                                        key={`monthly-${index}`}
                                        className="bg-white rounded-3xl shadow-lg overflow-hidden   flex flex-col"
                                        variants={cardVariants}
                                    >
                                        <div className="p-4 md:p-8 flex flex-col flex-grow">
                                            <h2 className="text-lg md:text-2xl font-bold text-slate-800 mb-4 md:mb-8 text-center">
                                                {plan.name}
                                            </h2>
                                            <div className="md:p-8 text-gray-900 md:mb-8">
                                                <div className="flex items-baseline justify-start">
                                                    <span className="md:text-5xl md:font-bold">{plan.price}</span>
                                                    <span className="md:text-xl ml-2">{plan.period}</span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 md:space-y-4 flex-grow">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center">
                                                        <Check className="h-4 w-4 md:h-5 md:w-5 p-[2px] md:p-[3px] rounded-full bg-gray-200 text-blue-600 mr-2" />
                                                        <span className="text-slate-700 text-xs md:text-base">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button className="mt-4 md:mt-8 w-full bg-[#004C3F]  text-white py-2 md:py-3 px-4 md:px-6 rounded-full font-medium flex items-center justify-center transition-colors duration-300 text-sm md:text-base cursor-pointer">
                                                Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="yearly"
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full justify-items-center"
                                variants={cardContainerVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                {yearlyPlans.map((plan, index) => (
                                    <motion.div
                                        key={`yearly-${index}`}
                                        className="bg-white rounded-3xl shadow-lg overflow-hidden  flex flex-col"
                                        variants={cardVariants}
                                    >
                                        <div className="p-4 md:p-8 flex flex-col flex-grow">
                                            <h2 className="text-lg md:text-2xl font-bold text-slate-800 mb-4 md:mb-8 text-center">
                                                {plan.name}
                                            </h2>
                                            <div className="md:p-8 text-gray-900 md:mb-8">
                                                <div className="flex items-baseline justify-start">
                                                    <span className="md:text-5xl md:font-bold">{plan.price}</span>
                                                    <span className="md:text-xl ml-2">{plan.period}</span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 md:space-y-4 flex-grow">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center">
                                                        <Check className="h-4 w-4 md:h-5 md:w-5 p-[2px] md:p-[3px] rounded-full bg-gray-200 text-blue-600 mr-2" />
                                                        <span className="text-slate-700 text-xs md:text-base">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button className="mt-4 md:mt-8 w-full bg-[#004C3F] text-white py-2 md:py-3 px-4 md:px-6 rounded-full font-medium flex items-center justify-center transition-colors duration-300 text-sm md:text-base cursor-pointer">
                                                Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Subscribsion;