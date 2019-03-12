pragma solidity ^0.5.0;

contract LimeFactory {event __CoverageLimeFactory(string fileName, uint256 lineNumber);
event __FunctionCoverageLimeFactory(string fileName, uint256 fnId);
event __StatementCoverageLimeFactory(string fileName, uint256 statementId);
event __BranchCoverageLimeFactory(string fileName, uint256 branchId, uint256 locationIdx);
event __AssertPreCoverageLimeFactory(string fileName, uint256 branchId);
event __AssertPostCoverageLimeFactory(string fileName, uint256 branchId);

    event FreshLime(string name);

    struct Lime {
        string name;
        uint8 carbohydrates;
        uint8 fat;
        uint8 protein;  
    }

    Lime[] public limes;

    function createLime(string memory _name, uint8 _carbohydrates, uint8 _fat, uint8 _protein) public {emit __FunctionCoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',1);

emit __CoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',16);
        emit __AssertPreCoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',1);
emit __StatementCoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',1);
require(_carbohydrates != 0);emit __AssertPostCoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',1);

emit __CoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',17);
        limes.push(Lime(_name, _carbohydrates, _fat, _protein));
emit __CoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',18);
        emit __StatementCoverageLimeFactory('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/LimeFactory.sol',2);
emit FreshLime(_name);
    }
}