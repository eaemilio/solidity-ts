import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { contractData } from '../compile';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ganache = require('ganache-cli');

const web3 = new Web3(ganache.provider());

let accounts: string[];
let inbox: Contract;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(contractData.interface))
    .deploy({ data: contractData.bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: 300000 });
});

describe('Inbox', () => {
  it('Deploys a contract', () => {
    console.log(inbox);
  });
});
