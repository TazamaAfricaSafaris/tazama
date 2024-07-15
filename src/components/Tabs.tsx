"use client"
import React from 'react'

interface Props {
    children: React.ReactNode
    label: string
}

const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = React.useState((children as React.ReactElement<Props>[])[0]?.props.label);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="">
            <div className="flex flex-col sm:flex-row">
                {React.Children.map(children, (child, id) => {
                    const tab = child as React.ReactElement<Props>;
                    if (tab?.props?.label) {
                        return (
                            <button
                                key={id}
                                className={`${activeTab === tab?.props.label ? 'border-b-2 border-primary font-bold' : ''} flex-1 text-gray-700 font-medium py-2 w-full md:max-w-fit px-4 self-start text-left sm:text-center`}
                                onClick={(e) => handleClick(e, (child as React.ReactElement<Props>)?.props.label)}
                            >
                                {tab?.props.label}
                            </button>
                        )
                    }
                })}
            </div>
            <div  className="py-4">
                {React.Children.map(children, (child) => {
                    if ((child as React.ReactElement<Props>)?.props.label === activeTab) {
                        return <div key={(child as React.ReactElement<Props>)?.props.label}>{(child as React.ReactElement<Props>)?.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab: React.FC<Props> = ({ label, children }) => {
    return (
      <div className="hidden" data-label={label}>
        {children}
      </div>
    );
  };


export {Tabs, Tab}