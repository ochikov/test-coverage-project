id: 'signedMessage',
is_indexed: false,
is_storage: false,
is_memory: true,
start: 343,
end: 369 }
NODE { type: 'Type',
literal: 'bytes',
members: [],
array_parts: [],
start: 343,
end: 348 }
NODE { type: 'ModifierArgument',
name: 'public',
params: [],
start: 371,
end: 379 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'address',
   members: [],
   array_parts: [],
   start: 388,
   end: 395 },
id: undefined,
is_indexed: false,
is_storage: false,
is_memory: false,
start: 388,
end: 395 }
NODE { type: 'Type',
literal: 'address',
members: [],
array_parts: [],
start: 388,
end: 395 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 407,
	 end: 417 },
   { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 426,
	 end: 436 },
   { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 445,
	 end: 453 },
   { type: 'IfStatement',
	 test: [Object],
	 consequent: [Object],
	 alternate: null,
	 start: 500,
	 end: 576 },
   { type: 'InlineAssemblyStatement',
	 body: [Object],
	 start: 642,
	 end: 812 },
   { type: 'IfStatement',
	 test: [Object],
	 consequent: [Object],
	 alternate: null,
	 start: 913,
	 end: 957 },
   { type: 'IfStatement',
	 test: [Object],
	 consequent: [Object],
	 alternate: [Object],
	 start: 1030,
	 end: 1171 } ],
start: 397,
end: 1177 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'DeclarativeExpression',
   name: 'r',
   literal: 
	{ type: 'Type',
	  literal: 'bytes32',
	  members: [],
	  array_parts: [],
	  start: 407,
	  end: 414 },
   storage_location: null,
   start: 407,
   end: 416 },
start: 407,
end: 417 }
NODE { type: 'DeclarativeExpression',
name: 'r',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 407,
   end: 414 },
storage_location: null,
start: 407,
end: 416 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 407,
end: 414 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'DeclarativeExpression',
   name: 's',
   literal: 
	{ type: 'Type',
	  literal: 'bytes32',
	  members: [],
	  array_parts: [],
	  start: 426,
	  end: 433 },
   storage_location: null,
   start: 426,
   end: 435 },
start: 426,
end: 436 }
NODE { type: 'DeclarativeExpression',
name: 's',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 426,
   end: 433 },
storage_location: null,
start: 426,
end: 435 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 426,
end: 433 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'DeclarativeExpression',
   name: 'v',
   literal: 
	{ type: 'Type',
	  literal: 'uint8',
	  members: [],
	  array_parts: [],
	  start: 445,
	  end: 450 },
   storage_location: null,
   start: 445,
   end: 452 },
start: 445,
end: 453 }
NODE { type: 'DeclarativeExpression',
name: 'v',
literal: 
 { type: 'Type',
   literal: 'uint8',
   members: [],
   array_parts: [],
   start: 445,
   end: 450 },
storage_location: null,
start: 445,
end: 452 }
NODE { type: 'Type',
literal: 'uint8',
members: [],
array_parts: [],
start: 445,
end: 450 }
NODE { type: 'IfStatement',
test: 
 { type: 'BinaryExpression',
   operator: '!=',
   left: 
	{ type: 'MemberExpression',
	  object: [Object],
	  property: [Object],
	  computed: false,
	  start: 504,
	  end: 524 },
   right: { type: 'Literal', value: 65, start: 528, end: 530 },
   start: 504,
   end: 530 },
consequent: 
 { type: 'BlockStatement',
   body: [ [Object] ],
   start: 532,
   end: 576 },
alternate: null,
start: 500,
end: 576 }
NODE { type: 'BinaryExpression',
operator: '!=',
left: 
 { type: 'MemberExpression',
   object: 
	{ type: 'Identifier',
	  name: 'signedMessage',
	  start: 504,
	  end: 517 },
   property: { type: 'Identifier', name: 'length', start: 518, end: 524 },
   computed: false,
   start: 504,
   end: 524 },
right: { type: 'Literal', value: 65, start: 528, end: 530 },
start: 504,
end: 530 }
NODE { type: 'MemberExpression',
object: 
 { type: 'Identifier',
   name: 'signedMessage',
   start: 504,
   end: 517 },
property: { type: 'Identifier', name: 'length', start: 518, end: 524 },
computed: false,
start: 504,
end: 524 }
NODE { type: 'Identifier',
name: 'signedMessage',
start: 504,
end: 517 }
NODE { type: 'Identifier', name: 'length', start: 518, end: 524 }
NODE { type: 'Literal', value: 65, start: 528, end: 530 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ReturnStatement',
	 argument: [Object],
	 start: 546,
	 end: 566 } ],
