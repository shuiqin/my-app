import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from '../../pages/index'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content" id="content">
        <Route path="/index" component={index} />
      </Content>
    )
  }
}