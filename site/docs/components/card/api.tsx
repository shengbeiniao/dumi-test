import React from 'react'
import { Table } from '@/components'

const dataSource = [
  {
    property: 'collapsible',
    description: '可否收起',
    type: 'boolean',
    default: 'true',
    required: false
  },
  {
    property: 'collapsed',
    description: '默认收起状态',
    type: 'boolean',
    default: 'false',
    required: false
  }
]

export default () => <Table dataSource={dataSource} />
