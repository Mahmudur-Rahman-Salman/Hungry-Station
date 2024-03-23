import { useEffect, useState } from "react";

const AllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setAllCategories(data.categories);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">List of Food Categories</h1>
          <p className="mt-3 text-gray-500">
          Explore a Diverse Range of Culinary Delights.
          </p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((category) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={category.idCategory}
            >
              <a href="#">
                <img
                  src={category.strCategoryThumb}
                  loading="lazy"
                  alt={category.strCategory}
                  className="w-full h-48 rounded-t-md"
                />

                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">
                    {category.strCategory}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {category.strCategoryDescription.slice(0,400)}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      {/* <div>
        {allCategories.map((category) => {
          <li key={category.idCategory}>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h2>{category.strCategory}</h2>
            <p>{category.strCategoryDescription}</p>
          </li>;
        })}
      </div> */}
    </>
  );
};

export default AllCategories;
