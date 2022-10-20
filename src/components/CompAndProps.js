import React, { Component } from "react";

import "../App.css";

function Square(props) {
    const card = {
        width: '300px',
        padding: '20px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column'
    }

    const desc = {
        margin: 0 ,
        marginTop:'2px', 
        marginBottom: '25px',
        fontSize: '16px',
        color: 'black',
        opacity: '0.8'
    }

    const thumbnail = {
        width: '100%',
        height: '200px',
        backgroundColor: props.warna,
        borderRadius: '12px'
    }

    const btnLink = {
        textDecoration: 'none',
        marginLeft: 'auto',
        fontSize: '16px',
        padding: '6px',
        backgroundColor: '#ECB365',
        color: 'white',
        fontWeight: '600',
        borderRadius : '2px'

    }




    return (
        <div style={card}>
            <div style={thumbnail}>
            </div>
            <h3 style={{margin: 0, color: '#064663'}}>Hai {props.nama}</h3>
            <p style={desc}>Saya Seorang {props.gelar}</p>
            <a href={props.link} style={btnLink}>Click here</a>
        </div>
    );
}

export default class CompAndProps extends Component {
  render() {
    const bgColor = {
      backgroundColor: this.props.bgColor,
      borderRadius: '8px',
    };
    return (
      <div className="wrapper" style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
        <div className="User-info" style={bgColor}>
          <Square nama="helmy" gelar="Penembak" link="/kiri" warna="#FF74B1"/>
        </div>
        <div className="User-info" style={bgColor}>
          <Square nama="khoirul" gelar="Pelaut" link="/kanan" warna="#A7FFE4"/>
        </div>
        <div className="User-info" style={bgColor}>
          <Square nama="firdi" gelar="Penyelam" link="/kanan" warna="#FFD6EC"/>
        </div>
      </div>
    );
  }
}
