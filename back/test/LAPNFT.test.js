const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
const { assert, expect } = require("chai");
const { ethers } = require('hardhat');
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

let owner, otherAccount;
let lapNFT;

async function deployLAPNFT() {
    const [owner, otherAccount] = await ethers.getSigners(); 
    const LAPNFT = await ethers.getContractFactory("LAPNFT");
    const lapNFT = await LAPNFT.deploy(); 
    return { lapNFT, owner, otherAccount };
}

describe("Deploying contract", function () {
    it("Should set the right owner", async function () {
        const { lapNFT, owner } = await loadFixture(deployLAPNFT);

        expect(await lapNFT.owner()).to.equal(owner.address);
    });

});

describe('Return Symbol', function() {
    it('should return the symbol of the token', async function() {
        const { lapNFT } = await loadFixture(deployLAPNFT);
        let symbol = await lapNFT.symbol();

        assert(symbol === "LAP");
    })
})

describe('Mint a watch NFT', function() {
    it('should mint an new NFT and the number should be equal to 1', async function() {
        const { lapNFT, owner } = await loadFixture(deployLAPNFT);
        let num = await lapNFT.MintMontres(owner.address, "https://ipfs.io/ipfs/QmdtJYegZ1hA1tmQegCXrmCNiFsHp5GhpoZUPdZxRndDGz?filename=Berber_flag.svg.png", "Rolex", "Model1");
    
        //expect(await lapNFT.tokenIds()).to.equal(1);
        expect(await lapNFT.tokenURI(1)).to.equal("https://ipfs.io/ipfs/QmdtJYegZ1hA1tmQegCXrmCNiFsHp5GhpoZUPdZxRndDGz?filename=Berber_flag.svg.png");
    })
})




