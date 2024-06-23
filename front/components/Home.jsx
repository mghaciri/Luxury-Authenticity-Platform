"use client";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-around items-center pb-6 w-full bg-[#0a1835] h-[50vh]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h2
            className="text-white mt-32 md:mt-0 text-2xl md:text-3xl lg:text-5xl font-semibold leading-loose"
            style={{ lineHeight: "1.2" }}
          >
            Welcome to our Voting Dapp
          </h2>
          <img src="/home2.png" alt="Home" className="md:mt-0 md:w-3/4 lg:w-1/2 xl:w-1/3 max-h-full" />
        </div>
      </section>
    </>
  );
};

export default Home;