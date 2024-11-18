import { InputHTMLAttributes} from "react";

export function Input({label, name, ...props}: InputHTMLAttributes<HTMLInputElement>) {
    return  (
        <div>
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