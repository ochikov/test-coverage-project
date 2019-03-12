{
  type: 'Program',
    body:
  [{
    type: 'PragmaStatement',
    start_version: [Object],
    end_version: null,
    start: 0,
    end: 23
  },
  {
    type: 'ContractStatement',
    name: 'FoodCart',
    is: [],
    body: [Array],
    start: 25,
    end: 2452
  }],
    start: 0,
      end: 2452
};


{
  type: 'Program',
    body:
  [{
    type: 'PragmaStatement',
    start_version: [Object],
    end_version: null,
    start: 0,
    end: 23
  },
  {
    type: 'ContractStatement',
    name: 'LimeFactory',
    is: [],
    body: [Array],
    start: 25,
    end: 474
  }],
    start: 0,
      end: 474
}


-------

  {
    type: 'SourceUnit',
    children:
      [{ type: 'PragmaDirective', name: 'solidity', value: '^0.5.0' },
      {
        type: 'ContractDefinition',
        name: 'FoodCart',
        baseContracts: [],
        subNodes: [Array],
        kind: 'contract'
      }]
  }



----------------------------------------------

  NODE {
  type: 'SourceUnit',
    children:
  [{ type: 'PragmaDirective', name: 'solidity', value: '0.5.1' },
  {
    type: 'ContractDefinition',
    name: 'ECTools',
    baseContracts: [],
    subNodes: [Array],
    kind: 'library'
  }]
}
NODE { type: 'PragmaDirective', name: 'solidity', value: '0.5.1' }
NODE {
  type: 'ContractDefinition',
    name: 'ECTools',
      baseContracts: [],
        subNodes:
  [{
    type: 'FunctionDefinition',
    name: 'recover',
    parameters: [Object],
    returnParameters: [Object],
    body: [Object],
    visibility: 'public',
    modifiers: [],
    isConstructor: false,
    stateMutability: 'pure'
  },
  {
    type: 'FunctionDefinition',
    name: 'toEthereumSignedMessage',
    parameters: [Object],
    returnParameters: [Object],
    body: [Object],
    visibility: 'public',
    modifiers: [],
    isConstructor: false,
    stateMutability: 'pure'
  },
  {
    type: 'FunctionDefinition',
    name: 'prefixedRecover',
    parameters: [Object],
    returnParameters: [Object],
    body: [Object],
    visibility: 'public',
    modifiers: [],
    isConstructor: false,
    stateMutability: 'pure'
  }],
    kind: 'library'
}
NODE {
  type: 'FunctionDefinition',
    name: 'recover',
      parameters: { type: 'ParameterList', parameters: [[Object], [Object]] },
  returnParameters: { type: 'ParameterList', parameters: [[Object]] },
  body:
  {
    type: 'Block',
      statements:
    [[Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object]]
  },
  visibility: 'public',
    modifiers: [],
      isConstructor: false,
        stateMutability: 'pure'
}
NODE {
  type: 'ParameterList',
    parameters:
  [{
    type: 'Parameter',
    typeName: [Object],
    name: 'originalMessage',
    storageLocation: null,
    isStateVar: false,
    isIndexed: false
  },
  {
    type: 'Parameter',
    typeName: [Object],
    name: 'signedMessage',
    storageLocation: 'memory',
    isStateVar: false,
    isIndexed: false
  }]
}
NODE {
  type: 'Parameter',
    typeName: { type: 'ElementaryTypeName', name: 'bytes32' },
  name: 'originalMessage',
    storageLocation: null,
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'bytes32' }
NODE {
  type: 'Parameter',
    typeName: { type: 'ElementaryTypeName', name: 'bytes' },
  name: 'signedMessage',
    storageLocation: 'memory',
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'bytes' }
NODE {
  type: 'ParameterList',
    parameters:
  [{
    type: 'Parameter',
    typeName: [Object],
    name: null,
    storageLocation: null,
    isStateVar: false,
    isIndexed: false
  }]
}
NODE {
  type: 'Parameter',
    typeName: { type: 'ElementaryTypeName', name: 'address' },
  name: null,
    storageLocation: null,
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'address' }
NODE {
  type: 'Block',
    statements:
  [{
    type: 'VariableDeclarationStatement',
    variables: [Array],
    initialValue: null
  },
  {
    type: 'VariableDeclarationStatement',
    variables: [Array],
    initialValue: null
  },
  {
    type: 'VariableDeclarationStatement',
    variables: [Array],
    initialValue: null
  },
  {
    type: 'IfStatement',
    condition: [Object],
    trueBody: [Object],
    falseBody: null
  },
  {
    type: 'InlineAssemblyStatement',
    language: null,
    body: [Object]
  },
  {
    type: 'IfStatement',
    condition: [Object],
    trueBody: [Object],
    falseBody: null
  },
  {
    type: 'IfStatement',
    condition: [Object],
    trueBody: [Object],
    falseBody: [Object]
  }]
}
NODE {
  type: 'VariableDeclarationStatement',
    variables:
  [{
    type: 'VariableDeclaration',
    typeName: [Object],
    name: 'r',
    storageLocation: null,
    isStateVar: false,
    isIndexed: false
  }],
    initialValue: null
}
NODE {
  type: 'VariableDeclaration',
    typeName: { type: 'ElementaryTypeName', name: 'bytes32' },
  name: 'r',
    storageLocation: null,
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'bytes32' }
NODE {
  type: 'VariableDeclarationStatement',
    variables:
  [{
    type: 'VariableDeclaration',
    typeName: [Object],
    name: 's',
    storageLocation: null,
    isStateVar: false,
    isIndexed: false
  }],
    initialValue: null
}
NODE {
  type: 'VariableDeclaration',
    typeName: { type: 'ElementaryTypeName', name: 'bytes32' },
  name: 's',
    storageLocation: null,
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'bytes32' }
NODE {
  type: 'VariableDeclarationStatement',
    variables:
  [{
    type: 'VariableDeclaration',
    typeName: [Object],
    name: 'v',
    storageLocation: null,
    isStateVar: false,
    isIndexed: false
  }],
    initialValue: null
}
NODE {
  type: 'VariableDeclaration',
    typeName: { type: 'ElementaryTypeName', name: 'uint8' },
  name: 'v',
    storageLocation: null,
      isStateVar: false,
        isIndexed: false
}
NODE { type: 'ElementaryTypeName', name: 'uint8' }
NODE {
  type: 'IfStatement',
    condition:
  {
    type: 'BinaryOperation',
      operator: '!=',
        left:
    {
      type: 'MemberAccess',
        expression: [Object],
          memberName: 'length'
    },
    right: { type: 'NumberLiteral', number: '65', subdenomination: null }
  },
  trueBody: { type: 'Block', statements: [[Object]] },
  falseBody: null
}




