import React, { FC } from 'react'
import { Table as AntTable } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IProps, ITD } from './type'
import styles from './style.less'

const columns: ColumnsType<ITD> = [
  {
    title: '参数',
    dataIndex: 'property',
    width: 150,
    className: styles.property
  },
  {
    title: '说明',
    dataIndex: 'description',
    width: 250
  },
  {
    title: '类型',
    dataIndex: 'type',
    className: styles.type
  },
  {
    title: '默认值',
    dataIndex: 'default',
    width: 150,
    render: (value?: number | string) => (value === undefined ? '-' : value)
  },
  {
    title: '必填',
    dataIndex: 'required',
    width: 150,
    render: (value: boolean) => (value ? '是' : '否')
  }
]

const Table: FC<IProps> = ({ dataSource }) => {
  return (
    <AntTable
      className={styles.table}
      rowKey="property"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

export default Table
export { IProps as ApiTableProps }