start: 532,
end: 576 }
NODE { type: 'ReturnStatement',
argument: 
 { type: 'CallExpression',
   callee: { type: 'Identifier', name: 'address', start: 554, end: 561 },
   arguments: [ [Object] ],
   start: 554,
   end: 564 },
start: 546,
end: 566 }
NODE { type: 'CallExpression',
callee: { type: 'Identifier', name: 'address', start: 554, end: 561 },
arguments: [ { type: 'Literal', value: 0, start: 562, end: 563 } ],
start: 554,
end: 564 }
NODE { type: 'Identifier', name: 'address', start: 554, end: 561 }
NODE { type: 'Literal', value: 0, start: 562, end: 563 }
NODE { type: 'InlineAssemblyStatement',
body: 
 { type: 'InlineAssemblyBlock',
   items: [ [Object], [Object], [Object] ],
   start: 651,
   end: 812 },
start: 642,
end: 812 }
NODE { type: 'InlineAssemblyBlock',
items: 
 [ { type: 'AssemblyAssignment',
	 name: [Object],
	 expression: [Object],
	 start: 665,
	 end: 699 },
   { type: 'AssemblyAssignment',
	 name: [Object],
	 expression: [Object],
	 start: 712,
	 end: 746 },
   { type: 'AssemblyAssignment',
	 name: [Object],
	 expression: [Object],
	 start: 759,
	 end: 802 } ],
start: 651,
end: 812 }
NODE { type: 'AssemblyAssignment',
name: { type: 'Identifier', name: 'r', start: 665, end: 666 },
expression: 
 { type: 'FunctionalAssemblyInstruction',
   name: { type: 'Identifier', name: 'mload', start: 670, end: 675 },
   arguments: [ [Object] ],
   start: 670,
   end: 699 },
start: 665,
end: 699 }
NODE { type: 'Identifier', name: 'r', start: 665, end: 666 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'mload', start: 670, end: 675 },
arguments: 
 [ { type: 'FunctionalAssemblyInstruction',
	 name: [Object],
	 arguments: [Array],
	 start: 676,
	 end: 698 } ],
start: 670,
end: 699 }
NODE { type: 'Identifier', name: 'mload', start: 670, end: 675 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'add', start: 676, end: 679 },
arguments: 
 [ { type: 'Identifier',
	 name: 'signedMessage',
	 start: 680,
	 end: 693 },
   { type: 'Literal', value: 32, start: 695, end: 697 } ],
start: 676,
end: 698 }
NODE { type: 'Identifier', name: 'add', start: 676, end: 679 }
NODE { type: 'Identifier',
name: 'signedMessage',
start: 680,
end: 693 }
NODE { type: 'Literal', value: 32, start: 695, end: 697 }
NODE { type: 'AssemblyAssignment',
name: { type: 'Identifier', name: 's', start: 712, end: 713 },
expression: 
 { type: 'FunctionalAssemblyInstruction',
   name: { type: 'Identifier', name: 'mload', start: 717, end: 722 },
   arguments: [ [Object] ],
   start: 717,
   end: 746 },
start: 712,
end: 746 }
NODE { type: 'Identifier', name: 's', start: 712, end: 713 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'mload', start: 717, end: 722 },
arguments: 
 [ { type: 'FunctionalAssemblyInstruction',
	 name: [Object],
	 arguments: [Array],
	 start: 723,
	 end: 745 } ],
