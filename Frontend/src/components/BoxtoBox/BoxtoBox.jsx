import React from 'react'

const BoxtoBox = () => {
  return (
    <div>
        
          <h1 class="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
          <p class="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
              each piece crafted with intention, emotion, and style.</p>

          <div class="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
              <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                  <img class="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"/>
                      <div
                          class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h1 class="text-3xl">Prompt engineers</h1>
                          <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                      </div>
              </div>
              <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                  <img class="h-full w-full object-cover object-right"
                      src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"/>
                      <div
                          class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h1 class="text-3xl">Data scientists</h1>
                          <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                      </div>
              </div>
              <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                  <img class="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"/>
                      <div
                          class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h1 class="text-3xl">Software engineers</h1>
                          <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                      </div>
              </div>
          </div>
    </div>
  )
}

export default BoxtoBox
