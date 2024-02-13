/*
 * Copyright (C) 2022 - 2023 Partisia Blockchain Foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

// import {
//   getAverageApi,
//   isConnected,
//   setContractAbi,
//   setContractAddress,
//   setEngineKeys,
// } from "./AppState";
import {
  connectMetaMaskWalletClick,
  connectMpcWalletClick,
  connectPrivateKeyWalletClick,
  disconnectWalletClick,
  // updateContractState,
  // updateInteractionVisibility,
} from "./WalletIntegration";

// Setup event listener to connect to the MPC wallet browser extension
const connectWallet = <Element>document.querySelector("#wallet-connect-btn");
connectWallet.addEventListener("click", connectMpcWalletClick);

// Setup event listener to connect to the MetaMask snap
const metaMaskConnect = <Element>document.querySelector("#metamask-connect-btn");
metaMaskConnect.addEventListener("click", connectMetaMaskWalletClick);

// Setup event listener to connect to the MetaMask snap
const pkConnect = <Element>document.querySelector("#private-key-connect-btn");
pkConnect.addEventListener("click", connectPrivateKeyWalletClick);

// Setup event listener to drop the connection again
const disconnectWallet = <Element>document.querySelector("#wallet-disconnect-btn");
disconnectWallet.addEventListener("click", disconnectWalletClick);

// Setup event listener that sends a transfer transaction to the contract.
// This requires that a wallet has been connected.


const createNewTaskBtn = <Element>document.querySelector("#create");
createNewTaskBtn.addEventListener("click", handleCreateNewTask);

const Loginuser = <Element>document.querySelector("#user");
Loginuser.addEventListener("click", handleUserLogin);

const Loginclient = <Element>document.querySelector("#client");
Loginclient.addEventListener("click", handleClientLogin);

const StartSession = <Element>document.querySelector(".StartSession");
StartSession.addEventListener("click", handleStartSession);



function handleClientLogin(): void {
  const backgroundDiv = document.querySelectorAll('.clients, .clienttabs');
  const popupDiv = document.querySelector(".clientpaymentModalContent");

  if (backgroundDiv && popupDiv) {
    backgroundDiv.forEach((div) => {
      div.classList.add('visible');
    });
    popupDiv.classList.add('visible');
  }
}

const closeButton = document.querySelector(".Close") as HTMLElement;
closeButton.addEventListener("click", handleCloseButtonClick);

function handleCloseButtonClick(): void {
  const paymentModalContents = document.querySelectorAll('.userpaymentModalContent, .clientpaymentModalContent');
  const overlay = document.querySelector('.overlay') as HTMLElement;

  if (paymentModalContents) {
    paymentModalContents.forEach((modalContent) => {
      (modalContent as HTMLElement).style.display = 'none'; // Hide each modal
    });
  }

  if (overlay) {
    overlay.remove(); // Remove the overlay
  }
}



function handleStartSession(): void {
  const userpaymentModalContent = document.querySelector('.userpaymentModalContent') as HTMLElement;
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  if (userpaymentModalContent) {
    userpaymentModalContent.style.display = 'block'; // Show the modal
  }
}

function handleCreateNewTask(): void {
  const modalContainer = document.querySelector('.modalContainer');
  console.log("bvhbhtgtg");
  if (modalContainer) {
    modalContainer.classList.add('visible'); // Add a CSS class to make the modal visible
  }
}
function handleUserLogin(): void {
  const userElements = document.querySelectorAll('.users, .usertabs');
  console.log("bvhbhtgtg");
  userElements.forEach(element => {
    element.classList.add('visible'); // Add a CSS class to make the element visible
  });
}

// const sendEthButton = document.querySelector('.sendEthButton') as HTMLElement;

// // Event listener for sending Ethereum
// sendEthButton.addEventListener('click', () => {
//   console.log("Button clicked");

//   // Check if Ethereum provider is available
//   if (!(window as any).ethereum) {
//     console.error('Ethereum provider not found');
//     return;
//   }

//   try {
//     // Request permission to connect the wallet
//     const accounts =  (window as any).ethereum.request({ method: 'eth_requestAccounts' });
//     console.log(accounts);
//     console.log("accounts.length",accounts.length);
//     // If permission is granted, proceed with sending transaction
//     if (accounts) {
//       //console.log("yeahh")
//       // console.log(accounts[0])
//       // console.log(accounts[1])
//       (window as any).ethereum
//       .request({
//         method: 'eth_sendTransaction',
//         params: [
//           {
//             from: accounts, // Assuming accounts is an array and you want the first account.
//             to: '0x020EA46a48d00c190404366a5E7748FE2a45bE75', // Recipient address.
//             value: '0x5', // Amount to send in Wei.
//             gasLimit: '0x5028', // Gas limit.
//             maxPriorityFeePerGas: '0x3b9aca00', // Max priority fee per gas.
//             maxFeePerGas: '0x2540be400', // Max fee per gas.
//           },
//         ],
//       })
//       .then((txHash: string) => {
//         console.log('Transaction hash:', txHash);
//         // Handle the transaction hash here.
//       })}
//       else {
//       console.error('Permission denied');
//     }
//   } catch (error) {
//     console.error('Error sending transaction:', error);
//   }
// });

const usersendEthButton = document.querySelector('#userPayment-btn') as HTMLElement;
const UsertransactionHashContainer = document.getElementById('UsertransactionHashContainer') as HTMLElement;


usersendEthButton.addEventListener('click', async () => {
  try {
    if (!(window as any).ethereum) {
      console.error('Ethereum provider not found');
      return;
    }

    const provider = (window as any).ethereum;

    // Check if the provider has the send method
    if (!provider.send) {
      console.error('Provider does not support send method');
      return;
    }

    const params = [
      {
        from: '0x54651adfd19b33B5E4A5027bE9d6aE02C1C3284E', // Assuming accounts is an array and you want the first account.
        to: '0x020EA46a48d00c190404366a5E7748FE2a45bE75', // Recipient address.
        value: '50000000000000000', // Amount to send in Wei.
        gasLimit: '0x5028', // Gas limit.
        maxPriorityFeePerGas: '0x3b9aca00', // Max priority fee per gas.
        maxFeePerGas: '0x2540be400', // Max fee per gas.
      },
    ];

    // Call the send method to prompt the user to confirm and send the transaction
    const txHash = await provider.request({ method: 'eth_sendTransaction', params });

    console.log('Transaction sent successfully');
    console.log("TransactionHash", txHash);
    UsertransactionHashContainer.innerHTML = `Transaction Hash: ${txHash}`; // Update HTML content with transaction hash
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
});


const clientsendEthButton = document.querySelector('#clientPayment-btn') as HTMLElement;
const ClienttransactionHashContainer = document.getElementById('ClienttransactionHashContainer') as HTMLElement;


clientsendEthButton.addEventListener('click', async () => {
  try {
    if (!(window as any).ethereum) {
      console.error('Ethereum provider not found');
      return;
    }

    const provider = (window as any).ethereum;

    // Check if the provider has the send method
    if (!provider.send) {
      console.error('Provider does not support send method');
      return;
    }

    const params = [
      {
        from: '0x54651adfd19b33B5E4A5027bE9d6aE02C1C3284E', // Assuming accounts is an array and you want the first account.
        to: '0x020EA46a48d00c190404366a5E7748FE2a45bE75', // Recipient address.
        value: '100000000000000000', // Amount to send in Wei.
        gasLimit: '0x5028', // Gas limit.
        maxPriorityFeePerGas: '0x3b9aca00', // Max priority fee per gas.
        maxFeePerGas: '0x2540be400', // Max fee per gas.
      },
    ];

    // Call the send method to prompt the user to confirm and send the transaction
    const txHash = await provider.request({ method: 'eth_sendTransaction', params });

    console.log('Transaction sent successfully');
    console.log("TransactionHash", txHash);
    ClienttransactionHashContainer.innerHTML = `Transaction Hash: ${txHash}`; // Update HTML content with transaction hash
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
});





/** Function for the contract address form.
 * This is called when the user clicks on the connect to contract button.
 * It validates the address, and then gets the state for the contract.
 */
