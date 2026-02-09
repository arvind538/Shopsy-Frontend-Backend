import React from "react";

const productData = [
    { id: 1, title: "Smart Watch", price: "₹1999", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
    { id: 2, title: "Headphones", price: "₹1499", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 3, title: "Shoes", price: "₹2499", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 4, title: "Backpack", price: "₹999", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },

    { id: 5, title: "Laptop", price: "₹45999", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" },
    { id: 6, title: "Mobile Phone", price: "₹12999", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
    { id: 7, title: "Bluetooth Speaker", price: "₹2499", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
    { id: 8, title: "Gaming Mouse", price: "₹999", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500" },

    { id: 9, title: "Keyboard", price: "₹1499", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" },
    { id: 10, title: "LED Monitor", price: "₹8999", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
    { id: 11, title: "Camera", price: "₹25999", image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500" },
    { id: 12, title: "Power Bank", price: "₹1299", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500" },

    { id: 13, title: "Tablet", price: "₹18999", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500" },
    { id: 14, title: "Smart TV", price: "₹32999", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },
    {
        id: 15,
        title: "Printer",
        price: "₹7499",
        image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=500"
    },
    { id: 16, title: "Router", price: "₹1999", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500" },

    { id: 17, title: "External Hard Drive", price: "₹5499", image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500" },
    { id: 18, title: "USB Flash Drive", price: "₹499", image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=500" },
    { id: 19, title: "Fitness Band", price: "₹1799", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500" },
    { id: 20, title: "VR Headset", price: "₹6999", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500" },
];

const NewProducts = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
                Our Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productData.map((item) => (
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

export default NewProducts;
