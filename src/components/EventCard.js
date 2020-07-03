import React from "react"
import { Link } from "gatsby"

const EventCard = ({ children, date, time, title, description, slug }) => (
  <div className="bg-cool-grey-050 font-semibold max-w-2xl rounded shadow-md mt-8">
    <Link to={slug}>{children}</Link>
    <div className=" flex flex-col-reverse sm:flex-row justify-between">
      <div className="p-8">
        <h2 className="text-xl">{title}</h2>
        <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg mt-3">
          {date} @ {time}
        </div>
        <div>
          <p className="my-3 text-cool-grey-800">{description}</p>
        </div>
        <Link to={slug}>
          <button className="bg-pink-vivid-400 mt-3 rounded text-cool-grey-050 px-4 py-2 active:bg-pink-vivid-300 focus:bg-pink-vivid-300 hover:bg-pink-vivid-300">
            Learn More &rarr;
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default EventCard
