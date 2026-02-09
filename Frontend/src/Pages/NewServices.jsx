import React, { useEffect } from "react";
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewServices = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const handleBack = () => {
            navigate("/service");
        };

        window.addEventListener("popstate", handleBack);

        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, [navigate]);

    const handlePayment = () => {
        window.location.href =
            "https://buy.stripe.com/test_7sY9AU0BncOU8jqc4A9fW00";
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
            <h2 className="text-center text-3xl font-bold mb-10">
                Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="p-6 border rounded-xl shadow text-center">
                    <FaShippingFast className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Fast Delivery</h3>
                </div>

                <div className="p-6 border rounded-xl shadow text-center">
                    <FaHeadset className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>24/7 Support</h3>
                </div>

                <div className="p-6 border rounded-xl shadow text-center">
                    <FaUndo className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Easy Returns</h3>
                </div>

                <div
                    onClick={handlePayment}
                    className="p-6 border rounded-xl shadow text-center cursor-pointer"
                >
                    <FaLock className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Secure Payment</h3>
                </div>

            </div>
        </div>
    );
};

export default NewServices;
