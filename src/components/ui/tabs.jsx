import * as React from "react"

import { cn } from "@/lib/utils"

const TabsContext = React.createContext(null)

const Tabs = React.forwardRef(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      className,
      ...props
    },
    ref
  ) => {
    const [valueState, setValueState] = React.useState(defaultValue)
    const isControlled = valueProp !== undefined
    const value = isControlled ? valueProp : valueState

    const setValue = React.useCallback(
      (nextValue) => {
        if (!isControlled) {
          setValueState(nextValue)
        }
        onValueChange?.(nextValue)
      },
      [isControlled, onValueChange]
    )

    const contextValue = React.useMemo(
      () => ({ value, setValue }),
      [value, setValue]
    )

    return (
      <TabsContext.Provider value={contextValue}>
        <div ref={ref} className={cn("w-full", className)} {...props} />
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("inline-flex", className)} {...props} />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(
  ({ className, value, onClick, ...props }, ref) => {
    const context = React.useContext(TabsContext)

    if (!context) {
      throw new Error("TabsTrigger must be used within <Tabs>")
    }

    const isActive = context.value === value

    return (
      <button
        ref={ref}
        type="button"
        data-state={isActive ? "active" : "inactive"}
        className={cn("inline-flex items-center justify-center", className)}
        onClick={(event) => {
          onClick?.(event)
          context.setValue(value)
        }}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext)

    if (!context) {
      throw new Error("TabsContent must be used within <Tabs>")
    }

    const isActive = context.value === value

    if (!isActive) {
      return null
    }

    return (
      <div
        ref={ref}
        data-state="active"
        className={cn(className)}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
