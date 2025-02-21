/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react"

type input = {
    value?: any
    name: string
    type?: string
    label: string
    required?: boolean
    placeholder?: string
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export const Input: React.FunctionComponent<input> = React.memo((props: input) => (
    <div className="input-container">
        <input
            type="text"
            id="input"
            required
            {...props}
            className="ring-0 focus:ring-0"
        />
        <label className="label">{props.label}</label>
        <div className="underline"></div>
    </div>
))