import React from 'react'

const Home = () => {
    return(
        <div>
            <h1 class="text-4xl font-medium text-slate-800 text-center mb-2 font-poppins ">New Arrivals</h1>
            <p class="text-slate-600 mb-10 font-poppins text-center">Explore the latest additions to our collection.</p>
            <section class="flex flex-wrap items-center justify-center gap-6 m-10 ">
                <a href="#" class='group w-56'>
                    <img class='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top' src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop" alt="image"/>
                        <p class='text-sm mt-2'>White crew-Neck T-Shirt</p>
                    <p class='text-xl'>$ 29.00</p>
                    <div class="flex items-center gap-3 mt-5">
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer"/>
                                <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                                <span class="text-gray-700 select-none">XS</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer"/>
                                <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                                <span class="text-gray-700 select-none">S</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer"/>
                                <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                                <span class="text-gray-700 select-none">M</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer"/>
                                <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                                <span class="text-gray-700 select-none">L</span>
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3 none">
                        <button class="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button class="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                
                </a>
                <a href="#" class='group w-56'>
                    <img class='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop" alt="image"/>
                        <p class='text-sm mt-2'>White crew-Neck T-Shirt</p>
                    <p class='text-xl'>$ 39.00</p>
                    <div class="flex items-center gap-3 mt-5">
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">XS</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">S</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">M</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">L</span>
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <button class="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button class="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </a>
                <a href="#" class='group w-56'>
                    <img class='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop" alt="image"/>
                        <p class='text-sm mt-2'>White crew-Neck T-Shirt</p>
                    <p class='text-xl'>$ 29.00</p>
                    <div class="flex items-center gap-3 mt-5">
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">XS</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">S</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">M</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">L</span>
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <button class="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button class="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </a>
                <a href="#" class='group w-56'>
                    <img class='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop" alt="image"/>
                        <p class='text-sm mt-2'>White crew-Neck T-Shirt</p>
                    <p class='text-xl'>$ 49.00</p>
                    <div class="flex items-center gap-3 mt-5">
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">XS</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">S</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">M</span>
                        </label>
                        <label class="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer" />
                            <span class="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span class="text-gray-700 select-none">L</span>
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <button class="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button class="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </a>
            </section>

            

           
          
    
    </div>
  )
}

export default Home
