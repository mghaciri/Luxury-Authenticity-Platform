import { Button } from "flowbite-react"

const products = [
    {
        id: 1,
        owner: '0xd038D8716C28A0598D14F74d14b15113Aa492adF',
        name: 'Montre Homme Day-Date CADISEN',
        href: '#',
        imageSrc: 'https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmRqb9S6pF451faR8atzwFg6XtUbYgnepkpQwbVaQ77eVt',
        price: '1.1 ETH',
        year: "2021"
    },
    {
        id: 2,
        owner: '0x4f45e814b668E2a33166a0Dfa2e26b188F63b24A',
        name: 'Montre Homme Maserati WR 10 RTM',
        href: '#',
        imageSrc: 'https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmW81ownwMjfPkeSfKQfeNS64uw2u46Bp3M6t1AHJ1eEaV',
        price: '2 ETH',
        year: "2022"
    },
    {
        id: 3,
        owner: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        name: 'Philipp Plein Pleine couture',
        href: '#',
        imageSrc: 'https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmNqTayZ9AkEZc7zNaHh4gA9DaUGvTcQBcB2gjq6uo7BgM',
        price: '3 ETH',
        year: "2023"
    },
    {
        id: 4,
        owner: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        name: 'Rolex Oyster Perpetual',
        href: '#',
        imageSrc: 'https://bronze-holy-goose-281.mypinata.cloud/ipfs/QmbVYbjnew5YJK1wtngPizvEswcJJ3uJYRKhciwRtfV7kW',
        price: '4 ETH',
        year: "2024"
    },
  ]
  
const handleBuy = (id) => {
    alert(id);      
}

  export default function ListeMontres() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <h3 className="text-sm text-gray-700 text-center">
                    {product.owner.substring(0,10)}...
                </h3>

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.name}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.year}</p>
                  </div>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  {product.price}
                  <Button onClick={() => handleBuy(product.id)}>Transfer</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  