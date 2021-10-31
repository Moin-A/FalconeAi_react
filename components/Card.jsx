const Card = ({ dat }) => {
  return (
    <div className="flex  pb-10 items-center justify-center">
      <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <div className="p-4 divide-x divide-green-500">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            alt="Dog"
          />
        </div>
        <div className="flex justify-between p-6">
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
