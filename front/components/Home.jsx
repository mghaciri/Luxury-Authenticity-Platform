"use client";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[50vh]">
        <div className="flex flex-row justify-center items-center">
        <h2
          className="text-white mt-24 md:mt-0 xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose"
        >
          Welcome to our Voting Dapp
        </h2>
        <img src="/home2.png" alt="Home" style={{ width: '400px' }} />
        </div>
      </section>
    </>
  );
};

export default Home;
