export function checkArrayDuplicates(array: string[]) {
  return (
    array.some(
      (val, i) => array.indexOf(val) !== i
    )
  )
}