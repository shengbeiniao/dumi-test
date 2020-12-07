import React from 'react'
import { Link } from 'umi'
import { Text } from '@zstack/components'

export default () => (
  <div style={{ width: '150px' }}>
    <div>
      <Text value="tianye-ccc-120.1-0-249-177" />
    </div>
    <div>
      <Text value="tianye" ellipsis={false} />
    </div>
    <div>
      <Text value="tianye-ccc-120.1-0-249-177">
        <Link to="#">tianye-ccc-120.1-0-249-177</Link>
      </Text>
    </div>
    <div>
      <Text value="tianye-ccc-120.1-0-249-177" copyable={true} />
    </div>
    <div>
      <Text value="tianye-ccc-120.1-0-249-177" toggle copyable={true} />
    </div>
  </div>
)
