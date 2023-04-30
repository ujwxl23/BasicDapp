// This file is used to deploy the contract to real etherium testnet.

const hre = require("hardhat");

async function main() { //Running the program in hardhat test environment
    const chai = await hre.ethers.getContractFactory("chai"); 
    const contract = await chai.deploy(); //deplay chai.sol
  
    await contract.deployed();
  
    console.log("Address of contract:",contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  