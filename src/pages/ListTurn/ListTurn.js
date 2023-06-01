import React, { Component, createRef } from 'react'

/* Styles */
import style from './ListTurn.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'
import Calendar from '../../components/Calendar'
import Table from '../../components/Table'

/* Icons */
import { IconClipboard } from '@tabler/icons-react';


export default class ListTurn extends Component {

    constructor(props) {
        super()
        this.header = ['Date', 'Time', 'Action']
        this.content = [
            ['1', '2', (<IconClipboard size={30} />)],
        ]
        this.refTable = createRef()
    }

    changeContent = async(newContent) => {
        await this.refTable.current.setState({
            content: [...this.refTable.current.state.content, newContent]
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <div className={style.container}>
                    <div className={style.title_subtitle}>
                        <h1 className={style.title}>Turns</h1>
                    </div>
                    <section className={style.section}>
                        <Calendar fun={this.changeContent.bind(this)} />
                        <div className={style.table_div}>
                            <Table ref={this.refTable} header={this.header} content={this.content} />
                        </div>
                    </section>
                </div>
            </>
        )
    }
}