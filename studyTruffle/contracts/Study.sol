// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Study {

    string msg = "Hello, This is SmartContract";

    function getC(uint256 a,uint256 b)
    external 
    view
    returns (uint256) {
        return a+b;
    }

    function getMsg()
    external
    view
    returns (string memory) {
        return msg;
    }
}