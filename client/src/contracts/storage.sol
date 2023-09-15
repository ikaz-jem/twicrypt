// SPDX-License-Identifier: MIT LICENSE

pragma solidity 0.8.4;


interface ImarketStore {
function getOwner () external view returns(address) ;
}

contract ImarketStoreContract {

    struct shop {
         uint256 tokenId;
        string name;
        address  seller;
        address  holder;
        uint256 price;
        string metadata_url;
        string image;
        uint256 listedAt;
        bool sold;
}
 mapping(address => mapping (uint256=>shop )) public myshop;

function addShop(
    uint256 tokenId,
    string memory name,
    address seller,
    uint256 price,
    string memory metadata_url,
    string memory image
) public {
    myshop[msg.sender][tokenId] = shop({
        tokenId: tokenId,
        name: name,
        seller: seller,
        holder: msg.sender,
        price: price,
        metadata_url: metadata_url,
        image: image,
        listedAt: block.timestamp,
        sold: false
    });
}
function updateShop(
    uint256 tokenId,
    string memory name,
    uint256 price,
    string memory metadata_url,
    string memory image
) public {
    shop storage myShop = myshop[msg.sender][tokenId];
    require(msg.sender == myShop.seller, "Only the seller can update the shop");
    myShop.name = name;
    myShop.price = price;
    myShop.metadata_url = metadata_url;
    myShop.image = image;
}
function deleteShop(uint256 tokenId) public {
    shop storage myShop = myshop[msg.sender][tokenId];
    require(msg.sender == myShop.seller, "Only the seller can delete the shop");
    delete myshop[msg.sender][tokenId];
}
function getShop(uint256 tokenId) public view returns (shop memory) {
    return myshop[msg.sender][tokenId];
}



}