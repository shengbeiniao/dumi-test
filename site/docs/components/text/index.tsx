import React from 'react'
import { Table } from '@/components'

const dataSource = [
  {
    property: 'value',
    description: '文本值',
    type: 'any',
    default: '-',
    required: true
  },
  {
    property: 'ellipsis',
    description: '超出是否显示...和 tooltip',
    type: 'boolean',
    default: 'true',
    required: false
  },
  {
    property: 'toggle',
    description: '切换文本的显示或隐藏',
    type: 'boolean',
    default: 'true',
    required: false
  },
  {
    property: 'children',
    description: '自定义 children，可以为超链接等',
    type: 'React.ReactNode',
    default: '',
    required: false
  },
  {
    property: 'Antd Typography Text Props',
    description: (
      <a href="https://ant.design/components/typography-cn/" target="_blank" rel="noreferrer">
        其他属性参考，Antd Typography Text Props
      </a>
    ),
    type: 'React.ReactNode',
    default: '',
    required: false
  }
]

export default () => <Table dataSource={dataSource} />
