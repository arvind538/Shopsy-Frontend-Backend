import React from "react";

const electronicsData = [
    {
        id: 1,
        title: "Smart Watch",
        price: "₹1999",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
        id: 2,
        title: "Headphones",
        price: "₹1499",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
        id: 3,
        title: "Laptop",
        price: "₹45999",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
    {
        id: 4,
        title: "Mobile Phone",
        price: "₹12999",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
        id: 5,
        title: "Bluetooth Speaker",
        price: "₹2499",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    },
    {
        id: 6,
        title: "Gaming Mouse",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    },
    {
        id: 7,
        title: "Keyboard",
        price: "₹1499",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
    {
        id: 8,
        title: "LED Monitor",
        price: "₹8999",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    },
];

const Electronics = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-4">
                Electronics Products
            </h2>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our latest electronic products including smart gadgets,
                accessories, and devices. We offer high-quality electronics at the best
                prices with fast delivery and secure shopping.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {electronicsData.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-xl p-4 shadow hover:shadow-lg transition"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-3">
                            {item.title}
                        </h3>
                        <p className="text-orange-500 font-bold">
                            {item.price}
                        </p>

                        <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Electronics;