start: 717,
end: 746 }
NODE { type: 'Identifier', name: 'mload', start: 717, end: 722 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'add', start: 723, end: 726 },
arguments: 
 [ { type: 'Identifier',
	 name: 'signedMessage',
	 start: 727,
	 end: 740 },
   { type: 'Literal', value: 64, start: 742, end: 744 } ],
start: 723,
end: 745 }
NODE { type: 'Identifier', name: 'add', start: 723, end: 726 }
NODE { type: 'Identifier',
name: 'signedMessage',
start: 727,
end: 740 }
NODE { type: 'Literal', value: 64, start: 742, end: 744 }
NODE { type: 'AssemblyAssignment',
name: { type: 'Identifier', name: 'v', start: 759, end: 760 },
expression: 
 { type: 'FunctionalAssemblyInstruction',
   name: { type: 'Identifier', name: 'byte', start: 764, end: 768 },
   arguments: [ [Object], [Object] ],
   start: 764,
   end: 802 },
start: 759,
end: 802 }
NODE { type: 'Identifier', name: 'v', start: 759, end: 760 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'byte', start: 764, end: 768 },
arguments: 
 [ { type: 'Literal', value: 0, start: 769, end: 770 },
   { type: 'FunctionalAssemblyInstruction',
	 name: [Object],
	 arguments: [Array],
	 start: 772,
	 end: 801 } ],
start: 764,
end: 802 }
NODE { type: 'Identifier', name: 'byte', start: 764, end: 768 }
NODE { type: 'Literal', value: 0, start: 769, end: 770 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'mload', start: 772, end: 777 },
arguments: 
 [ { type: 'FunctionalAssemblyInstruction',
	 name: [Object],
	 arguments: [Array],
	 start: 778,
	 end: 800 } ],
start: 772,
end: 801 }
NODE { type: 'Identifier', name: 'mload', start: 772, end: 777 }
NODE { type: 'FunctionalAssemblyInstruction',
name: { type: 'Identifier', name: 'add', start: 778, end: 781 },
arguments: 
 [ { type: 'Identifier',
	 name: 'signedMessage',
	 start: 782,
	 end: 795 },
   { type: 'Literal', value: 96, start: 797, end: 799 } ],
start: 778,
end: 800 }
NODE { type: 'Identifier', name: 'add', start: 778, end: 781 }
NODE { type: 'Identifier',
name: 'signedMessage',
start: 782,
end: 795 }
NODE { type: 'Literal', value: 96, start: 797, end: 799 }
NODE { type: 'IfStatement',
test: 
 { type: 'BinaryExpression',
   operator: '<',
   left: { type: 'Identifier', name: 'v', start: 917, end: 918 },
   right: { type: 'Literal', value: 27, start: 921, end: 923 },
   start: 917,
   end: 923 },
consequent: 
 { type: 'BlockStatement',
   body: [ [Object] ],
   start: 925,
   end: 957 },
alternate: null,
start: 913,
end: 957 }
NODE { type: 'BinaryExpression',
operator: '<',
left: { type: 'Identifier', name: 'v', start: 917, end: 918 },
right: { type: 'Literal', value: 27, start: 921, end: 923 },
start: 917,
end: 923 }
NODE { type: 'Identifier', name: 'v', start: 917, end: 918 }
NODE { type: 'Literal', value: 27, start: 921, end: 923 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 939,
	 end: 947 } ],
start: 925,
end: 957 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'AssignmentExpression',
   operator: '+=',
   left: { type: 'Identifier', name: 'v', start: 939, end: 940 },
   right: { type: 'Literal', value: 27, start: 944, end: 946 },
   start: 939,
   end: 946 },
