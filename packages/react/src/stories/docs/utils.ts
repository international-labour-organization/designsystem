export function getRGB(
  x: number,
  y: number,
  data: Uint8ClampedArray,
  width: number
) {
  return {
    red: data[(width * y + x) * 4],
    green: data[(width * y + x) * 4 + 1],
    blue: data[(width * y + x) * 4 + 2],
  };
}

export function isTransparent(
  x: number,
  y: number,
  data: Uint8ClampedArray,
  width: number
) {
  const { red, green, blue } = getRGB(x, y, data, width);
  return red === 0 && green === 0 && blue === 0;
}

export function scanY(
  top: boolean,
  data: Uint8ClampedArray,
  width: number,
  height: number
) {
  var offset = top ? 1 : -1;

  for (var y = top ? 0 : height - 1; top ? y < height : y > -1; y += offset) {
    for (var x = 0; x < width; x++) {
      if (isTransparent(x, y, data, width)) {
        return y;
      }
    }
  }

  return null;
}

export function scanX(
  left: boolean,
  data: Uint8ClampedArray,
  width: number,
  height: number
) {
  var offset = left ? 1 : -1;

  for (var x = left ? 0 : width - 1; left ? x < width : x > -1; x += offset) {
    for (var y = 0; y < height; y++) {
      if (!isTransparent(x, y, data, width)) {
        return x;
      }
    }
  }

  return null;
}
