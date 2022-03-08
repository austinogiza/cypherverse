import BigNumber from "bignumber.js"

export const web3BalanceConvert = (
  bn,
  divideby,
  decimals,
  roundingMode = BigNumber.ROUND_DOWN
) => {
  const converted = new BigNumber(bn.toString())
  const divided = converted.div(divideby)

  return divided.toFixed(decimals, roundingMode)
}
