// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require('hardhat')
const fs = require('fs')

async function main() {
  // Deploying
  const testFactory = await ethers.getContractFactory('uupsTest')
  const instance = await upgrades.deployProxy(testFactory, ['1.0.0'])
  await instance.deployed()

  // Currently Deployed: 0x0fCF38477599fC773c23860b21b56fC7a3bC52eC
  const message = `instance deployed at: ${instance.address}`
  console.log(message)
  fs.appendFileSync('../addresses.json', message, (err) => {
    if (err) throw err
    console.log('success!')
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
