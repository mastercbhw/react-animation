import React from 'react';
import { Menu } from 'antd';
import styles from './index.css';


class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'mail',
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    this.props.history.push(e.key)
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          {/* <span>将近酒~</span> */}
          <Menu
            style={{ height: '5rem', fontFamily: '微软雅黑', lineHeight: '5rem' }}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="/">
              React-Motion
            </Menu.Item>
            <Menu.Item key="/css3">
              CSS3
            </Menu.Item>
          </Menu>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default BasicLayout;
