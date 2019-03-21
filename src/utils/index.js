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

export function getRandomByCount (count, min, max) {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(getRandom(min, max));
  }
  return arr;
}

// 函数防抖，指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间,immediate参数是立即执行一次在等n秒后重新触发
// 一般用于输入框向后台校验，防止过于频繁发送请求
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}
