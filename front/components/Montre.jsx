"use client";
import { useEffect, useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractAddress, contractAbi, ownerAddress } from "@/constants";
import { Alert, Button } from "flowbite-react";


function Montre(product) {
    const { address } = useAccount();
    const { writeContract } = useWriteContract();

    const [toAddress, setToAddress] = useState("");
    const [confirmation, setConfirmation] = useState(""); 
    const [showAlert, setShowAlert] = useState(false);
    const [montre, setMontre] = useState("");

    const ipfsURI = "https://bronze-holy-goose-281.mypinata.cloud/ipfs/"

    // Return owner of an ID token
    const { data: ownerOf } = useReadContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: 'ownerOf',
      args: [product.id],
    });

    // Return Token URI
    const { data: tokenURI } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'tokenURI',
        args: [product.id],
    });


    async function getTokenJson() {
      try {
        const reponse = await fetch(tokenURI?.toString());
        const _tokenURI = await reponse.json();
        console.log(_tokenURI);
        setMontre(_tokenURI);
      } catch (err) {
        console.log(err);
      }
    }

    if (montre == "") {
      getTokenJson() 
    }

    const safeTransferFrom = async (id) => {
        try {
            writeContract({
                address: contractAddress,
                abi: contractAbi,
                functionName: "safeTransferFrom",
                args: [address, toAddress, id],
            });
  
        } catch (error) {
            console.error("Error Transfer:", error);
            setShowAlert(true);
            setConfirmation("Error Transfer");
        }
      };
    
  
      const handleTransfer = (id) => {
        if(toAddress == "") alert("Adresse vide !")
        safeTransferFrom(id);      
      }

 
    // Check if the current user is the owner
  const isCurrentOwner = ownerOf === address;
  
  return (
    <>
      <div key={product.id} className="group relative">
        <h3 className="text-sm text-center" >
          <a target="_blank" href={"https://sepolia.etherscan.io/token/" + contractAddress.toString() + "?a=" + ownerOf?.toString()} >
            {ownerOf?.toString().substring(0,15)}...
          </a>
        </h3>
        <br></br>   
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <a href={ipfsURI + montre.image} target="_blank">
            <img
            alt={montre.description}
            src={ipfsURI + montre.image}
            href={ipfsURI + montre.image}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </a>
        </div>
        <br></br>  
        <h3 className="text-sm text-center" >
          {montre.description}
        </h3>
        <h3 className="text-sm text-center" >
            Model :
        </h3>
        <h3 className="text-sm text-center" >
            S/N : 
        </h3>
        <h3 className="text-sm text-center" >
          Weight : 
        </h3>
        <h3 className="text-sm text-center" >
            Diameter : 
        </h3>
        <h3 className="text-sm text-center" >
            Material : 
        </h3>

        <h3 className="text-sm text-center" >
            Genre : 
        </h3>
        <br></br>          <br></br>  
        <a target="_blank" href={"https://sepolia.etherscan.io/nft/" + contractAddress.toString() + "/" + product.id} >
            History
          </a>
        <br></br>          <br></br>  
        {isCurrentOwner && <section className="flex justify-center items-center w-full bg-blue-950">
            <input
            type="string"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs text-black items-center"
            placeholder="Enter destination address"
            />
            <div className="mt-1 text-sm">
                <Button onClick={() => handleTransfer(product.id)}>Transfer</Button>
            </div>
          </section>
        }
        <div className="mt-4 w-80">
            {showAlert && (
                <Alert color="failure" icon={HiInformationCircle}>
                <span className="text-sm">Invalid address</span>
                </Alert>
            )}
            {confirmation && <div>{confirmation}</div>}
        </div>
      </div>
    </>
  );
  
};

export default Montre;


