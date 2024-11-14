import { InputHTMLAttributes} from "react";

export function Input({props}: InputHTMLAttributes<HTMLInputElement>) {
    return  (
        <div>
            <input
                {...props}
                className='border border-zinc-100'
            />
        </div>
    )
}