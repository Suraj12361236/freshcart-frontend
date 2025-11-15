import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { useLocation } from "react-router-dom";
import { ShoppingBag, Heart, RefreshCcw } from 'lucide-react';
import { Share2 } from "lucide-react";
import { Star, ChevronDown, ThumbsUp, Flag } from "lucide-react";
import namkeen from "../images/product-img-1.jpg"
import biscuit from "../images/product-img-2.jpg"
import chocolate from "../images/product-img-3.jpg"
import axios from "axios";
import Swal from "sweetalert2";


function ProductDetailsPage() {
    let loc = useLocation()
    let relateditems = loc.state.filterdata
    let onlyitems = relateditems.slice(0, 4)


    const [activeTab, setActiveTab] = useState("Product Details");
    const tabs = ["Product Details", "Information", "Reviews", "Seller Info"];




    let wishlist = (wishlistitem) => {
        axios.post("https://freshcart-backend-umber.vercel.app/wishlist", { wishlistitem }).then((res) => {
            if (res.data.status) {
                Swal.fire({
                    text: "Product added to wishlist",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    text: "failed to added product wishlist",

                });
            }
        })
    }



    // add to cart 


    let addtocart = (cartitem) => {
        axios.post("https://freshcart-backend-umber.vercel.app/addtocart", { cartitem }).then((res) => {
            if (res.data.status) {
                Swal.fire({
                    text: "Product added to cart",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    text: "failed to Product added to cart",

                });
            }
        })
    }

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <img
                            src={loc.state.productdetails.productimage}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />

                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{loc.state.productdetails.title}</h1>
                        <p style={{ fontSize: '18px', color: 'green', marginBottom: '10px' }}>
                            ${loc.state.productdetails.saleprice} <span style={{ textDecoration: 'line-through', color: 'gray' }}>${loc.state.productdetails.regularprice}</span>
                        </p>
                        <p style={{ marginBottom: '20px' }}>{loc.state.productdetails.descriptions}</p>
                        <div className="flex items-center space-x-4 mt-4">


                            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700" onClick={()=>addtocart(loc.state.productdetails)}>
                                <ShoppingBag size={20} /> Add to cart
                            </button>


                            <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                                <RefreshCcw size={18} />
                            </button>


                            <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200" onClick={() => wishlist(loc.state.productdetails)}>
                                <Heart size={18} />
                            </button>
                        </div>
                        <div className="mt-6 border-t pt-4 text-gray-700">
                            <div className="space-y-2">
                                <div className="flex justify-between max-w-md">
                                    <p className="font-semibold">Product Code:</p>
                                    <p>FBB00255</p>
                                </div>

                                <div className="flex justify-between max-w-md">
                                    <p className="font-semibold">Availability:</p>
                                    <p>In Stock</p>
                                </div>

                                <div className="flex justify-between max-w-md">
                                    <p className="font-semibold">Type:</p>
                                    <p>Fruits</p>
                                </div>

                                <div className="flex justify-between max-w-md">
                                    <p className="font-semibold">Shipping:</p>
                                    <p>
                                        01 day shipping.{" "}
                                        <span className="text-gray-500">(Free pickup today)</span>
                                    </p>
                                </div>
                            </div>

                            <button className="mt-5 flex items-center gap-2 border rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <Share2 size={18} />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-16 mt-10 text-gray-700">
                <div className="border-b">
                    <div className="flex space-x-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-base font-medium ${activeTab === tab
                                    ? "text-green-600 border-b-2 border-green-600"
                                    : "text-gray-600 hover:text-green-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    {activeTab === "Product Details" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Nutrient Value & Benefits</h2>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum
                                in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                                habitant ornare ac rhoncus.
                            </p>

                            <h3 className="text-xl font-semibold mb-2">Storage Tips</h3>
                            <p className="mb-5">
                                Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis
                                eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus.
                            </p>

                            <h3 className="text-xl font-semibold mb-2">Unit</h3>
                            <p className="mb-5">3 units</p>

                            <h3 className="text-xl font-semibold mb-2">Seller</h3>
                            <p className="mb-5">DMart Pvt. LTD</p>

                            <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
                            <p>
                                Image shown is a representation and may slightly vary from the actual product. Every effort
                                is made to maintain accuracy of all information displayed.
                            </p>
                        </div>
                    )}

                    {activeTab === "Information" && (
                        <div className="px-28 py-10">
                            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Details</h2>

                            <div className="flex flex-wrap justify-between w-full max-w-[1600px]">
                                <div className="flex flex-col space-y-4 w-[48%]">
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Weight</span>
                                        <span className="text-gray-600">1000 Grams</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Ingredient Type</span>
                                        <span className="text-gray-600">Vegetarian</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Brand</span>
                                        <span className="text-gray-600">Dmart</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">
                                            Item Package Quantity
                                        </span>
                                        <span className="text-gray-600">1</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Form</span>
                                        <span className="text-gray-600">Larry the Bird</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Manufacturer</span>
                                        <span className="text-gray-600">Dmart</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Net Quantity</span>
                                        <span className="text-gray-600">340.0 Gram</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">
                                            Product Dimensions
                                        </span>
                                        <span className="text-gray-600">9.6 × 7.49 × 18.49 cm</span>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-4 w-[48%]">
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">ASIN</span>
                                        <span className="text-gray-600">SB0025UJ75W</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Best Sellers Rank</span>
                                        <span className="text-gray-600">#2 in Fruits</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">
                                            Date First Available
                                        </span>
                                        <span className="text-gray-600">30 April 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Item Weight</span>
                                        <span className="text-gray-600">500g</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-100 p-5">
                                        <span className="font-medium text-gray-700">Generic Name</span>
                                        <span className="text-gray-600">Banana Robusta</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Reviews" && (
                        <div className="px-20 py-10 bg-white text-gray-800 flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-semibold">Customer reviews</h2>
                            </div>

                            <div className="flex justify-between w-full gap-12">
                                <div className="w-1/3">
                                    <div className="flex items-center mb-3">
                                        <div className="flex text-yellow-400">
                                            {[...Array(4)].map((_, i) => (
                                                <Star key={i} fill="currentColor" size={20} />
                                            ))}
                                            <Star size={20} />
                                        </div>
                                        <span className="ml-2 text-lg font-medium">4.1 out of 5</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-6">11,130 global ratings</p>

                                    {[
                                        { label: "5", value: 53 },
                                        { label: "4", value: 22 },
                                        { label: "3", value: 14 },
                                        { label: "2", value: 5 },
                                        { label: "1", value: 7 },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center mb-2">
                                            <span className="w-4 text-sm">{item.label}</span>
                                            <Star className="text-yellow-400 w-4 h-4 mx-1" fill="currentColor" />
                                            <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                                <div
                                                    className="bg-yellow-400 h-2 rounded-full"
                                                    style={{ width: `${item.value}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-600">{item.value}%</span>
                                        </div>
                                    ))}

                                    <div className="mt-10">
                                        <h3 className="text-lg font-semibold mb-2">Review this product</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Share your thoughts with other customers.
                                        </p>
                                        <button className="border border-gray-300 rounded-md px-6 py-2 text-gray-700 hover:bg-gray-50">
                                            Write the Review
                                        </button>
                                    </div>
                                </div>

                                <div className="w-2/3">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-semibold">Reviews</h2>
                                        <button className="flex items-center border border-gray-300 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                                            Top Reviews <ChevronDown size={16} className="ml-1" />
                                        </button>
                                    </div>

                                    {[
                                        {
                                            name: "Shankar Subbaraman",
                                            date: "30 December 2022",
                                            status: "Verified Purchase",
                                            verified: true,
                                            rating: 5,
                                            title: "Need to recheck the weight at delivery point",
                                            desc: "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc.",
                                            images: [
                                                namkeen,
                                                biscuit,
                                                chocolate,
                                            ],
                                        },
                                        {
                                            name: "Robert Thomas",
                                            date: "29 December 2022",
                                            status: "Verified Purchase",
                                            verified: true,
                                            rating: 4,
                                            title: "Need to recheck the weight at delivery point",
                                            desc: "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc.",
                                            images: [],
                                        },
                                        {
                                            name: "Barbara Tay",
                                            date: "28 December 2022",
                                            status: "Unverified Purchase",
                                            verified: false,
                                            rating: 4,
                                            title: "Need to recheck the weight at delivery point",
                                            desc: "Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it, its happens very rare that u get over riped ones.",
                                            images: [],
                                        },
                                    ].map((review, i) => (
                                        <div key={i} className="pb-6 mb-6 border-b border-gray-200">
                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={`https://i.pravatar.cc/60?img=${i + 1}`}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-semibold">{review.name}</h4>
                                                            <p className="text-sm text-gray-500">
                                                                {review.date}{" "}
                                                                <span
                                                                    className={`ml-2 text-sm font-semibold ${review.verified
                                                                        ? "text-green-600"
                                                                        : "text-red-500"
                                                                        }`}
                                                                >
                                                                    {review.status}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center mt-2 text-yellow-400">
                                                        {[...Array(review.rating)].map((_, j) => (
                                                            <Star key={j} fill="currentColor" size={18} />
                                                        ))}
                                                    </div>

                                                    <h5 className="font-semibold mt-2 text-gray-800">
                                                        {review.title}
                                                    </h5>
                                                    <p className="text-gray-600 mt-2 text-sm">{review.desc}</p>

                                                    {/* Images */}
                                                    {review.images.length > 0 && (
                                                        <div className="flex gap-2 mt-3">
                                                            {review.images.map((img, j) => (
                                                                <img
                                                                    key={j}
                                                                    src={img}
                                                                    alt="Review"
                                                                    className="w-16 h-16 rounded-md object-cover border"
                                                                />
                                                            ))}
                                                        </div>
                                                    )}

                                                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                                        <button className="flex items-center gap-1 hover:text-gray-700">
                                                            <ThumbsUp size={16} /> Helpful
                                                        </button>
                                                        <button className="flex items-center gap-1 hover:text-gray-700">
                                                            <Flag size={16} /> Report abuse
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Seller Info" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Seller Information</h2>
                            <p>Sold by DMart Pvt. LTD, verified and trusted seller with 4.8★ rating.</p>
                        </div>
                    )}
                </div>
            </div>


            <h1 className="related-h"><b>Related items</b></h1>
            <div className="grid">
                {onlyitems.map((item) => {
                    return (
                        <>
                            <div className="product-card" key={item.id}>

                                <img className="product-img" src={item.productimage} alt={item.title} />

                                <p className="category">{item.category}</p>
                                <h3 className="product-title">{item.title}</h3>

                                <div className="price">
                                    <span className="current">${item.saleprice}</span>
                                    {item.regularprice && <span className="old">${item.regularprice}</span>}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <Footer />
        </>

    );
};

export default ProductDetailsPage;