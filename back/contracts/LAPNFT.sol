// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract LAPNFT is ERC721URIStorage, Ownable {
    uint16 public tokenIds;

    using Strings for uint;

    string public baseURI;

    mapping(address => uint256) amountNFTMintedPerWallet;

		struct Montres{
      string brand;
      string model;
/*      string SerialNum;
			uint weight;
      uint diameter;
      uint birthyear;
      string material;
			bytes1 genre;
*/
		}

		Montres[] montres;

    /// @notice Events
    event mintMontre(uint16 newItemId, address buyer, string tokenURI, string brand, string model); 


    constructor() ERC721 ("LapNFT", "LAP") Ownable(msg.sender) {}

    /** 
    @notice Function to mint a new NFT
    @dev mint a new NFT from watch characteristics
    * emit a mintMontre event
    * return the new Token ID
    */
    function MintMontres(address _buyer, string memory _tokenURI, string memory _brand, string memory _model) public returns (uint16)
    {
        tokenIds++;
				montres.push(Montres(_brand, _model));
        // On récupère l'ID du token
        uint16 newItemId = tokenIds;
        _mint(_buyer, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        emit mintMontre(newItemId, _buyer, _tokenURI,_brand,_model);

        return uint16(newItemId);
    }


} 