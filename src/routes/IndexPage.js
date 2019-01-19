import React from 'react';
import {connect} from 'dva';
import {TabBar} from 'antd-mobile';
import {FaXianPage} from "./FaXianPage";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  renderContent(pageText) {
    return (
      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
        <div style={{paddingTop: 60}}>Clicked “{pageText}” tab， show “{pageText}” information</div>
      </div>
    );
  }

  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="发现"
            key="faxian"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../assets/index/faxian.svg')}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../assets/index/faxian_ac.svg')}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <FaXianPage></FaXianPage>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/index/shouyi.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/index/shouyi_ac.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="收益"
            key="shouyi"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/index/wode.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/index/wode_ac.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="我的"
            key="wode"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
