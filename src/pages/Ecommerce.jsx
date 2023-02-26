import React from "react";
// import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { earningData, SparklineAreaData } from "../data/dummy";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className=" mt-12 ">
      <div className="flex flex-wrap justify-center">
        <section className="herro w-full m-0">
          <div
            className=" dark:text-gray-200 bg-white drop-shadow-md dark:bg-secondary-dark-bg h-44 rounded-xl   p-8 pt-9 m-3"
            // style={{ border: `3px solid ${currentColor}` }}
          >
            <div className="   flex justify-between items-center">
              <div>
                <h2 className="font-bold text-gray-700 dark:text-gray-400">
                  Earnings
                </h2>
                <p className="text-2xl">$63,448.78</p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>
        </section>
        <section className="cards">
          <ul className=" cards flex m-3 flex-wrap  justify-center gap-3 items-center">
            {earningData.map((item) => (
              <li
                key={item.title}
                className="bg-white drop-shadow-md flex items-center flex-col dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="max-w-fit text-2xl opacity-0.9 rounded-full p-4 drop-shadow-md hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm ${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="revenue-charts  flex gap-10 flex-wrap justify-center">
          <div className="bg-white drop-shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl">Revenue Updates</h2>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Butget</span>
                </p>
              </div>
            </div>
            <div className=" mt-10 flex gap-10 flex-wrap justify-center ">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mt-1">Butget</p>
                </div>
                <div className="mt-8 ">
                  <p>
                    <span className="text-3xl font-semibold">$48,438</span>
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="line-chart mt-5 ">
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
                <div className="button-wrapper mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div className="chart-wrapper">
                <Stacked width="320px" height="360" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ecommerce;
