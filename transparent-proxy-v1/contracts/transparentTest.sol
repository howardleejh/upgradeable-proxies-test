// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract transparentTest is Initializable {
    string public version;

    function initialize(string calldata _version) external initializer {
        version = _version;
    }
}
