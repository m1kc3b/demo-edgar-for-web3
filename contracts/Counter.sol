// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint public count;
    string public greeting;

    constructor() {
        count = 0;
        greeting = "Hello, Web3!";
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }

    function getCount() public view returns (uint) {
        return count;
    }

    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}