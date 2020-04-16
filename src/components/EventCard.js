import React from "react"

const EventCard = ({
  day,
  date,
  time,
  title,
  location,
  photo,
  description,
}) => (
  <div className="bg-white max-w-2xl rounded p-8 mt-8 border-2 border-cool-grey-200">
    <div className="flex flex-col-reverse sm:flex-row justify-between">
      <div>
        <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
          {day}, {date} @ {time}
        </div>
        <h2 className="font-semibold text-xl py-2">{title}</h2>
        <div className="font-thin text-cool-grey-900">{location}</div>
      </div>
      <img
        className="sm:h-24 rounded"
        src={photo}
        alt="Odd Colony Brewing Company"
      />
    </div>
    <div>
      <p className="mt-5">{description}</p>
    </div>
  </div>
)

export default EventCard
