/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react"

type textarea = {
    value?: any
    name: string
    type?: string
    label: string
    required?: boolean
    placeholder?: string
    onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void
}

export const Textarea: React.FunctionComponent<textarea> = React.memo((props: textarea) => {
    // Add ref and auto-resize function
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleResize = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    // Handle both resize and onChange
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleResize();
        props.onChange(e);
    };

    return (
        <div className="input-container">
            <textarea
                id="textarea"
                ref={textareaRef}
                className="ring-0 focus:ring-0 h-auto"
                {...props}
                onChange={handleChange}
            />
            <label className="label">{props.label}</label>
            {/* <div className="underline"></div> */}
        </div>
    );
})