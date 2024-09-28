import { useState, useEffect } from 'react'

export const useDebounce = ( value, delay, cb ) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(async () => {
            setDebouncedValue(value)
            await cb(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay, cb])

    return debouncedValue
}