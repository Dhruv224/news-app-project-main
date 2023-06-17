import React from 'react'

function NewsCard({article, index}) {
  return (
    <>
        <div class="bg-gray-200 border-b-4 border-blue-900 ">
            {
                article.urlToImage && (
                    <img src={article.urlToImage} alt={article.author} class="w-full object-cover h-32 sm:h-48 md:h-64" />
                )
            }
            <div class="pt-2 p-2 md:p-6 text-slate-900">
                {
                    article.author && (
                        <h3 className='text-xs'>By {article.author}</h3>
                    )
                }
                <h3 class="mb-2 text-xl font-bold leading-tight sm:leading-normal">{article.title}</h3>
                <p className='mb-3 text-sm'>{article.description}</p>
                <div class="text-xs flex items-center text-slate-900">
                    <p className="leading-none">{article.publishedAt.split("T")[0]}</p>
                </div>
                <button className='border-2 border-slate-900 bg-slate-900 text-white mt-3 py-1 px-2 transition-all duration-300 hover:text-slate-900 hover:bg-white'><a href={article.url} target='_blank'>Read more...</a></button>
            </div>
        </div>
    </>
  )
}

export default NewsCard