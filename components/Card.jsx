const Card = ({ dat }) => {
  return (
    <div className="flex  pb-10 items-center justify-center">
      <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <div className="p-4 divide-x divide-green-500">
          {dat.speed && (
            <img className="rounded-xl bg-black" src="/sship.jpg" alt="Dog" />
          )}
          {!dat.speed && (
            <img className="rounded-xl bg-black" src="/plannet.png" alt="Dog" />
          )}
        </div>
        <div className="flex justify-between p-6 h-24">
          <h1 className="text-lg  text-gray-900 font-bold">{dat.name}</h1>
          {dat.distance && (
            <h1 className="text-lg text-gray-900 font-bold">{dat.distance}</h1>
          )}
          {dat.max_distance && (
            <h1 className="text-lg text-gray-900 font-bold">
              Max-Dist :{dat.max_distance}
            </h1>
          )}
          {dat.max_distance && (
            <h1 className="text-lg text-gray-900 font-bold">
              No: {dat.total_no}
            </h1>
          )}
          {dat.max_distance && (
            <h1 className="text-lg text-gray-900 font-bold">
              speed: {dat.speed}
            </h1>
          )}
        </div>
        <div className="flex space-x-6 items-center"></div>
      </div>
    </div>
  );
};

export default Card;
