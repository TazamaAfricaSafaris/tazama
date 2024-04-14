import React from "react"

type input = {
    value?: any
    name: string
    type: string
    label: string
    required?: boolean
    placeholder: string
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export const Input: React.FunctionComponent<input> = React.memo((props: input) => (
    <div className="w-full flex flex-col gap-2">
        <label htmlFor={props.name} className="font-now text-[#484848]">{props.label}</label>
        <input
            id={props.name}
            type={props.type}
            name={props.name}
            autoComplete="off"
            // required={props.required}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className="px-4 py-3 rounded-lg border-none shadow-sm font-now focus:ring-[#A87133] placeholder:text-gray-300"
        />
    </div>
))