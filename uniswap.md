## Variables

### _sqrtRatioX96_ 
same as *sqrtPriceX96*
[https://docs.uniswap.org/sdk/guides/fetching-prices]
Formula: sqrt(price) * 2 ** 96 = sqrt(price * 2 ** 192)

In Uniswap V3, prices of tokens are stored in the 0th slot of the pool state. Storing the price values instead of deriving them allows pools to perform higher precision operations. In the actual implementation, prices are stored as square roots, hence the sqrt prefix. The price is stored as a square root because of the geometric nature of the core AMM algorithm, x*y=k. Essentially, the math works out well when working with the square root of the price.  
In addition, you'll notice the X96 suffix at the end of the variable name. This X* naming convention is used throughout the Uniswap V3 codebase to indicate values that are encoded as binary fixed-point numbers. Fixed-point is excellent at representing fractions while maintaining consistent fidelity and high precision in integer-only environments like the EVM, making it a perfect fit for representing prices, which of course are ultimately fractions. The number after X indicates the number of fraction bits - 96 in this case - reserved for encoding the value after the decimal point. The number of integer bits can be trivially derived from the size of the variable and the number of fraction bits. In this case, sqrtPriceX96 is stored as a uint160, meaning that there are 160 - 96 = 64 integer bits.
The number after X indicates the number of fraction bits - 96


Note: Since each token in solidity have different decimals parts, to calcluate the exact price, the formula should be
  price = JSBI.BigInt(sqrtPriceX96) * JSBI.BigInt(sqrtPriceX96) * (1e(decimals_token_0))/(1e(decimals_token_1) / (JSBI.BigInt(2) ** (JSBI.BigInt(192)));
## Tick
### Calculate tick
library: @uniswap/v3-sdk
function: 
priceToClosestTick(price)
nearestUsableTick(tick, TICK_SPACINGS[feeAmount])