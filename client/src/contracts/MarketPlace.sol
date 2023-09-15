// SPDX-License-Identifier: MIT LICENSE

pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// interface INftContract {
// function baseURI() external view returns (string memory);
// function tokenURI(uint256 tokenId) external view returns (string memory);

// }
contract NFTMarketResell is IERC721Receiver, ReentrancyGuard, Ownable {
    address payable holder;
    uint256 listingFee = 0.025 ether;

    struct List {
        uint256 tokenId;
        string name;
        address payable seller;
        address payable holder;
        uint256 price;
        string metadata_url;
        string image;
        uint256 listedAt;
        bool sold;
    }
    mapping(uint256 => List) public vaultItems;

    event NFTListCreated(
        uint256 indexed tokenId,
        string name,
        address seller,
        address holder,
        uint256 price,
        string metadata_url,
        string image,
        uint256 listedAt,
        bool sold
    );


    uint256 public listingCount = 0;

    function getListingFee() public view returns (uint256) {
        return listingFee;
    }

    ERC721Enumerable nft;

    constructor(ERC721Enumerable _nft) {
        holder = payable(msg.sender);
        nft = _nft;
    }

    function listSale(uint256 tokenId, uint256 price ,string memory _image ,string memory _name)
        public
        payable
        nonReentrant
    {
          require(nft.ownerOf(tokenId) == msg.sender, "you are not the owner !");
          require(vaultItems[tokenId].tokenId == 0, "NFT already listed");
          require(price > 0, "Amount must be higher than 0");
          require(msg.value == listingFee, "Listing require platform fees ");
        vaultItems[tokenId] = List(
            tokenId,
            _name,
            payable(msg.sender),
            payable(address(this)),
            price,
            nft.tokenURI(tokenId),
            _image,
            block.timestamp,
            false
        );
          nft.transferFrom(msg.sender, address(this), tokenId);
          emit NFTListCreated(tokenId, _name, msg.sender, address(this), price,nft.tokenURI(tokenId),_image,block.timestamp, false);
        listingCount += 1;
        activeListingIds.push(tokenId);
    }



    uint256[] public activeListingIds;

    function buyNft(uint256 tokenId) public payable nonReentrant {
        uint256 price = vaultItems[tokenId].price;
        require(
            msg.value == price,
            "Transfer Total Amount to complete transaction"
        );
        vaultItems[tokenId].seller.transfer(msg.value);
        nft.transferFrom(address(this), msg.sender, tokenId);
        vaultItems[tokenId].sold = true;
    }

    function Delete(uint256 id) internal {
        List storage listing = vaultItems[id];
        require(
            listing.seller == msg.sender,
            "You can only cancel your own listing"
        );
        require(!listing.sold, "Listing is already sold");

        // Mark the listing as sold to prevent further actions
        listing.sold = true;

        // Remove the listing ID from the activeListingIds array
        for (uint256 i = 0; i < activeListingIds.length; i++) {
            if (activeListingIds[i] == id) {
                activeListingIds[i] = activeListingIds[
                    activeListingIds.length - 1
                ];
                activeListingIds.pop();
                break;
            }
        }
    }

    function cancelListing(uint256 _tokenId) public {
        Delete(_tokenId);
        require(vaultItems[_tokenId].seller == msg.sender, "NFT not yours");
        nft.transferFrom(address(this), msg.sender, _tokenId);
        delete vaultItems[_tokenId];
        listingCount-=1;
    }

    function getPrice(uint256 tokenId) public view returns (uint256) {
        uint256 price = vaultItems[tokenId].price;
        return price;
    }

    function getActiveListings() public view returns (List[] memory) {
        List[] memory result = new List[](activeListingIds.length);
        for (uint256 i = 0; i < activeListingIds.length; i++) {
            uint256 tokenId = activeListingIds[i];
            result[i] = vaultItems[tokenId];
        }
        return result;
    }
    function getActiveUserListings(address _user) public view returns (List[] memory) {
        List[] memory result = new List[](activeListingIds.length);
        for (uint256 i = 0; i < activeListingIds.length; i++) {
            uint256 tokenId = activeListingIds[i];
            if (vaultItems[tokenId].seller == _user){
            result[i] = vaultItems[tokenId];}
        }
        return result;
    }

    function onERC721Received(
        address,
        address from,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        require(from == address(0x0), "Cannot send nfts to Vault directly");
        return IERC721Receiver.onERC721Received.selector;
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }

    function editListing(uint256 _newPrice, uint256 _id) external {
        require(
            vaultItems[_id].price != _newPrice,
            "same price :( please choose other value"
        );
        require(vaultItems[_id].seller == msg.sender);
        vaultItems[_id].price = _newPrice;
    }

    function editCollection(ERC721Enumerable _newCollection)
        external
        onlyOwner
    {
        nft = _newCollection;
    }

    function changeListingFees(uint256 _listingFees) external onlyOwner {
        require(
            listingFee != _listingFees,
            "listing fees are the same please choose other value"
        );
        listingFee = _listingFees;
    }

    function getNftMetadata(uint256 _id) public view returns (string memory) {
        return nft.tokenURI(_id);
    }

    function getPageCount(uint256 count) public view returns (uint256) {
        uint256 pageCount = listingCount / count;
        return pageCount;
    }

    // function isNftListed(uint256 _id) external view returns (bool) {
    //     return nft._exists(_id);
    // }
}
