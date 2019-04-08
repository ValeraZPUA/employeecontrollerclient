import React, { Component } from 'react';
import styles from './TextFiled.module.sass';

class TextFiled extends Component {

    render() {
        return (
            <div className={styles.TextFiled_container}>
                <span>{this.props.name}</span>
                <input type={this.props.type}
                       value={this.props.value}
                       onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default TextFiled;
