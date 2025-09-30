"use client"
import React from "react"

interface Props {
  children: React.ReactNode
  label: string
}

interface TabsProps {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  defaultTab?: string
}

const Tabs: React.FC<TabsProps> = ({ children, orientation = "horizontal", defaultTab }) => {
  const [activeTab, setActiveTab] = React.useState(() => {
    if (defaultTab) return defaultTab
    return (children as React.ReactElement<Props>[])[0]?.props.label
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  const containerClass = orientation === "vertical" ? "flex gap-4" : "flex flex-col"

  const tabsContainerClass = orientation === "vertical" ? "flex flex-col min-w-[200px]" : "flex"

  const contentClass = orientation === "vertical" ? "flex-1 py-4" : "py-4"

  return (
    <div className={containerClass}>
      <div className={tabsContainerClass}>
        {React.Children.map(children, (child, id) => {
          const tab = child as React.ReactElement<Props>
          if (tab?.props?.label) {
            const buttonClass =
              orientation === "vertical"
                ? `${activeTab === tab?.props.label ? "border-l-2 border-primary font-bold bg-primary/5" : ""} text-gray-700 font-medium py-3 px-4 text-left hover:bg-gray-50 transition-colors`
                : `${activeTab === tab?.props.label ? "border-b-2 border-primary font-bold" : ""} flex-1 text-gray-700 font-medium py-2 px-4 text-center hover:bg-gray-50 transition-colors`

            return (
              <button
                key={id}
                className={buttonClass}
                onClick={(e) => handleClick(e, (child as React.ReactElement<Props>)?.props.label)}
              >
                {tab?.props.label}
              </button>
            )
          }
        })}
      </div>
      <div className={contentClass}>
        {React.Children.map(children, (child) => {
          if ((child as React.ReactElement<Props>)?.props.label === activeTab) {
            return (
              <div key={(child as React.ReactElement<Props>)?.props.label}>
                {(child as React.ReactElement<Props>)?.props.children}
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

const Tab: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="hidden" data-label={label}>
      {children}
    </div>
  )
}

export { Tabs, Tab }
