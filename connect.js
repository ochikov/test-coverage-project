const ethers = require('ethers');
const contractAddress = '0x67044E3c8D2E1658419e4E177B4D3F64d442D6B1';
const Verifier = require('./build/Verifier.json');
const etherlime = require('etherlime');



const test = async () => {
	const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
	const signer = await provider.getSigner();
	const contractInstance = await etherlime.ContractAt(Verifier, contractAddress, signer, provider);
	const test = await contractInstance.verifyProof(["0x284b28523024056fa7694a1936dddb134109e61396af7f29ca61d4f2fa0e4d18", "0x1babcd69c1b190e33aee053911a5f42f5650988116047f861a098f20ad2dca27"],
		["0x0dd72ff1b926e7d570bd2cc76647740c0fa436af10090c2f6a79c29b16d1bb6a", "0x1fccb6eddb767c891a2183142d4fbb2b4b989d9715174f4df5080a06328f5e36"],
		[["0x0e80630b8542bb1e2831891fdf6319efd32e8968c9140fd484dd26e42fd85190", "0x2bc0812d1842f8ac44a21c6a15bf00a35ad0824e6a7cfb18b5e4ab3141e2a2bf"], ["0x27b149c6d22bf802267ce443ba0642d3d63f81adb7a6ad81dcc71b0c21d0f6c5", "0x02d2b36b64886192d28f67d9f13320afebaf885e909809ce8482ed7bc87650ef"]],
		["0x0295a2853f0e9e4c6ba75c58d64cf04fcd039b5db5a2a29b29d831984ec13e16", "0x271686594c5f035ecc9109770218353c9c59cdfe65c30426de93bda034aa27af"],
		["0x2d837c1ae7d6de98fd362e613608f9a5aef90ae9f2a6cbbb5dd17e7d17acb39c", "0x21989306ef8e30bd7ce53db556f69e03182ea60e82a1fb92148f39cbc176107a"],
		["0x134128ce5620763766171d08823a7da5b5237069940b9ff0147db7d616c3863e", "0x16c914c18c9467aefdb65205a3286f602097f7d774a17774941b0bc33dff3c4f"],
		["0x0cfac12f94951c9ca98d0f888bfbc359e0bcfd022240152942b0e6db9955a9ea", "0x178b9228670d7474c50223247dbcde53f17f6ddfc9dec9edf914debbfc886fa8"],
		["0x18b0ee5cfd213eb51289c51707f9ca4e2b3a5c4f6aa21fc09e68561370b20a45", "0x1ba2d8e49c8e9345fdbd3609b9a53d6afba75641a17e192c39cd3b3d4b7cd0be"],
		["0x0000000000000000000000000000000000000000000000000000000000000021"])
	console.log('HERE', test);
}



test();