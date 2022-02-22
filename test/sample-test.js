const { expect } = require("chai");

describe("AlienCodex", function () {
  it("Should change the owner", async function () {
    
    const [deployer, hacker] = await ethers.getSigners();
    
    const AllienCodex = await ethers.getContractFactory("AllienCodex", deployer);

    this.allienCodex = await AllienCodex.deploy();

    console.log(`AllienCodex deployed to: ${this.allienCodex.address}`);
    console.log(`With onwner: ${await this.allienCodex.owner()}`)

    expect(await this.allienCodex.owner()).to.equal(deployer.address)
    expect(await this.allienCodex.contact()).to.be.false;
    await this.allienCodex.make_contact();
    expect(await this.allienCodex.contact()).to.be.true;

    await this.allienCodex.retract();
    let index = ethers.utils.keccak256(ethers.utils.formatBytes32String(1));
    console.log(index.toString())

    // await this.allienCodex.revise(34, ethers.utils.formatBytes32String(1));

    
  });
});
