// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract uupsTestV3 is OwnableUpgradeable, UUPSUpgradeable {
    string public version;
    string public stored;
    uint256 public storedUint;

    function initialize(string calldata _version) external initializer {
        __Ownable_init();
        version = _version;
    }

    function reInitVersion(
        string calldata _newVersion
    ) external reinitializer(3) {
        version = _newVersion;
    }

    function writeSomething(string calldata _sentance) external {
        stored = _sentance;
    }

    function writeNumber(uint256 _number) external {
        storedUint = _number;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
