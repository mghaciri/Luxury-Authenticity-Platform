// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/// @title Luxuxy Authenticity Platform contract
/// @author MG
/// @notice You can use this contract for mint a authentificy certificate of a watch 



contract LAPNFT is ERC721URIStorage, Ownable {
    uint16 public tokenIds;

    using Strings for uint;

    string public baseURI;

    mapping(address => uint256) amountNFTMintedPerWallet;

    /// @notice Watch struct
    /** @dev 
    * brand : Brand of the watch 
    * model : Model of the watch 
    * model : SerialNum of the watch 
    * model : weight (g) of the watch 
    * model : diameter (mm) of the watch 
    * model : birthyear of the watch 
    * model : material of the watch 
    * model : genre : M for Men / W for Women 
    */
		struct Montres{
      string brand;
      string model;
  /*    string SerialNum;
			uint weight;
      uint diameter;
      uint birthyear;
      string material;
			bytes1 genre; */
		}

    /// @notice List of watches
		Montres[] montres;

    /// @notice Seller struct
    /** @dev 
    * isRegistered : The seller is registered 
    * name : Name of the Seller 
    * postalAddress : Postal Address 
    */
    struct Seller{
      bool isRegistered;
      string name;
      string postalAddress;
		}

    /// @notice Mapping of Seller
    mapping (address => Seller) sellers;


    /// @notice Events
    event SellerRegistered(address sellerAddress); 
    event MintMontre(uint16 newItemId, address buyer, string tokenURI, string brand, string model); 


    constructor() ERC721 ("LapNFT", "LAP") Ownable(msg.sender) {
        // Contract owner is also authorized to mint
         sellers[msg.sender].isRegistered = true;
    }

    modifier onlyMinters() {
        require(sellers[msg.sender].isRegistered, "You're not a seller");
        _;
    }

    /// @notice Return Seller information from an address
    /** @dev 
    * onlySellers can call this function
    * return a Seller struct
    */
    /// @param _addr : address of a seller

    function getSeller(address _addr) external view returns (Seller memory) {
        return sellers[_addr];
    }

    /// @notice Register a new Seller 
    /** @dev only Owner can register. 
    * the Seller have not be registered
    * emit a SellerRegistered event
    * Set Seller as registered
    */
    /// @param _addr : address of a Seller
    function addSeller(address _addr) external onlyOwner {
        require(sellers[_addr].isRegistered != true, 'Seller already registered');
    
        sellers[_addr].isRegistered = true;
        emit SellerRegistered(_addr);
    }
 
    /** 
    @notice Function to mint a new NFT
    @dev mint a new NFT from watch characteristics
    * emit a mintMontre event
    * return the new Token ID
    */
    function mintMontres(address _buyer, string memory _tokenURI, string memory _brand, string memory _model) onlyMinters public returns (uint16)
    {
        tokenIds++;
				montres.push(Montres(_brand, _model));
        // On récupère l'ID du token
        uint16 newItemId = tokenIds;
        _mint(_buyer, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        emit MintMontre(newItemId, _buyer, _tokenURI,_brand,_model);

        return uint16(newItemId);
    }


} 