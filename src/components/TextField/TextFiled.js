import React, { Component } from 'react';
import styles from './TextFiled.module.sass';

class TextFiled extends Component {

    render() {
        return (
            <div className={styles.TextFiled_container}>
                <div className={styles.title}>
                    <span>{this.props.name}:</span>
                </div>
                <div className={styles.input}>
                    <input type={this.props.type}
                           value={this.props.value}
                           onChange={this.props.onChange}/>
                </div>
            </div>
        )
    }
}

export default TextFiled;
