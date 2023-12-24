import clsx from 'clsx'
import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      className={clsx(
        'rounded-lg bg-blue-600 px-2 py-1 text-sm text-white',
        pending ? 'opacity-50' : '',
      )}
      disabled={pending}
      type="submit"
    >
      Add Todo
    </button>
  )
}
