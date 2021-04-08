export default (fn: (...args: any[]) => void, wait: number): () => void => {
  let timeout: ReturnType<typeof setTimeout> | null

  return (...args: any[]) => {
    console.log(timeout)
    clearTimeout(timeout as ReturnType<typeof setTimeout>)

    timeout = setTimeout(() => fn(...args), wait)
  }
}
