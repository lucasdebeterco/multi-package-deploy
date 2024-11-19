import { InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

export function Input({label, name, ...props}: InputProps) {
    return  (
        <div className='flex flex-col gap-1'>
            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className='border border-zinc-700 w-full px-2 py-1 rounded-md bg-zinc-800'
                name={name}
                {...props}
            />
        </div>
    )
}