export interface ITD {
  property: string
  description: string | React.ReactElement
  type: 'number' | 'string' | 'boolean' | 'array' | 'function' | 'React.ElementType' | any
  default?: string | number
  required?: boolean
}

export interface IProps {
  dataSource: ITD[]
}
