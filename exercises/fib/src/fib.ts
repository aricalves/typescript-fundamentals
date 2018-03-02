
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let lastLast = 1
  let last = 0
  while (1) {
    let val = last + lastLast
    yield val
    lastLast = last
    last = val
  }
}
