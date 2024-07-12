// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

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

    constructor() ERC721 ("LapNFT", "LAP") Ownable(msg.sender) {}

    function MintMontres(address _buyer, string memory _tokenURI, string memory _brand, string memory _model) public returns (uint16)
    {
        tokenIds++;
				montres.push(Montres(_brand, _model));
        // On récupère l'ID du token
        uint16 newItemId = tokenIds;
        _mint(_buyer, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return uint16(newItemId);
    }


} 