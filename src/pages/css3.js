import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './css3.less';
import { Icon } from 'antd';

export default function AnimatedPage() {
  const [ banner1Text, setBanner1Text ] = useState(true)
  const [ nav1Animated, setNavAnimated ] = useState(true)
  const [ servicesAnimated, setServicesAnimated ] = useState(true)
  const handleScroll = (event) => {
    const value =  event ? event.target.body.scrollTop || event.target.documentElement.scrollTop : 0
    // window.scrollY 不兼容IE。 Edge和chrome均能使用
    // banner1 的文字动画控制
    value > 600 ? setBanner1Text(false) : setBanner1Text(true)
    value > 920 ? setNavAnimated(false) : setNavAnimated(true)
    value < 400 || value > 1500 ? setServicesAnimated(false) : setServicesAnimated(true)
    
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  })
  return (
    <div className={styles.animatePage}>
      <div className={styles.banner1}>
        <div className={classnames({ [styles.banner1Text1]: banner1Text })}>WE MADE YOUR BEST DESIGN</div>
        <div className={classnames({ [styles.banner1Text2]: banner1Text })}>
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
          model text,
          <br />
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </div>
      </div>
      <div className={styles.nav1Warp}>
        <ul className={styles.nav1}>
          <li className={ classnames({ [styles.nav1Animated1]: nav1Animated }) }>
            <div>255</div>
            <div>SATISFIED</div>
          </li>
          <li className={ classnames({ [styles.nav1Animated2]: nav1Animated }) }>
            <div>1625</div>
            <div>PROJECTS</div>
          </li>
          <li className={ classnames({ [styles.nav1Animated3]: nav1Animated }) }>
            <div>96</div>
            <div>WORKING DAYS</div>
          </li>
          <li className={ classnames({ [styles.nav1Animated4]: nav1Animated }) }>
            <div>325</div>
            <div>CUPS OF COFFE</div>
          </li>
        </ul>
      </div>
      <div className={styles.banner2}>
        <div className={styles.content}>
          <div className={styles.banner2Header}>SERVICES</div>
          <ul>
            <li className={ classnames({ [styles.servicesAnimated]: servicesAnimated }) }>
              <div>
                <Icon type="smile" />
              </div>
              <div>Visual Identity</div>
              <div>We help our clients creats a strong and distinctive visual identity</div>
            </li>
            <li className={ classnames({ [styles.servicesAnimated]: servicesAnimated }) }>
              <div>
                <Icon type="desktop" />
              </div>
              <div>Web Design</div>
              <div>We apply user-centered principles to create an web design</div>
            </li>
            <li className={ classnames({ [styles.servicesAnimated]: servicesAnimated }) }>
              <div>
                <Icon type="pie-chart" />
              </div>
              <div>Development</div>
              <div>After brainstorming the webdesign or mobile app our team will make.</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.photo}>PHOTOSHOW</div>
      <div className={styles.img}>
        <ul>
          <li>
            <img src={require('../assets/animated4.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated5.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated6.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated7.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated8.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated9.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated10.png')} alt="" />
          </li>
          <li>
            <img src={require('../assets/animated1.png')} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
