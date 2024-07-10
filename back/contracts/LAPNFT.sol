// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

contract LAPNFT is ERC721URIStorage {
    // On va utiliser un compteur
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    using Strings for uint;

    string public baseURI;

    mapping(address => uint256) amountNFTMintedPerWallet;

		struct Montres{
			uint weight;
      uint diameter;
      uint birthyear;
      string material;
			bytes1 genre;
		}

		Montres[] montres;

    constructor() ERC721 ("PalNFT", "PAL") Ownable(msg.sender) {}
/*    constructor(string memory _baseURI) ERC721A("PalNFT", "PAL") Ownable(msg.sender) {
        baseURI = _baseURI;
    }
*/
    function MintMontres(address _player, string memory _tokenURI, uint _height, bool _hair) public returns (uint256)
    {
        _tokenIds.increment();
				montres.push(Montres(_height, _hair));
        // On récupère l'ID du token
        uint256 newItemId = _tokenIds.current();
        _mint(_player, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    		// Retourne l'adresse du JSON du Token
    function tokenURI(uint _tokenId) public view virtual override(ERC721A) returns(string memory) {
        require(_exists(_tokenId), "URI Query for nonexistent token");
        return string(abi.encodePacked(baseURI, _tokenId.toString(), ".json"));
    }

} 