import { useRouter } from "next/dist/client/router";
import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { format } from "date-fns";

function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* className injected in _app.js file */}
            <p className="searchPageButton">Cancellation Flexibility</p>
            <p className="searchPageButton">Type of place</p>
            <p className="searchPageButton">Price</p>
            <p className="searchPageButton">Rooms and Beds</p>
            <p className="searchPageButton">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                id,
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }) => (
                <InfoCard
                  key={id}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://yiteng-first-api.herokuapp.com/searchLocation"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
