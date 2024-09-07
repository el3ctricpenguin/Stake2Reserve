// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract S2RNFT is ERC721URIStorage, ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Course {
        string name;
        uint256 cancelFee;
        string[] imageURLs;
    }

    constructor() ERC721("Stake2Reserve NFT", "S2R") {}

    /*--------+
    |   NFT   |
    +--------*/
    function mintReservationNFT(
        address _mintTo,
        address _shopAddress,
        string memory _shopName,
        uint256 _startingTime,
        uint256 _endingTime,
        uint256 _guestCount,
        uint256 _courseId,
        uint256 _cancelFee
    ) public {
        uint256 newItemId = _tokenIds.current();

        string memory tokenURITemp = makeTokenURI(
            _shopAddress,
            _shopName,
            _startingTime,
            _endingTime,
            _guestCount,
            _courseId,
            _cancelFee
        );
        _mint(_mintTo, newItemId);
        _setTokenURI(newItemId, tokenURITemp);

        _tokenIds.increment();
    }

    function makeTokenURI(
        address _shopAddress,
        string memory _shopName,
        uint256 _startingTime,
        uint256 _endingTime,
        uint256 _guestCount,
        uint256 _courseId,
        uint256 _cancelFee
    ) private pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            '{"name": "Stake2Reserve Reservation NFT",',
                            '"description": "Penguin",',
                            '"image": "https://i.imgur.com/T2F51Kn.jpeg",',
                            '"attributes": [',
                            '{"trait_type": "Shop Address",',
                            '"value": "',
                            Strings.toHexString(_shopAddress),
                            '"},',
                            '{"trait_type": "Shop Name",',
                            '"value": "',
                            _shopName,
                            '"},',
                            '{"trait_type": "Reservation Date",',
                            '"display_type": "date",',
                            '"value": "',
                            Strings.toString(_startingTime),
                            '"},',
                            '{"trait_type": "Reservation Start Time",',
                            '"value": "',
                            Strings.toString(_startingTime),
                            '"},',
                            '{"trait_type": "Reservation End Time",',
                            '"value": "',
                            Strings.toString(_endingTime),
                            '"},',
                            '{"trait_type": "Guest Count",',
                            '"value": "',
                            Strings.toString(_guestCount),
                            '"},',
                            '{"trait_type": "Course Id",',
                            '"value": "',
                            Strings.toString(_courseId),
                            '"},',
                            '{"trait_type": "Cancel Fee",',
                            '"value": "',
                            Strings.toString(_cancelFee),
                            '"}',
                            "]}"
                        )
                    )
                )
            );
    }

    function convertReservationNFTtoVisitedNFT(
        uint256 _tokenId,
        address _shopAddress,
        string memory _shopName,
        uint256 _startingTime,
        uint256 _endingTime,
        uint256 _guestCount,
        uint256 _courseId,
        uint256 _cancelFee
    ) public {
        string memory tokenURITemp = string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    abi.encodePacked(
                        '{"name": "Stake2Reserve Visited NFT",',
                        '"description": "Visited NFT description",',
                        '"image": "https://i.imgur.com/0mFSlbG.jpeg",',
                        '"attributes": [',
                        '{"trait_type": "Shop Address",',
                        '"value": "',
                        Strings.toHexString(_shopAddress),
                        '"},',
                        '{"trait_type": "Shop Name",',
                        '"value": "',
                        _shopName,
                        '"},',
                        '{"trait_type": "Reservation Date",',
                        '"display_type": "date",',
                        '"value": "',
                        Strings.toString(_startingTime),
                        '"},',
                        '{"trait_type": "Reservation Start Time",',
                        '"value": "',
                        Strings.toString(_startingTime),
                        '"},',
                        '{"trait_type": "Reservation End Time",',
                        '"value": "',
                        Strings.toString(_endingTime),
                        '"},',
                        '{"trait_type": "Guest Count",',
                        '"value": "',
                        Strings.toString(_guestCount),
                        '"},',
                        '{"trait_type": "Course Id",',
                        '"value": "',
                        Strings.toString(_courseId),
                        '"},',
                        '{"trait_type": "Cancel Fee",',
                        '"value": "',
                        Strings.toString(_cancelFee),
                        '"}',
                        "]}"
                    )
                )
            )
        );
        _setTokenURI(_tokenId, tokenURITemp);
        // console.log("tokenURI: ", tokenURI);
    }

    function burnReservationNFT(uint256 _tokenId) public {
        _burn(_tokenId);
    }

    function exists(uint256 _tokenId) public view returns (bool) {
        return _exists(_tokenId);
    }

    // override ERC721Enumerable
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function getTokenIdsByOwner(
        address owner
    ) public view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](balance);

        for (uint256 i = 0; i < balance; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(owner, i);
        }

        return tokenIds;
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
