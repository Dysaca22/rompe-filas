import React, { Component, createRef } from 'react'
import axios from 'axios'

/* Styles */
import style from './ListTurn.module.css'

/* Components and Pages */
import Calendar from '../../components/Calendar'
import Cube from '../../components/Cube'
import Table from '../../components/Table'

/* Icons */
import { IconClipboard } from '@tabler/icons-react';


export default class ListTurn extends Component {

    constructor(props) {
        super()
        this.header = ['Date', 'Time', 'Action']
        this.content = []
        this.refTable = createRef()
    }

    state = {
        token: JSON.parse(localStorage.getItem('tokenStorage')) || ''
    }

    componentDidMount() {
        if (this.state.token !== ''){
            this.loadTurns()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.token !== this.state.token) {
            if (this.state.token !== ''){
                this.loadTurns()
            }
        }
    }

    loadTurns = async () => {
        const tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''

        await axios.get('http://localhost:8000/api/turn/', {
            headers: {
                'Authorization': `Bearer ${tokenStorage}`
            }
        })
            .then(async (response) => {
                this.content = response.data.map(obj => [obj['date'], obj['time'], (<IconClipboard size={30} />)])
                await this.refTable.current.setState({
                    content: this.content
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    changeContent = async (newContent) => {
        await this.refTable.current.setState({
            content: [...this.refTable.current.state.content, newContent]
        })
    }

    render() {
        return (
            <>
                <div id='listTurn' className={style.container}>
                    <section className={style.section}>
                        <div className={style.banner}>
                            <Calendar fun={this.changeContent.bind(this)} />
                            <div className={style.title_subtitle}>
                                <h1 className={style.title}>Create and Check Your Turns</h1>
                                <div className={style.cube}>
                                    <Cube />
                                </div>
                            </div>
                        </div>
                        <div className={style.banner}>
                            <div className={style.table_div}>
                                <Table ref={this.refTable} header={this.header} content={this.content} />
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}