import { dataAegis } from '../dataAegis';
import { useState } from 'react';

function Header() {
  return title;
}
const title = <h3>Biodata Aegis</h3>;

function Square(props) {
  const card = {
    width: '300px',
    padding: '20px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '12px',
    marginBottom: '20px',
  };

  const desc = {
    margin: 0,
    marginTop: '2px',
    marginBottom: '25px',
    fontSize: '16px',
    color: 'black',
    opacity: '0.8',
  };

  const thumbnail = {
    width: '100%',
    height: '200px',
    backgroundColor: props.warna,
    borderRadius: '12px',
  };

  const btnLink = {
    textDecoration: 'none',
    marginLeft: 'auto',
    fontSize: '16px',
    padding: '6px',
    backgroundColor: '#ECB365',
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.5em',
    transition: 'all 0.5s',
    ':hover': {
      paddingRight: '25px',
    },
  };

  return (
    <div style={card}>
      <div style={thumbnail}></div>
      <h3 style={{ margin: 0, color: '#064663' }}>Hai {props.nama}</h3>
      <p style={desc}>Hobi saya {props.hobi}</p>
      <a href={props.link} style={btnLink}>
        Click here
      </a>
    </div>
  );
}

export default function Main() {
  const [aegis, setAegis] = useState([]);

  function filterData() {
    const input = document.getElementById('inputan');
    const element = dataAegis[0].filter((el) => el.nama_lengkap.toLowerCase().includes(input.value.toLowerCase()));

    if (input.value === '' || element.length === 0) {
      setAegis([]);
    } else {
      setAegis(element);
    }
  }

  // styling nya disini aja make class nanti taro di style
  const wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  };

  const button = {
    width: '3.5em',
    marginLeft: '0.5em',
    borderRadius: '0.5em',
    fontSize: '16pt',
    padding: '10px',
    backgroundColor: 'gold',
    color: 'biru',
    transition: 'all .5s',
  };

  const titleStyled = {
    margin: '2em',
  };

  const inputText = {
    fontFamily: 'roboto',
    fontSize: '1.3rem',
    border: '3 px solid',
    borderRadius: '8px',
    borderColor: 'yellow',
    padding: '7px 10px',
    background: 'white',
  };

  return (
    <div>
      <div style={titleStyled}>
        <Header />
      </div>
      <input style={inputText} id="inputan" />
      <button style={button} onClick={filterData}>
        {' '}
        Cari{' '}
      </button>

      <div style={wrapper}>
        {aegis.map((item) => {
          return <Square nama={item.nama_lengkap} hobi={item.hobi} warna="#FF74B1" />;
        })}
      </div>
    </div>
  );
}
