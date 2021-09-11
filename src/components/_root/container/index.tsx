import React, { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode | string
}
const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto">{children}</div>
}

export default Container
