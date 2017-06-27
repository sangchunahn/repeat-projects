import React from 'react';
import {observer, inject} from 'mobx-react';
import autoBind from 'react-autobind';
import _ from 'lodash';


@inject('dataStore')
@observer
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.dataStore = this.props.dataStore;
    this.state = {
      user: ''
    }
  }
  componentWillMount() {
    this.dataStore.fetchUserInfo()
    .then(() => {
      this.setState({
        user: this.dataStore.userInfo
      })
    })
  }
 
  render() {
    const user = this.state.userInfo;
    if (!user.firstname) {
      return (
        <div className={cx('container')}>
            <div className={cx('userName')}>
              <a href='/login'>Login</a>
            </div>
        </div>  
      )
    }
    return (
      <div className={cx('container')}>
        {this.state.user.firstname &&
          <div className={cx('userName')}>
            <a href='/login'>{user.firstname + ' ' + user.lastname}</a>
          </div>
        }
      </div>
    );
  }
}