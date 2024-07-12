"use client";

import { Card } from "flowbite-react";
import Montre from "./Montre";

const Montres = [
  {id: 0, titre: "Montre Homme Day-Date CADISEN", urlimage: "https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmRqb9S6pF451faR8atzwFg6XtUbYgnepkpQwbVaQ77eVt", annee: "2015"},
  {id: 1, titre: "Montre Homme Maserati WR 10 RTM", urlimage: "https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmW81ownwMjfPkeSfKQfeNS64uw2u46Bp3M6t1AHJ1eEaV", annee: "2020"},
  {id: 2, titre: "Philipp Plein Pleine couture", urlimage: "https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmNqTayZ9AkEZc7zNaHh4gA9DaUGvTcQBcB2gjq6uo7BgM", annee: "2021"},
  {id: 3, titre: "Rolex Oyster Perpetual", urlimage: "https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmbVYbjnew5YJK1wtngPizvEswcJJ3uJYRKhciwRtfV7kW", annee: "2022"}
]

export function ListeMontre() {
  return (
    <div className="flex-between w-4/4">
      <Montre titre={ Montres[0].titre } urlimage={ Montres[0].urlimage } annee={ Montres[0].annee } />
      <Montre titre={ Montres[1].titre } urlimage={ Montres[1].urlimage } annee={ Montres[1].annee } />
      <Montre titre={ Montres[2].titre } urlimage={ Montres[2].urlimage } annee={ Montres[2].annee } />
      <Montre titre={ Montres[3].titre } urlimage={ Montres[3].urlimage } annee={ Montres[3].annee } />
    </div>
  )
}

export default ListeMontre;


