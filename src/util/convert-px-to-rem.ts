type ConvertPxToRemParams = number[] | number

type ConvertPxToRemReturn = string

export const ConvertPxToRem = (
  param: ConvertPxToRemParams
): ConvertPxToRemReturn => {
  if (Array.isArray(param)) {
    const resultInRem = param.map((pxValue) => pxValue / 16)

    return resultInRem.map((remValue) => `${remValue}rem`).join(' ')
  }

  return `${param / 16}rem`
}
