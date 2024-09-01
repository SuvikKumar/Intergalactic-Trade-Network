// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TradeAgreement {
    address public buyer;
    address public seller;
    uint public amount;
    string public item;
    bool public completed;

    constructor(address _buyer, address _seller, uint _amount, string memory _item) {
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
        item = _item;
        completed = false;
    }

    function confirmTrade() public {
        require(msg.sender == buyer || msg.sender == seller, "Not authorized");
        require(!completed, "Trade already completed");
        completed = true;
    }
}