start: 939,
end: 947 }
NODE { type: 'AssignmentExpression',
operator: '+=',
left: { type: 'Identifier', name: 'v', start: 939, end: 940 },
right: { type: 'Literal', value: 27, start: 944, end: 946 },
start: 939,
end: 946 }
NODE { type: 'Identifier', name: 'v', start: 939, end: 940 }
NODE { type: 'Literal', value: 27, start: 944, end: 946 }
NODE { type: 'IfStatement',
test: 
 { type: 'BinaryExpression',
   operator: '&&',
   left: 
	{ type: 'BinaryExpression',
	  operator: '!=',
	  left: [Object],
	  right: [Object],
	  start: 1034,
	  end: 1041 },
   right: 
	{ type: 'BinaryExpression',
	  operator: '!=',
	  left: [Object],
	  right: [Object],
	  start: 1045,
	  end: 1052 },
   start: 1034,
   end: 1052 },
consequent: 
 { type: 'BlockStatement',
   body: [ [Object] ],
   start: 1054,
   end: 1098 },
alternate: 
 { type: 'BlockStatement',
   body: [ [Object] ],
   start: 1104,
   end: 1171 },
start: 1030,
end: 1171 }
NODE { type: 'BinaryExpression',
operator: '&&',
left: 
 { type: 'BinaryExpression',
   operator: '!=',
   left: { type: 'Identifier', name: 'v', start: 1034, end: 1035 },
   right: { type: 'Literal', value: 27, start: 1039, end: 1041 },
   start: 1034,
   end: 1041 },
right: 
 { type: 'BinaryExpression',
   operator: '!=',
   left: { type: 'Identifier', name: 'v', start: 1045, end: 1046 },
   right: { type: 'Literal', value: 28, start: 1050, end: 1052 },
   start: 1045,
   end: 1052 },
start: 1034,
end: 1052 }
NODE { type: 'BinaryExpression',
operator: '!=',
left: { type: 'Identifier', name: 'v', start: 1034, end: 1035 },
right: { type: 'Literal', value: 27, start: 1039, end: 1041 },
start: 1034,
end: 1041 }
NODE { type: 'Identifier', name: 'v', start: 1034, end: 1035 }
NODE { type: 'Literal', value: 27, start: 1039, end: 1041 }
NODE { type: 'BinaryExpression',
operator: '!=',
left: { type: 'Identifier', name: 'v', start: 1045, end: 1046 },
right: { type: 'Literal', value: 28, start: 1050, end: 1052 },
start: 1045,
end: 1052 }
NODE { type: 'Identifier', name: 'v', start: 1045, end: 1046 }
NODE { type: 'Literal', value: 28, start: 1050, end: 1052 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ReturnStatement',
	 argument: [Object],
	 start: 1068,
	 end: 1088 } ],
start: 1054,
end: 1098 }
NODE { type: 'ReturnStatement',
argument: 
 { type: 'CallExpression',
   callee: { type: 'Identifier', name: 'address', start: 1076, end: 1083 },
   arguments: [ [Object] ],
   start: 1076,
   end: 1086 },
start: 1068,
end: 1088 }
NODE { type: 'CallExpression',
callee: { type: 'Identifier', name: 'address', start: 1076, end: 1083 },
arguments: [ { type: 'Literal', value: 0, start: 1084, end: 1085 } ],
start: 1076,
end: 1086 }
NODE { type: 'Identifier', name: 'address', start: 1076, end: 1083 }
NODE { type: 'Literal', value: 0, start: 1084, end: 1085 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ReturnStatement',
	 argument: [Object],
	 start: 1118,
	 end: 1161 } ],
