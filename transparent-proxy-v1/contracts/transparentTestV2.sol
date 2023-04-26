// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract transparentTestV2 is Initializable {
    string public version;
    string public stored;

    function initialize(string calldata _version) external initializer {
        version = _version;
    }

    function reinit(string calldata _newVersion) external reinitializer(2) {
        version = _newVersion;
    }

    function writeSomething(string calldata _sentance) external {
        stored = _sentance;
    }
}
