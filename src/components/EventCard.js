import React from "react"
import { Link } from "gatsby"

const EventCard = ({
  children,
  day,
  date,
  time,
  title,
  location,
  url,
  description,
  slug,
}) => (
  <div className="bg-cool-grey-050 font-semibold max-w-2xl rounded shadow-md p-8 mt-8">
    <div className=" flex flex-col-reverse sm:flex-row justify-between">
      <div className="">
        <div className="uppercase text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
          {day}, {date} @ {time}
        </div>
        <h2 className="text-xl py-2">{title}</h2>
        <a href={url} className="text-pink-vivid-500 hover:text-pink-vivid-300">
          <span>Location:</span> {location}
        </a>
      </div>
      {children}
    </div>
    <div>
      <p className="mt-5 text-cool-grey-800">{description}</p>
    </div>
    <Link className="" to={slug}>
      <button className="bg-pink-vivid-400 mt-3 rounded text-cool-grey-050 px-4 py-2 active:bg-pink-vivid-300 focus:bg-pink-vivid-300 hover:bg-pink-vivid-300">
        Learn More
      </button>
    </Link>
  </div>
)

export default EventCard