start: 1104,
end: 1171 }
NODE { type: 'ReturnStatement',
argument: 
 { type: 'CallExpression',
   callee: { type: 'Identifier', name: 'ecrecover', start: 1125, end: 1134 },
   arguments: [ [Object], [Object], [Object], [Object] ],
   start: 1125,
   end: 1160 },
start: 1118,
end: 1161 }
NODE { type: 'CallExpression',
callee: { type: 'Identifier', name: 'ecrecover', start: 1125, end: 1134 },
arguments: 
 [ { type: 'Identifier',
	 name: 'originalMessage',
	 start: 1135,
	 end: 1150 },
   { type: 'Identifier', name: 'v', start: 1152, end: 1153 },
   { type: 'Identifier', name: 'r', start: 1155, end: 1156 },
   { type: 'Identifier', name: 's', start: 1158, end: 1159 } ],
start: 1125,
end: 1160 }
NODE { type: 'Identifier', name: 'ecrecover', start: 1125, end: 1134 }
NODE { type: 'Identifier',
name: 'originalMessage',
start: 1135,
end: 1150 }
NODE { type: 'Identifier', name: 'v', start: 1152, end: 1153 }
NODE { type: 'Identifier', name: 'r', start: 1155, end: 1156 }
NODE { type: 'Identifier', name: 's', start: 1158, end: 1159 }
NODE { type: 'FunctionDeclaration',
name: 'toEthereumSignedMessage',
params: 
 [ { type: 'InformalParameter',
	 literal: [Object],
	 id: '_msg',
	 is_indexed: false,
	 is_storage: false,
	 is_memory: false,
	 start: 1216,
	 end: 1228 } ],
modifiers: 
 [ { type: 'ModifierArgument',
	 name: 'public',
	 params: [],
	 start: 1230,
	 end: 1238 } ],
returnParams: 
 [ { type: 'InformalParameter',
	 literal: [Object],
	 id: undefined,
	 is_indexed: false,
	 is_storage: false,
	 is_memory: false,
	 start: 1247,
	 end: 1254 } ],
body: 
 { type: 'BlockStatement',
   body: [ [Object], [Object] ],
   start: 1256,
   end: 1387 },
is_abstract: false,
start: 1183,
end: 1387 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 1216,
   end: 1223 },
id: '_msg',
is_indexed: false,
is_storage: false,
is_memory: false,
start: 1216,
end: 1228 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 1216,
end: 1223 }
NODE { type: 'ModifierArgument',
name: 'public',
params: [],
start: 1230,
end: 1238 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 1247,
   end: 1254 },
id: undefined,
is_indexed: false,
is_storage: false,
is_memory: false,
start: 1247,
end: 1254 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 1247,
end: 1254 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 1266,
	 end: 1323 },
   { type: 'ReturnStatement',
	 argument: [Object],
	 start: 1332,
	 end: 1381 } ],
start: 1256,
end: 1387 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'AssignmentExpression',
   operator: '=',
   left: 
	{ type: 'DeclarativeExpression',
	  name: 'prefix',
	  literal: [Object],
	  storage_location: 'memory',
	  start: 1266,
	  end: 1285 },
   right: 
	{ type: 'Literal',
	  value: '\u0019Ethereum Signed Message:\n32',
	  start: 1288,
	  end: 1322 },
   start: 1266,
   end: 1322 },
