import { Injectable } from '@angular/core';
import {ContractFactory, ethers, providers} from 'ethers';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})

export class ContractService {

  contractABI = ''
  contractBytecode = ''
  privateKey = ''
  alcProvider = null
  signer = null

  constructor(private dataService : DataService) {
    this.contractABI = environment.contractABI
    this.contractBytecode = environment.contractBytecode
    this.privateKey = environment.privateKey

    this.alcProvider = new ethers.providers.AlchemyProvider("goerli", "OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8")

    this.signer = new ethers.Wallet(this.privateKey, this.alcProvider)
  }

  //Deploys contract to blockchain and returns ID
  async deploy(id, sd, ed, sizes) : Promise<String> {
    console.log("Deploying...")
    const contractFactory = new ContractFactory(this.contractABI, this.contractBytecode, this.signer)
 
    const contract = await contractFactory.deploy(id, sd, ed, sizes)

    await contract.deployed()
    console.log("Success! : ", await contract.address)

    return await contract.address
  }

  //Register voter for election
  async addVoter(contractAddress, voter) {
    const contract = new ethers.Contract(contractAddress, this.contractABI, this.signer)

    try {
      const tx = await contract.registerUser(voter.IDnum, voter.Age, voter.Gender, {gasLimit : 250000})
      await tx.wait()
    }
    catch(error) {
      console.error(error)
    }
  }

  //Add a vote to the specified election, at specified indices
  async addVote(contractAddress, votes) {
    const contract = new ethers.Contract(contractAddress, this.contractABI, this.signer)

    //Call method
    try {
      const tx = await contract.addVote(this.dataService.voterId, votes, {gasLimit : 250000})
      await tx.wait()
    }
    catch(error) {
      console.error(error)
    }
  }
}
