import React from 'react'

function Home() {
  return (
    <div className='mx-auto pt-20 lg:pt-36 pb-36 px-8 lg:px-36 grid lg:grid-cols-3 gap-x-36 gap-y-16 text-slate-900'>
        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>Latest News</p>
            <div className='text-center'>
                <p className='mb-3 font-bold'>Try saying :</p>
                <p>Give me some Latest News, give me the latest news, show me some news</p>
            </div>
        </div>

        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>News by Country</p>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Countries :</p>
                <p>India, US, UK</p>
            </div>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Try saying :</p>
                <p><span className='font-bold'>Your Country</span>'s latest news</p>
            </div>
        </div>

        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>News by Category</p>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Categories :</p>
                <p>Technology, Business, Health, General, Entertainment, Science, Sports</p>
            </div>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Try saying :</p>
                <p>Give me the latest <span className='font-bold'>`Your Category`</span> news</p>
            </div>
        </div>

        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>News by Terms</p>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Terms : </p>
                <p>Bitcoin, Playstation 5, Smartphones</p>
            </div>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Try saying :</p>
                <p>What's up with <span className='font-bold'>`Your Term`</span></p>
            </div>
        </div>

        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>News by Sources</p>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Sources :</p>
                <p>CNN, BBC news, ABC news, IGN, Time</p>
            </div>
            <div className='text-center'>
                <p className='mb-2 font-bold'>Try saying :</p>
                <p>Give me some news from <span className='font-bold'>`Your Source name`</span></p>
            </div>
        </div>

        <div className='h-[400px] bg-gray-200 flex flex-col justify-between align-middle items-center py-8 px-4 cursor-pointer duration-200 hover:scale-105'>
            <p className='text-2xl font-extrabold border-b-2 border-slate-800 pb-1 duration-300 hover:text-slate-700'>Back to Home</p>
            <div className='text-center'>
                <p className='mb-3 font-bold'>Try saying :</p>
                <p>Go back, Go back to home</p>
            </div>
        </div>
    </div>
  )
}

export default Home