start: 1266,
end: 1323 }
NODE { type: 'AssignmentExpression',
operator: '=',
left: 
 { type: 'DeclarativeExpression',
   name: 'prefix',
   literal: 
	{ type: 'Type',
	  literal: 'bytes',
	  members: [],
	  array_parts: [],
	  start: 1266,
	  end: 1271 },
   storage_location: 'memory',
   start: 1266,
   end: 1285 },
right: 
 { type: 'Literal',
   value: '\u0019Ethereum Signed Message:\n32',
   start: 1288,
   end: 1322 },
start: 1266,
end: 1322 }
NODE { type: 'DeclarativeExpression',
name: 'prefix',
literal: 
 { type: 'Type',
   literal: 'bytes',
   members: [],
   array_parts: [],
   start: 1266,
   end: 1271 },
storage_location: 'memory',
start: 1266,
end: 1285 }
NODE { type: 'Type',
literal: 'bytes',
members: [],
array_parts: [],
start: 1266,
end: 1271 }
NODE { type: 'Literal',
value: '\u0019Ethereum Signed Message:\n32',
start: 1288,
end: 1322 }
NODE { type: 'ReturnStatement',
argument: 
 { type: 'CallExpression',
   callee: { type: 'Identifier', name: 'keccak256', start: 1339, end: 1348 },
   arguments: [ [Object] ],
   start: 1339,
   end: 1380 },
start: 1332,
end: 1381 }
NODE { type: 'CallExpression',
callee: { type: 'Identifier', name: 'keccak256', start: 1339, end: 1348 },
arguments: 
 [ { type: 'CallExpression',
	 callee: [Object],
	 arguments: [Array],
	 start: 1349,
	 end: 1379 } ],
start: 1339,
end: 1380 }
NODE { type: 'Identifier', name: 'keccak256', start: 1339, end: 1348 }
NODE { type: 'CallExpression',
callee: 
 { type: 'MemberExpression',
   object: { type: 'Identifier', name: 'abi', start: 1349, end: 1352 },
   property: 
	{ type: 'Identifier',
	  name: 'encodePacked',
	  start: 1353,
	  end: 1365 },
   computed: false,
   start: 1349,
   end: 1365 },
arguments: 
 [ { type: 'Identifier', name: 'prefix', start: 1366, end: 1372 },
   { type: 'Identifier', name: '_msg', start: 1374, end: 1378 } ],
start: 1349,
end: 1379 }
NODE { type: 'MemberExpression',
object: { type: 'Identifier', name: 'abi', start: 1349, end: 1352 },
property: 
 { type: 'Identifier',
   name: 'encodePacked',
   start: 1353,
   end: 1365 },
computed: false,
start: 1349,
end: 1365 }
NODE { type: 'Identifier', name: 'abi', start: 1349, end: 1352 }
NODE { type: 'Identifier',
name: 'encodePacked',
start: 1353,
end: 1365 }
NODE { type: 'Identifier', name: 'prefix', start: 1366, end: 1372 }
NODE { type: 'Identifier', name: '_msg', start: 1374, end: 1378 }
NODE { type: 'FunctionDeclaration',
name: 'prefixedRecover',
params: 
 [ { type: 'InformalParameter',
	 literal: [Object],
	 id: '_msg',
	 is_indexed: false,
	 is_storage: false,
	 is_memory: false,
	 start: 1418,
	 end: 1430 },
   { type: 'InformalParameter',
	 literal: [Object],
	 id: 'sig',
	 is_indexed: false,
	 is_storage: false,
	 is_memory: true,
	 start: 1432,
	 end: 1448 } ],
modifiers: 
 [ { type: 'ModifierArgument',
	 name: 'public',
	 params: [],
	 start: 1450,
	 end: 1458 } ],
returnParams: 
 [ { type: 'InformalParameter',
	 literal: [Object],
	 id: undefined,
	 is_indexed: false,
	 is_storage: false,
	 is_memory: false,
	 start: 1467,
	 end: 1474 } ],
body: 
 { type: 'BlockStatement',
   body: [ [Object], [Object] ],
   start: 1476,
   end: 1588 },
is_abstract: false,
start: 1393,
end: 1588 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 1418,
   end: 1425 },
id: '_msg',
is_indexed: false,
is_storage: false,
is_memory: false,
start: 1418,
end: 1430 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 1418,
end: 1425 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'bytes',
   members: [],
   array_parts: [],
   start: 1432,
   end: 1437 },
