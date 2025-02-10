import React from 'react'

function Product(props) {
  return (
    <>
    <div className="bg-gray-200 shadow-lg rounded-2xl p-4 w-80">
      <img
        src={props.product.product_image}
        alt={props.product.product_name}
        className="w-full h-48 object-contain rounded-xl"
      />
      <h2 className="text-lg font-semibold mt-2">{props.product.product_name}</h2>
      <div className="flex items-center mt-1">
        <span className="text-yellow-500 flex items-center">
          {/* {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < product.rating ? "#FACC15" : "#E5E7EB"} />
          ))} */}
        </span>
        <span className="text-gray-500 text-sm ml-2">{props.product.rating}</span>
      </div>
      <p className="text-gray-700 mt-1">{props.product.description}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-bold text-green-600">{props.product.price}</span>
          <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-full">
         -{props.product.offer_percentage}%
          </span>
      </div>
      <p className="text-sm text-gray-500">Battery:{props.product.battery_mh} mAh</p>
      <div className="flex gap-2 mt-2">
          {/* <span className="w-6 h-6 rounded-full border"
            style={{ backgroundColor: "red" }}></span> */}
        {props.product.color_available.map((color, index) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full border"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
        Buy Now
      </button>
    </div>
    </>
  )
}

export default Product