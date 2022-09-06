import React, { PureComponent, Fragment } from 'react'
import styles from './PublicLayout.less'

export default ({ children }) => {
  return (<Fragment>
    <div className={styles.img_bg} />
    <span className={styles.img_bg_mask}/>
    {children}
  </Fragment>)
}
