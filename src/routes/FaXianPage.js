import React from 'react';
import {NavBar, Icon, Carousel, Grid} from 'antd-mobile';
import './FaXianPage.css';

// export const PlaceHolder = ({className = '', ...restProps}) => (
//   <div className={`${className} placeholder`} {...restProps}>Block</div>
// );

const data = [
  {
    icon: require('../assets/faxian/shoucang.svg'),
    text: `收藏夹`,
    color: 'cornflowerblue',
  },
  {
    icon: require('../assets/faxian/huodong.svg'),
    text: `热门活动`,
    color: 'orange',
  },
  {
    icon: require('../assets/faxian/hongbao.svg'),
    text: `福利红包`,
    color: 'firebrick',
  },
  {
    icon: require('../assets/faxian/add_user.svg'),
    text: `拉新活动`,
    color: 'saddlebrown',
  },
  {
    icon: require('../assets/faxian/zhidao.svg'),
    text: `新手上路`,
    color: 'orange',
  }
]

export class FaXianPage extends React.Component {
  state = {
    carousel: ['xinren', 'bangzhu'],
    imgHeight: 176,
  }

  render() {
    return (
      <div>
        <div className={"tab-header"}>
          <NavBar
            mode="light"
            icon={<img src={require('../assets/index/xiaoxi.svg')} width={22} height={22} alt=""/>}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0" type="search"/>
            ]}
          >淘宝联盟</NavBar>
        </div>
        <div className={"tab-body"}>
          <Carousel
            autoplay={true}
            infinite={true}
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.state.carousel.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
              >
                <img
                  src={require(`../assets/faxian/${val}.png`)}
                  alt=""
                  style={{width: '100%', verticalAlign: 'top'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({imgHeight: 'auto'});
                  }}
                />
              </a>
            ))}
          </Carousel>
          <div>
            <Grid data={data} hasLine={false} columnNum={5}
                  renderItem={(el, index) => {
                    return (
                      <div className={"am-grid-item-inner-content column-num-5"}>
                        <div className={"grid-icon-bg"}>
                          <img className="am-grid-icon" src={el.icon} style={{backgroundColor:el.color}}/>
                        </div>
                        <div className="am-grid-text">{el.text}</div>
                      </div>
                    )
                  }}
            />
          </div>
        </div>
      </div>
    )
  }
}
