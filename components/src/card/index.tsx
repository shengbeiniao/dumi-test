import React, { FC, useMemo } from 'react'
import { Card as AntCard } from 'antd'
import { ICardProps } from './type'

const Card: FC<ICardProps> = ({ collapsible, collapsed, children, className, ...extraProps }) => {
  return <AntCard {...extraProps}>{children}</AntCard>
}

Card.defaultProps = {
  collapsible: true,
  collapsed: false
}

export default Card
export { ICardProps }
