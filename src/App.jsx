import React from 'react';
import ReactDOM from 'react-dom';
import './Estilo.css';

const citas = [
  {
    cita: "Actúa como si lo que haces marcara una diferencia. Lo hará.",
    author: "William James"
  },
  {
    cita: "La vida es un 10% de lo que te sucede y un 90% de cómo reaccionas ante ello.",
    author: "Charles R. Swindoll"
  },
  {
    cita: "La calidad no es un acto, es un hábito.",
    author: "Aristotle"
  },
  {
    cita: "Siempre lo has intentado, siempre has fallado. Da igual. Inténtalo de nuevo. Falla de nuevo. Falla pero mejora.",
    author: "Samuel Beckett"
  },
  {
    cita: "La voluntad es un pequeño fuego que ardiente hace grandes cosas." ,
    author:"Miguel de Cervantes"
  },
  {
    cita: "Bueno, mejor, lo mejor. Nunca pares de mejorar. Hasta que lo bueno sea mejor y lo mejor sea lo óptimo.",
    author: "St. Jerome"
  },
  {
    cita: "Nuestra mayor debilidad radica en el abandono. La forma más segura de triunfar es intentarlo una vez más.",
    author: "Thomas A. Edison"
  },
  {
    cita: "Todo parece imposible hasta que se consigue.",
    author: "Nelson Mandela"
  },
  {
    cita: "Si estás pasando por el infierno, sigue adelante.",
    author: "Winston Churchill"
  },
  {
    cita: "No importa lo despacio que avances, con tal de que no pares.",
    author: "Confucius"
  },
];

const backgroundColors = [
  '#CE9FFC',
  '#FFF6B7', 
  '#FCCF31',
  '#F97794',
  '#43CBFF',
  '#5EFCE8', 
  '#FFD26F',
  '#FFDB01',
  '#EECE13',
  '#FDD819',
  '#79F1A4',
  '#FFF720',
  '#F0FF00',
  '#FD6E6A',
  '#F6D242', 
  '#81FFEF',
  '#FAB2FF',
  '#FFA8A8',
  '#FFF720'
]

class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indiceAleatorio: Math.floor(Math.random() * citas.length),
      colorAleatorio: Math.floor(Math.random() * backgroundColors.length),
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
    const otroIndiceAleatorio = Math.floor(Math.random() * citas.length);
    const nuevoColorAleatorio = Math.floor(
      Math.random() * backgroundColors.length
    );
    if (otroIndiceAleatorio !== this.state.indiceAleatorio &&
      nuevoColorAleatorio !== this.state.colorAleatorior) {
      this.setState({
        indiceAleatorio: otroIndiceAleatorio,
        colorAleatorio: nuevoColorAleatorio,
      });
    } else {
      this.handleClick();
    }
  }
  

  render() {
    document.querySelector("body").style.background =
      backgroundColors[this.state.colorAleatorio];
    const citaActual = citas[this.state.indiceAleatorio];
    return (
      <div  id="quote-box">
        <Frase propiedad={citaActual} />
        <Autor propiedad={citaActual} />
        <Post propiedad={citaActual} />
        <button id="new-quote" onClick={this.handleClick} className="botoncito" >
          New quote
        </button>
      </div>
    );
  }
}

const Frase = (props) => {

  return (
    <div id="text" >
      <blockquote ><i className="fa fa-quote-left"  style={{marginRight: '9px'}}></i>{props.propiedad.cita}</blockquote>
    </div>
  );
};

const Autor = (props) => {

  return (
    <div id="author"   >- {props.propiedad.author}</div>
  );
}

const Post = (props) => {
  return (
    <>
    <a id="tweet-quote" className="tweet" target="_blank"  href={`https://twitter.com/intent/tweet?text=${
      props.propiedad.cita
    } ${
      props.propiedad.author
    } %23randomquotemachine %23freeCodeCamp`}><i className="fab fa-twitter"></i></a>
    <a id="tumblr" className="tumblr" href="https://www.tumblr.com/" target="_blank"><i class="fab fa-tumblr"></i></a>
    </>
  );
}

ReactDOM.render(<Boton  />, document.getElementById('new-quote'));