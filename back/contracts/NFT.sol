// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AlyraNFT is ERC721A, Ownable {

    using Strings for uint;
    uint256 private constant MAX_SUPPLY = 20;
    uint256 private constant PRICE_PER_NFT = 0.0000000002 ether;
    uint256 private constant AMOUNT_NFT_PER_WALLET = 2;

    string public baseURI;

    mapping(address => uint256) amountNFTMintedPerWallet;

    constructor(string memory _baseURI) ERC721A("AlyraNFT", "ANFT") Ownable(msg.sender) {
        baseURI = _baseURI;
    }

    // totalSupply => le nbr de NFTs mintés dans cette collection.
    function mint(uint256 _quantity) external payable {
        require(totalSupply() + _quantity <= MAX_SUPPLY, "Max Limit Exceeded");
        require(amountNFTMintedPerWallet[msg.sender] + _quantity <= AMOUNT_NFT_PER_WALLET, "Max Limit Per Wallet Exceeded");
        //require(msg.value * _quantity >= PRICE_PER_NFT, "Not Enough Funds");
        amountNFTMintedPerWallet[msg.sender] += _quantity;
        _safeMint(msg.sender, _quantity);
    }

		// Permeet de modifier l'adresse du lien du NFT
    function setBaseURI(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

		// Retourne l'adresse du JSON du Token
    function tokenURI(uint _tokenId) public view virtual override(ERC721A) returns(string memory) {
        require(_exists(_tokenId), "URI Query for nonexistent token");
        return string(abi.encodePacked(baseURI, _tokenId.toString(), ".json"));
    }
}