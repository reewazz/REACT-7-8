import React, { useState } from 'react'

const NewsList = () => {

    const [newsList,setNewsList] = useState([])

    // const a = 5
    // const b = 
    // const c = a +b 

    // console.log(c,"cccc")


    const fetchNews = async()=> {
        const response  = await fetch('https://newsapi.org/v2/everything?q=nepal&from=2026-07-27&sortBy=publishedAt&apiKey=4a777c97d4314f2aaaaa9d43f3a6d1f8')
        console.log(response)
        const finalResponse = await response.json()
        console.log(finalResponse,"final")
        setNewsList(finalResponse.articles)

    }


    console.log(newsList,"in my frontend")

  return (
    <div>
        <button onClick={fetchNews} className='bg-blue-400 '>Fetch News </button>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  {newsList.map((item, index) => (
    <article
      key={index}
      className={`group relative overflow-hidden rounded-3xl bg-gray-900 ${
        index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <img
        src={item.urlToImage}
        alt={item.title}
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
          index === 0 ? "min-h-[500px]" : "min-h-[300px]"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6 lg:p-8">
        {/* Source */}
        <div className="mb-auto">
          <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
            {item.source?.name}
          </span>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-gray-300">
            {new Date(item.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <h2
            className={`font-bold leading-tight text-white ${
              index === 0
                ? "text-3xl md:text-4xl"
                : "text-xl"
            }`}
          >
            {item.title}
          </h2>

          {index === 0 && (
            <p className="mt-4 max-w-2xl line-clamp-2 text-sm leading-6 text-gray-300">
              {item.description}
            </p>
          )}

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
          >
            Read full story
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  ))}
</div>

    </div>
  )
}

export default NewsList