// function contractAddressClick() {
//   const address = (<HTMLInputElement>document.querySelector("#address-value")).value;
//   const regex = /[0-9A-Fa-f]{42}/g;
//   if (address === undefined) {
//     throw new Error("Need to provide a contract address");
//   } else if (address.length != 42 || address.match(regex) == null) {
//     // Validate that address is 21 bytes in hexidecimal format
//     console.error(`${address} is not a valid PBC address`);
//   } else {
//     // Show address and a link to the browser.
//     const currentAddress = <HTMLInputElement>document.querySelector("#current-address");
//     currentAddress.innerHTML = `Average Salary Address: ${address}`;
//     const browserLink = <HTMLInputElement>document.querySelector("#browser-link");
//     browserLink.innerHTML = `<a href="https://browser.testnet.partisiablockchain.com/contracts/${address}" target="_blank">Browser link</a>`;

//     // Reset abi and engine keys
//     setContractAbi(undefined);
//     setEngineKeys(undefined);
//     // Update the contract state.
//     setContractAddress(address);
//     updateInteractionVisibility();
//     updateContractState();
//   }
// }

// /**
//  * Form action for the add salary form.
//  * The action reads the value from the input field and validates them.
//  */
// function addSalaryFormAction() {
//   // Test if a user has connected via the MPC wallet extension
//   if (isConnected()) {
//     const salary = <HTMLInputElement>document.querySelector("#salary");
//     if (isNaN(parseInt(salary.value, 10))) {
//       // Validate that amount is a number
//       console.error("Salary must be a number");
//     } else {
//       // All fields validated, add salary.

//       // If the user has inputted a correct average salary address this should be defined.
//       const api = getAverageApi();
//       if (api !== undefined) {
//         // Add salary via Average Salary api
//         const browserLink = <HTMLInputElement>(
//           document.querySelector("#add-salary-transaction-link")
//         );
//         browserLink.innerHTML = '<br><div class="loader"></div>';
//         api
//           .addSalary(parseInt(salary.value, 10))
//           .then((transactionHash) => {
//             browserLink.innerHTML = `<br><a href="https://browser.testnet.partisiablockchain.com/transactions/${transactionHash}" target="_blank">Transaction link in browser</a>`;
//           })
//           .catch((msg) => {
//             browserLink.innerHTML = `<br>${msg}`;
//           });
//       }
//     }
//   } else {
//     console.error("Cannot transfer without a connected wallet!");
//   }
// }

// /** Action for the compute average salary button */
// function computeAction() {
//   // User is connected and the Average Salary Api is defined
//   const api = getAverageApi();
//   const browserLink = <HTMLInputElement>document.querySelector("#compute-transaction-link");
//   browserLink.innerHTML = '<br><div class="loader"></div>';
//   if (isConnected() && api !== undefined) {
//     // Call compute via the Api
//     api
//       .compute()
//       .then((transactionHash) => {
//         browserLink.innerHTML = `<br><a href="https://browser.testnet.partisiablockchain.com/transactions/${transactionHash}" target="_blank">Transaction link in browser</a>`;
//       })
//       .catch((msg) => {
//         browserLink.innerHTML = `<br>${msg}`;
//       });
//   }
// }