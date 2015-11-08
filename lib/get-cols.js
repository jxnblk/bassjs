
import range from './range'

export default function getCols (n) {
  const steps = range(n)
  return steps.map((step) => (100 * step / n) + '%')
}

