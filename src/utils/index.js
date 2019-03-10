export function colorRgb (color, a) {
  var sColor = color.toLowerCase();
  if (sColor && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    var sColorChange = [];
    for (var j = 1; j < 7; j += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(j, j + 2)));
    }
    if (a || a === 0) {
      return "rgba(" + sColorChange.join(",") + "," + a + ")";
    } else {
      return "rgb(" + sColorChange.join(",") + ")";
    }
  } else {
    return sColor;
  }
}

export function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
