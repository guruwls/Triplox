import React, { Component } from 'react';
import { Link } from 'react-router';
import Popover from 'material-ui/lib/popover/popover';

import RaisedButton from 'material-ui/lib/raised-button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { styles } from './styles.scss';

export const height = 80; // todo: Is there a better way?

export class Header extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    showPhoneMenu: React.PropTypes.bool,
    showPopup: React.PropTypes.func,
    loginMenu: React.PropTypes.bool,
    isLogging: React.PropTypes.bool,
    loginDialogVisible: React.PropTypes.bool,
    showLoginMenu: React.PropTypes.func,
    showLoginDialog: React.PropTypes.func,
    hideLoginDialog: React.PropTypes.func,
    show: React.PropTypes.func,
    user: React.PropTypes.string,
    token: React.PropTypes.string,
    errorOnLastLoginAttempt: React.PropTypes.string,
    login: React.PropTypes.func,
    logout: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      showBackground: false,
      activePopover: 'none'
    };
    this.animateHeader = this.animateHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateHeader);
  }

  animateHeader() {
    window.pageYOffset > 0 ?
      this.setState({ showBackground: true }) :
      this.setState({ showBackground: false });
  }

  handleMenu() {
    const { showPhoneMenu } = this.props;

    if (showPhoneMenu) {
      this.props.show(false);
    } else {
      this.props.show(true);
    }
  }

  render() {
    const { showBackground, error } = this.state;
    const { showPhoneMenu, loginMenu } = this.props;

    const showPopover = (id) => (e) => this.setState({
      activePopover: id,
      anchorEl: e.currentTarget
    });

    const closePopover = () => {
      this.setState({
        activePopover: 'none'
      });
    };

    const renderApps = () => {
      return (
        <div
          style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {/* Basic grid list with mostly default options */}
        </div>
      );
    };

    const renderNav = () => {

      return (
        <nav>
          <label
            onMouseEnter={showPopover('invalid')}
            activeClassName="active"
          >
            Módulos
          </label>
          <label hidden={!this.props.token}
                 onMouseEnter={showPopover('apps')}
                 activeClassName="active"
          >
            Módulos
          </label>
        </nav>
      );
    };

    const renderLoginButton = () => {
      return (
        <div>
</div>
      );
    };

    const renderAccountButton = () => {

      const logout = (event) => {
        this.props.logout();
        event.preventDefault();
      };

      return (
        <span className="btn-group">
            <button
              className="login btn btn-default dropdown-toggle"
              data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"
            >
              {this.props.user} <span className="caret"></span>
            </button>

            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li>
                <Link
                  to="home"
                  onClick={logout}
                >
                  Log out
                </Link></li>
            </ul>

          </span>
      );
    };

    const renderLogin = () => {
      return (
        <span className={`${ this.props.loginDialogVisible && 'no-show'}`}>
          {this.props.token ? renderAccountButton() : renderLoginButton()}
        </span>
      );
    };

    const cnt = (
      <div>
        <h2>Here is an arbitrary popover</h2>
        <p>Hi - here is some content</p>
        <RaisedButton primary={true} label="Here is a button"/>
      </div>
    );

    const background = {
      background: '#6890b2',
      opacity: 0.9
    };

    return (
      <header className={styles}>
        <div className={`fixed-header container ${showBackground && 'background'}`}>
          <div className="row">
            <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3">
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <nav>
                { renderNav() }
              </nav>
            </div>

            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
              {renderLogin()}
            </div>
          </div>
        </div>

        <Link to="/">
          <div className={window.pageYOffset === 0 ? 'logo-symbol' : `logo-small`}/>
        </Link>

        <Popover
          open={this.state.activePopover !== 'none'}
          anchorEl={this.state.anchorEl}
          autoCloseWhenOffScreen={true}
          useLayerForClickAway={false}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          targetOrigin={{ vertical: 'top', horizontal: 'left' }}
          onRequestClose={closePopover}
          style={{
            borderRadius: 10,
            background: '#ffef79'
          }}
        >
          <div style={{ padding: 20 }}>
            {this.state.activePopover === 'invalid' ? cnt : renderApps()}
          </div>
        </Popover>

      </header>
    );
  }
}

//<div
//  className={ `fixed-header ${ show && 'show' } hidden-xs hidden-sm` }>
//
//  <div className="container">
//    <div className="row">
//      <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 fixed-nav">
//        { this.renderNav() }
//      </div>
//      <div
//        className={ `col-xs-12 col-sm-4 col-md-4 col-lg-3 text-right login-fixed-button` }>
//        { renderLogin() }
//      </div>
//      <div
//        className="col-xs-12 col-sm-12 hidden-md hidden-lg text-right"
//        onClick={ this.handleMenu }
//      >
//        <span className={ `burger ${ showPhoneMenu && 'cross' }` }/>
//      </div>
//    </div>
//  </div>
//</div>
