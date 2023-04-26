// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require('hardhat')

async function main() {
  try {
    const deployed = `0x0fCF38477599fC773c23860b21b56fC7a3bC52eC`
    // Deploying
    const testV5Factory = await ethers.getContractFactory('uupsTestV5')
    await upgrades.upgradeProxy(deployed, testV5Factory, {
      call: { fn: 'reInitVersion', args: ['5.0.0'] },
    })

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
