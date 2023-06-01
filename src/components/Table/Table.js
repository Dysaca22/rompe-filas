import React, { Component } from 'react';

/* Styles */
import style from './Table.module.css';

/* Components and Pages */


class Table extends Component {

    constructor(props) {
        super()
        this.header = props.header || []
        this.content = props.content || []
    }

    render() {
        return (
            <>
                <div className={style.body}>
                    <table className={style.table_fill}>
                        <thead>
                            <tr className={style.tr}>
                                {
                                    this.header.map(header =>
                                        (<th className={`${style.text_left} ${style.th}`}>{header}</th>)
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className={style.table_hover}>
                            {
                                this.content.map(row =>
                                (<tr className={style.tr}>
                                    {
                                        row.map(cell =>
                                            (<td className={`${style.text_left} ${style.td}`}>{cell}</td>)
                                        )
                                    }
                                </tr>)
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Table