// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract uupsTest is OwnableUpgradeable, UUPSUpgradeable {
    string public version;

    function initialize(string calldata _version) external initializer {
        __Ownable_init();
        version = _version;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
