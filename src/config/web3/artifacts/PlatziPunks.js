const PlatziPunksArtifact = {
  address: {
    3: "0xeAd5Ea034f31eAA47D0554a966D8Ac82A282574E",
  },
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_courseId",
          "type": "string"
        }
      ],
      "name": "buyCourse",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_courseId",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "editCourses",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllCoursesPrice",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "_courseId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "internalType": "struct EggVentas.dataCourse[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_courseId",
          "type": "string"
        }
      ],
      "name": "getCoursePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "student",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_courseId",
          "type": "string"
        }
      ],
      "name": "getSale",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isExist",
              "type": "bool"
            }
          ],
          "internalType": "struct EggVentas.dataSale",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
};

export default PlatziPunksArtifact;
