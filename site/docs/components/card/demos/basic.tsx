import React from 'react'
import { Row, Col } from 'antd'
import { Card } from '@zstack/components'

export default () => (
  <Row gutter={36}>
    <Col span={8}>
      <Card title="基本信息">默认展开的内容</Card>
    </Col>
    <Col span={8}>
      <Card title="高级信息" collapsible collapsed>
        默认收起的内容
      </Card>
    </Col>
    <Col span={8}>
      <Card title="高级信息" collapsible={false}>
        不能收起的卡片
      </Card>
    </Col>
  </Row>
)
