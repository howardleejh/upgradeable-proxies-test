// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract transparentTestV3 is Initializable {
    string public version;
    string public stored;
    uint256 public storedUint;

    function initialize(string calldata _version) external initializer {
        version = _version;
    }

    function reInitVersion(
        string calldata _newVersion
    ) external reinitializer(3) {
        version = _newVersion;
    }

    function writeNumber(uint256 _number) external {
        storedUint = _number;
    }

    function writeSomething(string calldata _sentance) external {
        stored = _sentance;
    }
}
