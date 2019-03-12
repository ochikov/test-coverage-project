pragma solidity ^0.5.0;

contract FoodCart {event __CoverageFoodCart(string fileName, uint256 lineNumber);
event __FunctionCoverageFoodCart(string fileName, uint256 fnId);
event __StatementCoverageFoodCart(string fileName, uint256 statementId);
event __BranchCoverageFoodCart(string fileName, uint256 branchId, uint256 locationIdx);
event __AssertPreCoverageFoodCart(string fileName, uint256 branchId);
event __AssertPostCoverageFoodCart(string fileName, uint256 branchId);

	/* set owner of contract */
	address owner;

	/* a variable to track the most recent sku of a food item */
	uint8 skuCount; 
	/* an enum to store food item state */
	enum State {ForSale, Sold}

	/* add event to emit when a new food item is added to cart */
	event ForSale(string name, uint8 sku, uint16 price, uint8 state, bool foodItemExist);

	/* add event to emit when a new food item is sold */
	event Sold(string name, uint8 sku, uint16 price, uint8 state, bool foodItemExist);

	/* a struct to store details of a food item */
			struct FoodItem {
		string name;
		uint8 sku;
		uint16 price;
		State state;
		bool foodItemExist;
	}

	/* a map that maps sku to food item */
	mapping (uint8 => FoodItem) public foodItems;
	
	/* a modifier to check that food item exist */
	modifier doesFoodItemExist(uint8 _sku){emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',1);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',32);
		emit __AssertPreCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',1);
emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',1);
require(foodItems[_sku].foodItemExist);emit __AssertPostCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',1);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',33);
		_;
	}
	
	/* a modifier to check that an item is forsale */
	modifier isFoodItemForSale(uint8 _sku){emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',2);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',38);
		emit __AssertPreCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',2);
emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',2);
require(foodItems[_sku].state == State.ForSale);emit __AssertPostCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',2);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',39);
		_;
	}

	/* a modifier to check that the right price is paid for the food item */
	modifier hasBuyerPaidEnough(uint16 _price){emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',3);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',44);
		emit __AssertPreCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',3);
emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',3);
require(msg.value >= _price);emit __AssertPostCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',3);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',45);
		_;
	}

	constructor() public {emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',4);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',49);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',4);
owner = msg.sender;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',50);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',5);
skuCount = 0;
	}

	
	function addFoodItem (string memory _name, uint16 _price) public {emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',5);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',55);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',6);
foodItems[skuCount] = FoodItem({name: _name, 
						sku: skuCount, 
						price: _price, 
						state: State.ForSale, 
						foodItemExist: true});
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',60);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',7);
emit ForSale(_name, skuCount , _price, uint8(State.ForSale), true);
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',61);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',8);
skuCount = skuCount + 1;
	}  

	function buyFoodItem (uint8 _sku)
	payable
	public
	doesFoodItemExist(_sku)
	isFoodItemForSale(_sku)
	hasBuyerPaidEnough(foodItems[_sku].price)
	{emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',6);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',71);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',9);
foodItems[_sku].state = State.Sold;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',72);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',10);
foodItems[_sku].foodItemExist = false;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',73);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',11);
emit Sold(foodItems[_sku].name, 
			  foodItems[_sku].sku, 
			  foodItems[_sku].price, 
			  uint8(foodItems[_sku].state), 
			  foodItems[_sku].foodItemExist);
	}

	function fetchFoodItem(uint8 _sku) 
	doesFoodItemExist(_sku)
	public 
	returns (string memory name, uint8 sku, uint16 price, uint8 state, bool foodItemExist){emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',7);

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',84);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',12);
name = foodItems[_sku].name;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',85);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',13);
sku = foodItems[_sku].sku;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',86);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',14);
price = foodItems[_sku].price;
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',87);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',15);
state = uint8(foodItems[_sku].state);
emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',88);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',16);
foodItemExist = foodItems[_sku].foodItemExist;

emit __CoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',90);
		emit __StatementCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',17);
return (name, sku, price, state, foodItemExist);
	}

	function () external payable {emit __FunctionCoverageFoodCart('/Users/ognyanchikov/new-etherlime-debugger-project/contracts/FoodCart.sol',8);


	}
}