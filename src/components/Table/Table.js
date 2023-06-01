import React, { Component } from 'react';

/* Styles */
import style from './Table.module.css';

/* Components and Pages */


class Table extends Component {

    constructor(props) {
        super()
        this.header = props.header || []
        this.content = props.content || []

        this.state = {
            header: this.header,
            content: this.content
        }
    }

    render() {
        return (
            <>
                <div className={style.body}>
                    <table className={style.table_fill}>
                        <thead>
                            <tr className={style.tr}>
                                {
                                    this.state.header.map((header, index) =>
                                        (<th key={`header-${index}`} className={`${style.text_left} ${style.th}`}>{header}</th>)
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className={style.table_hover}>
                            {
                                this.state.content.map((row, index) =>
                                (<tr key={`row-${index}`} className={style.tr}>
                                    {
                                        row.map((cell, index) =>
                                            (<td key={`cell-${index}`} className={`${style.text_left} ${style.td}`}>{cell}</td>)
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