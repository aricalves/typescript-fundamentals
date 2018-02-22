export function hexToRgb(hex: string): {r:number, g:number, b:number} {
  if (hex.length === 3) {
    return hexToRgb(`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)
  }

  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCode => parseInt(hexCode, 16))
  return { r, g, b }
}

export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(code => Math.max(0, Math.min(255, code)).toString(16))
    .map(hex => hex.length < 2 ? `0${hex}` : hex)
    .join('')
}