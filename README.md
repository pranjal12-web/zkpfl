# zkPFL 

**A revolutionary way to train Deep Learning AI Models through Proof of Stake & ZK Proofs!**

# Introduction

zkPFL stands for Zero Knowledge based Differentially Private Federated learning. It is a unique way to train DL models utilising blockchain, decentralised computing & Zero-Knowledge proofs for enhanced security & faster computations based on trustlessness & ultra-privacy.

# Federated Learning

Federated Learning is a privacy preserving scheme to train deep learning models. Data exists in isolated pools and clients that are part of the network train a model with base parameters on their own individual data. They share the updated model parameters with an aggregator that takes the federated average of this set of models. The result is going to be a new updated base model for the next epoch of training.

In a network of clients, you have to ensure that they are training models honestly so that the accuracy of the model improves. You can have malicious clients in a network that can sabotage the network and reduce model accuracy. We can solve this problem by leveraging a **Proof of Stake** architecture & **Partisia Blockchain's concept of MPC(Multi Party Computation) & BYOC(Bring your own coin)**

# Foundations

The foundation of this idea is this research paper on [Zero-Knowledge based Federated Learning](https://paperswithcode.com/paper/zkfl-zero-knowledge-proof-based-gradient) 

The motivation for the same was derived from [this talk](https://youtu.be/TrrioYjxWoM?si=GN9yXvNymIECJt1h) organised by [Partisia Blockchain](https://partisiablockchain.com/) delivered by the Co-founder **Brian Gallagher** on **AI is the new kid in the Block** discussing how Partisia is the most suitable chain for Multi-Party computation. 

# How it works

It is a **dual-side** platform where both a general user who wants their model to be trained and a client who will train the deep learning models uploaded by various users at their end using their own private datasets. 
Following is the link to the deployed zk based smart contract deployed on Partisia blockchain:
[Partisia Blockchain Browser](https://browser.testnet.partisiablockchain.com/contracts/030031ef6d22b69bd582b53753f133dc42280c891f)

**User side:**

* A user comes & uploads their DL model they want to be trained.
* Various parameters like the number of epochs, desired accuracy, number of activation functions & **initial weights and biases** are chosen.
* The model is then dumped on chain & sent to a decentralised server of zkPFL through parsing & encrypted on IPFS.
* The user has to pay a base fees of **100 MPC(Concept of BYOC is utilised)** Tokens as an incentive for the clients to train their model.

**Client side:**

* The client follows the **Proof-of-Stake** mechanism to avoid network spamming.
* They stake an amount of **500 MPC tokens(Concept of BYOC is utilised)** initially to participate in the training process.
* They then connect to a server on-chain which is decentralised( a smart contract server).
* They choose which model they wish to train from the list of models currently live(or available) for training.
* They receive the **model along with initial weights & biases** from the server.
* Each client then trains the model at their own end using their own private dataset.
* The concept of **Partisia Blockchain's MPC** then comes into play. Each client trains the model & learns a new set of weights & biases but they cannot share this with other clients to increase comeptency & thus increasing the reward they receive maintaining a fair competiton & also to avoid malicious clients to affect the parameters of the model.
* Each client separately sends the **new learnt weights and biases** to the **zk-nodes** which do an off-chain computation & commits a zk-proof of it on-chain by summing up all the matrices & then aggregating them to improve the accuarcy after each epoch.
* The aggregated weights & biases are now sent to the clients for next round of training .
* The process continues until the desired accuracy set by the user is reached & the newly learnt weights & biases are now sent back to the user.
* The rewards are distributed proportionally to the time it took for each client to train the model & also how accurately they trained the model. This maintains the ecosystem more active & thus keeps the network running.


# Why we built it on Partisia?

Well, the answer is pretty straight forward for this one. Partisa Blockchain has some unique concepts :-

* MPC(Multi Party Computation)
* BYOC(Bring your own Coin)
* Complete Sharding

  *We leveraged the first two to create an ecosystem where machine learning can happen in a truly decentralised manner involving trustlessness & robust speed.*
The concept of zk-nodes on partisia made it very logical & also much easier to build such an ecosystem compared to building it on any other chain.

# Potential Impact

The concept of Federated learning using MPC & POS has the potential to revolutionse how we train DL models today entirely. Private datasets such as healtcare & financial data can then be used worldwide to facilitate research while still remaining private. 

Alos, the need for computing power at everyone's end can also be eased up as large clients with heavy computational powers can train models for research organisations & individual people as well.

# What's next?

We plan to continue the project. We'll go through more edge cases & increase the type of model variety that can be trained. We also plan to import the server to GoLang for decreasing latency. We wish to collaborate with Partisia for helping us to make this idea come to life utilising Partisia Blockchain's ecosystem.
