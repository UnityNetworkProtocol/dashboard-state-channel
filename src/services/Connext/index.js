import Connext from "connext"
import getWeb3 from "./utils/getWeb3";

export default getWeb3()
.then(web3 => {
  return new Connext({
    web3: web3,                       
    hubAddress: "0x7F2C856d4c995A5599C26f51FF58877966e57d92",
    hubUrl: "http://localhost:3000",
    contractAddress: "0xEcf923cE0b6D1A8c6A6d4a5eCa65De8B62B6f54a"
  })

  // const accounts = r.eth.getAccounts()
  // .then( ac => console.log(ac));

} )
.catch(r => console.log(r) )