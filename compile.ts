import { compileSol } from 'solc-typed-ast'

export interface ContractData {
  assembly: unknown;
  bytecode: string;
  interface: string;
}

const contract = compileSol("./contracts/Inbox.sol", "auto", []);
export const contractData = contract.data.contracts['./contracts/Inbox.sol:Inbox'] as ContractData;
