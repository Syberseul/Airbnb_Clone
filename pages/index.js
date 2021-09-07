import Head from "next/head";
import Banner from "../components/Banner";
import DiscoverCard from "../components/DiscoverCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ smallCard, mediumCard, discoverCard }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-5">
          <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCard?.map(({ id, img, location, distance }) => (
              <SmallCard
                key={id}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCard?.map(({ id, img, title }) => (
              <MediumCard key={id} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space"
          buttonText="Learn more"
        />

        <section>
          <h2 className="text-2xl font-semibold py-8">Discover things to do</h2>
          <div className="flex justify-between space-x-3 mb-10 overflow-scroll scrollbar-hide p-3">
            {discoverCard?.map(({ id, img, title, description }) => (
              <DiscoverCard
                key={id}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const smallCard = await fetch(
    "https://yiteng-first-api.herokuapp.com/smallCard"
  ).then((res) => res.json());

  const mediumCard = await fetch(
    "https://yiteng-first-api.herokuapp.com/middleCard"
  ).then((res) => res.json());

  const discoverCard = await fetch(
    "https://yiteng-first-api.herokuapp.com/discoverCard"
  ).then((res) => res.json());

  return {
    props: {
      smallCard,
      mediumCard,
      discoverCard,
    },
  };
}
