import React from 'react';
import classNames from 'classnames';
import {Motion, StaggeredMotion, spring, TransitionMotion} from 'react-motion'
import styles from './index.less';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 150,
      opt: 0.5,
      length: 0,
      motion1: { stiffness: 140, damping: 26 },
      show: true
    }
  }
  componentDidMount() {
    // Motion中的动画自执行
   this.motionRender()
   // 监听scroll事件，触发回调函数
   window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // 滚动触发的回调函数
  handleScroll = () => {
    const scrollTop = document.body.scrollTop ||  document.documentElement.scrollTop  // Edge || chrome/IE
    this.motionRender2(scrollTop)
    this.motionRender(scrollTop)
    this.motionRender3(scrollTop)
  }
   // 一屏动画
  motionRender = (scrollTop) => {
    const { left } = this.state
    if (scrollTop > 400 && left === 0) {
      this.setState({
        left: 150
      })
    }
    if (scrollTop < 373 && left === 150) {
      this.setState({
        left: 0
      })
    }
  }
  
  // 二屏动画控制
  motionRender2 = (scrollTop) => {
    const { length } = this.state
    if (length === 8 && (scrollTop < 93 || scrollTop > 1842)) {
      this.setState({ length: 0 })
    } else if (scrollTop > 100) {
      this.setState({ length: 8 })
    } else {
      this.setState({ length: 0 })
    }
  }
 
  // 三屏 动画控制
  motionRender3 = (scrollTop) => {
    const { show } = this.state
    if (scrollTop > 1288 && !show) {
      this.setState({ show: true })
    }
    if (scrollTop < 1288 && show) {
      this.setState({ show: false })
    }
  }
  willEnter(styleThatEnter) {
    return { scale: 0 }
  }

  willLeave(styleThatLeft) {
    return { scale: spring(0) }
  }

  render() {
    let boxes = []
    const { motion1 } = this.state 
    for (let i = 0, len = this.state.length; i < len; i++) {
      boxes.push({
        scale: 0,
      })
    }
    const imgSrc = {
      1: require('../assets/motion1.jpg'),
      2: require('../assets/motion2.jpg'),
      3: require('../assets/motion3.jpg'),
      4: require('../assets/motion4.jpg'),
      5: require('../assets/motion5.jpg'),
      6: require('../assets/motion6.jpg'),
      7: require('../assets/motion7.jpg'),
      8: require('../assets/motion8.jpg'),
    }
    return (
      <div className={styles.normal} >
        <div className={styles.item1}>
          <div className={classNames(styles.itemHeader, styles.motionBottom)}>react-motion中的&lt;Motion&gt;</div>
          <div className={styles.item1Text1}>
            <Motion defaultStyle={{x: 150, opt: 0}} style={{x: spring(this.state.left, motion1) }}>
              {interpolatingStyle => {
                // debugger
                return (
                  <div style={{transform: `translateX(${interpolatingStyle.x}px)` }}>
                    <h1>君不见</h1>
                    <h1>黄河之水天上来</h1>
                    <h1>奔流到海不复回</h1>
                  </div>
                )
              }}
            </Motion>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.itemHeader}>react-motion中的&lt;StaggeredMotion&gt;</div>
          {this.state.length > 0 ? (
              <StaggeredMotion defaultStyles={boxes}
                styles={prevStyles => prevStyles.map((item, i) => {
                  return i === 0
                    ? { scale: spring(1, { stiffness: 170, damping: 46 }) }
                    : prevStyles[i - 1]
                })}>
                {interpolatingStyles =>
                  <div className={styles.boxWarp}>
                    {interpolatingStyles.map((item, i) => {
                      return (
                        <div className={styles.box}
                          key={i}
                          style={{
                            transform: `scale(${item.scale}, ${item.scale})`
                          }}>
                          {/* <img src={item.imgSrc} alt="" /> */}
                          <img key={i} src={imgSrc[i+1]} alt="" />
                        </div>
                      )
                    })}
                  </div>
                }
              </StaggeredMotion>
            ) : null}
        </div>
        <div className={styles.item3}>
          <div className={styles.itemHeader}>react-motion中的&lt;TransitionMotion&gt;</div>
          <div className={styles.motionBox}>
            <TransitionMotion styles={this.state.show ? [{
              key: 'test',
              style: { scale: spring(1, { stiffness: 140, damping: 20 }) }
            }] : []}
              willEnter={this.willEnter}
              willLeave={this.willLeave}>
              {inStyles => (
                  inStyles[0] ? (
                    <div className={styles.box3}
                      key={inStyles[0].key}
                      style={{
                        transform: `scale(${inStyles[0].style.scale},${inStyles[0].style.scale})`
                      }}>
                      
                      君不见，黄河之水天上来，奔流到海不复回。<br/>
                      君不见，高堂明镜悲白发，朝如青丝暮成雪。<br/>
                      人生得意须尽欢，莫使金樽空对月。<br/>
                      天生我材必有用，千金散尽还复来。<br/>
                      烹羊宰牛且为乐，会须一饮三百杯。<br/>
                      岑夫子，丹丘生，将进酒，杯莫停。<br/>
                      与君歌一曲，请君为我倾耳听。<br/>
                      钟鼓馔玉不足贵，但愿长醉不复醒。<br/>
                      古来圣贤皆寂寞，惟有饮者留其名。<br/>
                      陈王昔时宴平乐，斗酒十千恣欢谑。<br/>
                      主人何为言少钱，径须沽取对君酌。<br/>
                      五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。<br/>
                      </div>
                  ) : null
              )}
            
            </TransitionMotion>
          </div>
        </div>
      </div>
    )
  }

}
