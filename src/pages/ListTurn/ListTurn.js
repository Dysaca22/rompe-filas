import React, { Component } from 'react'

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
    }

    render() {
        return (
            <>
                <Navbar />
                <div className={style.container}>
                    <div className={style.title_subtitle}>
                        <h1 className={style.title}>Your Turns</h1>
                    </div>
                    <section className={style.section}>
                        <Calendar />
                        <div className={style.table_div}>
                            <Table header={this.header} content={this.content} />
                        </div>
                    </section>
                </div>
            </>
        )
    }
}