id: 'sig',
is_indexed: false,
is_storage: false,
is_memory: true,
start: 1432,
end: 1448 }
NODE { type: 'Type',
literal: 'bytes',
members: [],
array_parts: [],
start: 1432,
end: 1437 }
NODE { type: 'ModifierArgument',
name: 'public',
params: [],
start: 1450,
end: 1458 }
NODE { type: 'InformalParameter',
literal: 
 { type: 'Type',
   literal: 'address',
   members: [],
   array_parts: [],
   start: 1467,
   end: 1474 },
id: undefined,
is_indexed: false,
is_storage: false,
is_memory: false,
start: 1467,
end: 1474 }
NODE { type: 'Type',
literal: 'address',
members: [],
array_parts: [],
start: 1467,
end: 1474 }
NODE { type: 'BlockStatement',
body: 
 [ { type: 'ExpressionStatement',
	 expression: [Object],
	 start: 1486,
	 end: 1539 },
   { type: 'ReturnStatement',
	 argument: [Object],
	 start: 1548,
	 end: 1582 } ],
start: 1476,
end: 1588 }
NODE { type: 'ExpressionStatement',
expression: 
 { type: 'AssignmentExpression',
   operator: '=',
   left: 
	{ type: 'DeclarativeExpression',
	  name: 'ethSignedMsg',
	  literal: [Object],
	  storage_location: null,
	  start: 1486,
	  end: 1506 },
   right: 
	{ type: 'CallExpression',
	  callee: [Object],
	  arguments: [Array],
	  start: 1509,
	  end: 1538 },
   start: 1486,
   end: 1538 },
start: 1486,
end: 1539 }
NODE { type: 'AssignmentExpression',
operator: '=',
left: 
 { type: 'DeclarativeExpression',
   name: 'ethSignedMsg',
   literal: 
	{ type: 'Type',
	  literal: 'bytes32',
	  members: [],
	  array_parts: [],
	  start: 1486,
	  end: 1493 },
   storage_location: null,
   start: 1486,
   end: 1506 },
right: 
 { type: 'CallExpression',
   callee: 
	{ type: 'Identifier',
	  name: 'toEthereumSignedMessage',
	  start: 1509,
	  end: 1532 },
   arguments: [ [Object] ],
   start: 1509,
   end: 1538 },
start: 1486,
end: 1538 }
NODE { type: 'DeclarativeExpression',
name: 'ethSignedMsg',
literal: 
 { type: 'Type',
   literal: 'bytes32',
   members: [],
   array_parts: [],
   start: 1486,
   end: 1493 },
storage_location: null,
start: 1486,
end: 1506 }
NODE { type: 'Type',
literal: 'bytes32',
members: [],
array_parts: [],
start: 1486,
end: 1493 }
NODE { type: 'CallExpression',
callee: 
 { type: 'Identifier',
   name: 'toEthereumSignedMessage',
   start: 1509,
   end: 1532 },
arguments: 
 [ { type: 'Identifier', name: '_msg', start: 1533, end: 1537 } ],
start: 1509,
end: 1538 }
NODE { type: 'Identifier',
name: 'toEthereumSignedMessage',
start: 1509,
end: 1532 }
NODE { type: 'Identifier', name: '_msg', start: 1533, end: 1537 }
NODE { type: 'ReturnStatement',
argument: 
 { type: 'CallExpression',
   callee: { type: 'Identifier', name: 'recover', start: 1555, end: 1562 },
   arguments: [ [Object], [Object] ],
   start: 1555,
   end: 1581 },
start: 1548,
end: 1582 }
NODE { type: 'CallExpression',
callee: { type: 'Identifier', name: 'recover', start: 1555, end: 1562 },
arguments: 
 [ { type: 'Identifier',
	 name: 'ethSignedMsg',
	 start: 1563,
	 end: 1575 },
   { type: 'Identifier', name: 'sig', start: 1577, end: 1580 } ],
start: 1555,
end: 1581 }
NODE { type: 'Identifier', name: 'recover', start: 1555, end: 1562 }
NODE { type: 'Identifier',
name: 'ethSignedMsg',
start: 1563,
end: 1575 }
NODE { type: 'Identifier', name: 'sig', start: 1577, end: 1580 }