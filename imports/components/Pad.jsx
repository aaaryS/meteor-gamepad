import React, { Component, PropTypes } from 'react'

import './Pad.scss'

export default class Pad extends Component {

  static propTypes = {
    match: PropTypes.object,
  }

  // onClick = (p = this.props) => () => {
  //   Meteor.call('actions.insert', {
  //     token: p.match.params.token,
  //     type: 'click'
  //   });
  // }


  render() {
    return (
      <div className='pad__wrapper' style={{width: 580, height: 220}}>
        <div className='pad'>
          <div className='pad__inner-background'>
            <div className='pad__cross-buttons'>
              <div className='pad__cross-buttons__button pad__cross-buttons__button--top'>
                <div className='pad__cross-buttons__button__circle'/>
              </div>
              <div className='pad__cross-buttons__button pad__cross-buttons__button--bottom'>
                <div className='pad__cross-buttons__button__circle'/>
              </div>
              <div className='pad__cross-buttons__button pad__cross-buttons__button--middle'>
                <div className='pad__cross-buttons__button__circle'/>
              </div>
              <div className='pad__cross-buttons__button pad__cross-buttons__button--left'>
                <div className='pad__cross-buttons__button__circle'/>
              </div>
              <div className='pad__cross-buttons__button pad__cross-buttons__button--right'>
                <div className='pad__cross-buttons__button__circle'/>
              </div>
            </div>

            <div className='pad__menu'>
              <div className='pad__menu__btn pad__menu__btn--top'></div>
              <div className='pad__menu__btn'></div>
              <div className='pad__menu__btn'>
                <span>{'Select'}</span>
                <span>{'Start'}</span>
              </div>
              <div className='pad__menu__btn-wrapper'>
                <div className='pad__menu__btn-wrapper  pad__menu__btn-wrapper__btn'/>
                <div className='pad__menu__btn-wrapper  pad__menu__btn-wrapper__btn'/>

              </div>
              <div className='pad__menu__btn pad__menu__btn--bottom'></div>
            </div>

            <div className='pad__round-btn pad__round-btn--a'>
              <div className='pad__round-btn__circle'></div>
              <span className='pad__round-btn__label'>{'A'}</span>
            </div>

            <div className='pad__round-btn pad__round-btn--b'>
              <div className='pad__round-btn__circle'></div>
              <span className='pad__round-btn__label'>{'B'}</span>
            </div>

            <div className='pad__title'>
              {'Nintendo'}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
