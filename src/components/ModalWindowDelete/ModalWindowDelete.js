import React, { Component } from 'react';
import styles from './ModalWindowDelete.module.sass';
import Modal from 'react-modal';


const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModalWindowDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            valueForEdit: '',
            fieldNameForEdit: this.props.fieldNameForEdit,
            id: this.props.id,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.openModalBtn} onClick={this.openModal}> </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <div className={styles.modal}>
                        <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure?</h2>

                        <div className={styles.b}>
                            <div onClick={() => this.props.myHandler(this.state.fieldNameForEdit, this.state.valueForEdit, this.state.id)}>
                                <button onClick={this.closeModal}>OK</button>
                            </div>
                            <div>
                                <button onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalWindowDelete;
