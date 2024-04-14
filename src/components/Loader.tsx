import React from 'react'

const Loader: React.FunctionComponent = React.memo(() => {
    return (
        <div className="fixed inset-0 bg-[#f5f1eb] bg-opacity-50 flex justify-center items-center z-50">
            <div className="animate-spin rounded-full h-28 w-28 border-b-4 border-[#A87133]"></div>
        </div>
    );
})

export default Loader
