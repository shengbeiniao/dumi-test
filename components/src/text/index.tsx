import React, { useState, useEffect, useRef } from 'react'
import { Typography, Tooltip } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import './style.less'

const { Text: AntText } = Typography

export interface IProps extends TextProps {
  value: any
  ellipsis?: boolean
  children?: React.ReactChild
  toggle?: boolean
}

// todo theme

function pxToNumber(value: string | null): number {
  if (!value) return 0

  const match = value.match(/^\d*(\.\d*)?/)

  return match ? Number(match[0]) : 0
}
const mode = 'light'

const Text: React.FC<IProps> = ({ value, toggle, children, ellipsis = true, ...rest }) => {
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false)
  const [visiable, setVisiable] = useState<boolean>(false)
  const ref = useRef(null)
  let baseText = (
    <span ref={ref}>
      <AntText style={{ width: '100%' }} {...rest} ellipsis={ellipsis}>
        {children || value}
      </AntText>
    </span>
  )
  useEffect(() => {
    if (ref.current) {
      const current = (ref.current as any) as HTMLElement
      const { lineHeight } = window.getComputedStyle(current.children[0])
      setIsEllipsis(pxToNumber(lineHeight) < current.children[0].scrollHeight)
    }
  }, [])
  if (toggle) {
    if (visiable) {
      baseText = (
        <span className="baseSecretText" ref={ref}>
          <AntText {...rest} copyable ellipsis={ellipsis}>
            {children || value}
          </AntText>
          <span
            className="hidden"
            onClick={() => setVisiable(!visiable)}
          >
            隐藏
          </span>
        </span>
      )
    } else {
      const defaultValue = '显示'
      baseText = (
        <span onClick={() => setVisiable(!visiable)} ref={ref}>
          <AntText>{children || defaultValue}</AntText>
        </span>
      )
    }
  }
  // 没有值的话显示为空元素
  if (value !== 0 && !value && !children) {
    baseText = <></>
  }
  if (isEllipsis) {
    return <Tooltip title={value}>{baseText}</Tooltip>
  }
  return baseText
}

export default Text
