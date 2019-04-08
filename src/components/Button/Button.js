import React, { Component } from 'react';
import styles from './Button.module.sass';

class Button extends Component {

    componentWillReceiveProps(nextProps, nextContext) {

    }

    render() {
        return (
            <div className={styles["Button-container"]}>
                <button className={styles.btn}
                onClick={() => this.props.onClick()}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button;
