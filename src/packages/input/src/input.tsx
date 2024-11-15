import { InputHTMLAttributes} from "react";

export function Input({props}: InputHTMLAttributes<HTMLInputElement>) {
    return  (
        <div>
            <input
                {...props}
                className='border border-zinc-100 w-full px-2 py-1 rounded-md'
            />
        </div>
    )
}