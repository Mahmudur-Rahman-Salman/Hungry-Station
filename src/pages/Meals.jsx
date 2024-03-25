import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setErrors] = useState(null);
  const [nameSearch, setNameSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const mealSearchInput = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);
    setNameSearch(name);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameSearch}`
        );
        const data = await response.json();

        if (data.meals === null) {
          setErrors("No meals has been found"); //Set error message if no results are found
          setMeals([]); // Clear meals
        } else {
          setMeals(data.meals);
          setErrors(null); // Reset error if fetching is successful
        }
      } catch (error) {
        setErrors("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (nameSearch) {
      fetchMeals();
    } else {
      setMeals([]);
    }
  }, [nameSearch]);
  return (
    <>
      <section className="py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
              Search Meal By Category Names
            </h1>
            <p className="text-gray-600">Find your favorite meals here.</p>
            <p className="text-gray-600">
              Category Names: seafood, goat, chikcen, vegetarian, beef, dessert,
              lamb,Miscellaneous, pasta, pork, side, starter, vegan, breakfast
            </p>

            <form
              onSubmit={mealSearchInput}
              className="max-w-md px-4 mx-auto mt-12"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="seafood, beef, goat, lamb, breakfast, chicken...."
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
              <button className="w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                Search
              </button>
            </form>
          </div>
          {/* loading Spinner */}
          {loading && (
            <>
              <div className="text-center mt-5">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </>
          )}
          {error && (
            <div className="flex justify-center mt-5 ">
              <p className="text-red-600 text-center uppercase text-lg font-bold">
                {error}
              </p>
            </div>
          )}
          <div>
            <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {meals.map((items, key) => (
                <div className="w-full mx-auto group sm:max-w-sm" key={key}>
                  <a href="#">
                    <img
                      src={items.strMealThumb}
                      loading="lazy"
                      alt={items.strMeal}
                      className="w-full rounded-lg"
                    />
                    <div className="mt-3 space-y-2">
                      <h3 className="text-lg text-center text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                        {items.strMeal}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meals;
