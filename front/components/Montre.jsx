"use client";

import { Card } from "flowbite-react";

export function Montre(props) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={ props.titre }
      imgSrc={ props.urlimage }
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          { props.titre }
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">

        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        { props.annee }
        </span>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      { props.description }
        </p>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">1.1 ETH</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Buy
        </a>
      </div>
    </Card>
  );
}

export default Montre;
