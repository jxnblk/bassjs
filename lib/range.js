
export default function range(n) {
  var arr = Array.from({ length: n }, (a, b) => b + 1)
  arr.unshift(0)
  return arr
}

