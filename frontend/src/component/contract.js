import { Contract } from '@ethersproject/contracts'

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address, ABI, library, account) {

  return new Contract(address, ABI, getProviderOrSigner(library, account))
}

