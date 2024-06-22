"use client";

const Home = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse justify-around items-center pb-6 w-full bg-green-500">
        <h2
          style={{ lineHeight: "1.2" }}
          className="text-white mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold leading-loose"
        >
          Welcome on our Voting Dapp
        </h2>
      </div>
    </>
  );
};

export default Home;
