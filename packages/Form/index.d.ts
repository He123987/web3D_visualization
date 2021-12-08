import { VNode } from 'vue'

export interface IValue {
  value: {
    b: 1
  }
}

export interface IRules {
  required?: boolean
}

// TODO 按组件区分interface

export interface IColumns {
  label?: string
  prop?: string
  type?: string
  span?: number
  append?: string // 后缀
  prepend?: string // 前缀
  prefix?: string
  placeholder?: string
  showPassword?: boolean
  rules?: array // TODO 属性待定
}

export interface IOption {
  labelWidth?: string | number
  menuBtn?: boolean | VNode
}
