// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require('hardhat')

async function main() {
  try {
    const deployed = `0x8d65eCC7312c4D930BF4769C1C374AF0B3A26E13`
    // Deploying
    const testV4Factory = await ethers.getContractFactory('transparentTestV4')
    await upgrades.upgradeProxy(deployed, testV4Factory)

    const instance = testV4Factory.attach(deployed)
    const tx = await instance.reInitVersion('4.0.0')
    tx.wait()

    // Deployed at:
    console.log('success!')
  } catch (err) {
    console.log(err)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
