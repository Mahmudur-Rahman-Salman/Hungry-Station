import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const FewMeals = () => {
  const [fewMeals, setFewMeals] = useState([]);
  useEffect(() => {
    const fetchFewMealsData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        );
        const data = await response.json();
        setFewMeals(data.meals);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchFewMealsData();
  }, []);

  return (
    <>
      <section className="py-32">
        <SectionTitle
          heading="Savor the Flavors of Chicken Breast"
          subheading="Indulge in a Selection of Creative Chicken Breast Dishes"
        ></SectionTitle>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div>
            <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {fewMeals.map((items, key) => (
                <div
                  className="w-full mx-auto group sm:max-w-sm border p-5 rounded-lg shadow-lg duration-300 hover:shadow-sm cursor-pointer"
                  key={key}
                >
                  <img
                    src={items.strMealThumb}
                    loading="lazy"
                    alt={items.strMeal}
                    className="w-full "
                  />
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-center text-gray-800 duration-150 hover:text-indigo-600 font-semibold">
                      {items.strMeal}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FewMeals;
