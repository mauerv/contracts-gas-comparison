// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleERC20 is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Token", "TKN") {
        _mint(msg.sender, initialSupply);
    }
}
