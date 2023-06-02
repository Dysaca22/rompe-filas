import React, { Component } from 'react'
import axios from 'axios'
import {
    Accordion,
    AccordionPanel,
    Box,
    Button,
    Form,
    FormField,
    TextArea,
    StarRating,
    Card,
    CardHeader,
    CardBody,
} from "grommet"

//import style from './PanelRating.module.css';


export default class Notification extends Component {

    constructor(props) {
        super()
        this.state = {
            content: props.content,
            turnsQualify: []
        }
        this.lastQualifications()
    }

    lastQualifications() {
        const tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''

        axios.get(`http://localhost:8000/api/list-qualify/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStorage}`
            }
        })
            .then(async (response) => {
                const { ok } = response.data
                if (ok) {
                    const data = response.data['qualifications'].map(obj => obj['turn'])
                    this.setState({
                        turnsQualify: data
                    })
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    qualification = (event) => {
        event.preventDefault()
        const target = event.target
        const turn = target.name
        const rate = target.querySelector('#star-rating').parentElement.value
        const comment = target.querySelector('#comments').value

        const data = {
            rate,
            comment
        }

        const tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''

        axios.post(`http://localhost:8000/api/qualify/${turn}/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStorage}`
            }
        })
            .then(async (response) => {
                const { ok } = response.data
                if (ok) {
                    const aux = this.state.content
                    await this.setState({
                        content: [],
                        turnsQualify: [...this.state.turnsQualify, turn]
                    })
                    setTimeout(() => {
                        this.setState({
                            content: aux,
                        })
                    }, 2000)
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const handleOnChange = (event) => {
            const value = event.target.value
            event.target.parentElement.parentElement.parentElement.parentElement.value = value
        };

        return (
            <>
                <div>
                    <Card height="medium" width="large" background="light-1">
                        <CardHeader pad="medium">Turns</CardHeader>
                        <CardBody pad="medium">
                            <Box>
                                <Accordion overflow="auto" multiple>
                                    {this.state.content.map((item, index) =>
                                        this.state.turnsQualify.indexOf(item[2]) === -1 ?
                                            (
                                                <AccordionPanel key={`panel-${index}`} label={`Date ${item[0]} | Time ${item[1]}`}>
                                                    <Box background="light-2" pad="small" overflow="auto" height="250px">
                                                        <Form name={item[2]} onSubmit={this.qualification}>
                                                            <FormField value={0} onChange={handleOnChange} htmlFor="star-rating" name="rating">
                                                                <StarRating id="star-rating" name="rating" />
                                                            </FormField>
                                                            <FormField label="Comments" htmlFor="comments" name="comments">
                                                                <TextArea id="comments" name="comments" />
                                                            </FormField>
                                                            <Box direction="row">
                                                                <Button label="Submit" primary type="submit" />
                                                            </Box>
                                                        </Form>
                                                    </Box>
                                                </AccordionPanel>
                                            ) : (
                                                <AccordionPanel key={`panel-${index}`} label="Turn already classified"></AccordionPanel>
                                            )
                                    )}
                                </Accordion>
                            </Box>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}