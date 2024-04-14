import React from "react"

// divider memorized function component
const Divider: React.FunctionComponent = React.memo(() => (
    <div className="block my-10">
        <div className="h-[1px] bg-[#757371]  mx-[10rem]"></div>
    </div>
))

export default Divider