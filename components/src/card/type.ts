import { CardProps } from 'antd/lib/card'

export interface ICardProps extends CardProps {
  collapsible?: boolean
  collapsed?: boolean
}
