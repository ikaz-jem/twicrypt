
// SPDX-License-Identifier: MIT LICENSE

pragma solidity 0.8.4;





contract DcEmail {

struct email {
    uint256 at;
    address sender;
    address recipient;
    string body ;
}


struct userInbox {
uint256 totalEmail;
mapping (address=>email) inbox;


}

mapping(address=>userInbox) emails;


function send(string calldata _body)external {

//  userInbox storage senderInbox = emails[_to]; // Access the sender's inbox in storage
//     email storage emailToSend = senderInbox.inbox[_to]; // Access the specific email in the sender's inbox

  // Create a new Email struct with the desired information
    email memory newEmail = email({
        at: block.timestamp, // Use the current block's timestamp as the 'at' value
        sender: msg.sender,
        recipient: msg.sender,
        body:_body
    });

    // Update the sender's inbox with the new email
    emails[msg.sender].inbox[msg.sender] = newEmail;

    // Increment the totalEmail count for the sender's inbox
    emails[msg.sender].totalEmail++;

}


     function getEmailRecipient() external view returns (string memory) {
        return emails[msg.sender].inbox[msg.sender].body;
    }
}

