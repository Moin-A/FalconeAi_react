import { useSelector } from "react-redux";

const Result = () => {
  const stats = useSelector((state) => state.Stats);
  return (
    <div className="h-screen bg-fancy-hero-pattern">
      <article class="max-w-prose mx-auto py-8">
        <h1 class="text-2xl font-bold">Result</h1>
        <h3 class="text-2xl font-bold">{stats.Result}</h3>
        {stats.Planet_found !== "NA" && (
          <>
            <p class="mt-6">The Queen was found on {stats.Planet_found}</p>
            <p class="mt-6">
              The Mission was concluded in{stats.Total_hrs} hrs
            </p>
          </>
        )}
        {!stats.Planet_found && (
          <p class="mt-6">Finish the game and comeback</p>
        )}
      </article>
    </div>
  );
};

export default Result;
