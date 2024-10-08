import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 mb-5 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl">
  <figure>
    <img className='w-full h-48 object-cover'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white px-2 py-1 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
