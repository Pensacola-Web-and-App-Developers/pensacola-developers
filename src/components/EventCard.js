import React from "react"
import { Link } from "gatsby"

const EventCard = ({
  day,
  date,
  time,
  title,
  location,
  url,
  photo,
  description,
}) => (
  <div className="bg-cool-grey-050 max-w-2xl rounded shadow-md p-8 mt-8">
    <div className="flex flex-col-reverse sm:flex-row justify-between">
      <div className="font-semibold">
        <div className="uppercase text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
          {day}, {date} @ {time}
        </div>
        <h2 className="text-xl py-2">{title}</h2>
        <Link
          to={url}
          className="text-pink-vivid-500 hover:text-pink-vivid-300"
        >
          {location}
        </Link>
      </div>
      <img
        className="sm:h-24 rounded"
        src={photo}
        alt={location}
      />
    </div>
    <div>
      <p className="mt-5">{description}</p>
    </div>
  </div>
)

export default EventCard
