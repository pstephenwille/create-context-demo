import React from 'react';
import {Button, Card} from "@material-ui/core";

function returnHome(props:any) {
    props.history.push("/services");
}

export default (props:any) => (
    <Card style={{height: 875, width: "90%", textAlign: "center"}}>
        <div style={{float: "left"}}>
            <Button variant="contained" color="primary" style={{marginTop: "1rem"}} onClick={() => returnHome(props)}>All Assets</Button>
        </div>
        <div>
            <h1> {props.match.params.name}</h1>
        </div>

        <Card style={{height: 575, border: "3px solid black"}}>
            <h2 style={{textAlign: "center"}}>Graph goes here...</h2>
        </Card>

        <div style={{display: "inline-flex", height: "21%", width: "99%", marginTop: "1%"}}>
            <Card style={{width: "33%", textAlign: "center", border: "1px solid black", marginLeft: "15px"}}>
                <h1>Number of Evaluations</h1>
                <h3>1</h3>
            </Card>
            <Card style={{width: "33%", textAlign: "center", border: "1px solid black"}}>
                <h1>Current Score</h1>
                <h3>100%</h3>
            </Card>
            <Card style={{width: "33%", textAlign: "center", border: "1px solid black"}}>
                <Button variant="contained" color="primary" style={{height: 200, width: "100%"}}>Re-Evaluate</Button>
            </Card>
        </div>

    </Card>
);
