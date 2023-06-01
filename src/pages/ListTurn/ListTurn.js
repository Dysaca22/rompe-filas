import React, { Component } from 'react'

/* Styles */
import style from './ListTurn.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'
import Calendar from '../../components/Calendar'


export default class ListTurn extends Component {

    constructor(props) {
        super()
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
                            <table className={style.table}>
                                <tr className={style.td_th}>
                                    <td className={style.td_th}>Date</td>
                                    <td className={style.td_th}>Tobias</td>
                                    <td className={style.td_th}>Linus</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}