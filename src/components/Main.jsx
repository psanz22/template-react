import arrow from '../../public/arrow.svg';
import scrollDown from '../../public/ico-scroll-down.svg';
import one from '../../public/1.png';
import two from '../../public/2.png';
import three from '../../public/3.png';

function Main() {
  return (
    <main>
      <section className='section_1' id='section_1'>
        <h1 className='section_1__h1'>COMIENZOS COMPARTIDOS</h1>
        <p className='section_1__p'>
          Todo lo que necesitan para volver al cole con ilusión
        </p>
        <a href='#section_3'>
          <img
            className='section_1__img'
            src={scrollDown}
            alt='Icono scroll down'
          />
        </a>
      </section>
      <section className='section_2'>
        <span className='section_2__span'>
          HISTORIAS, MODA Y ROPA DEPORTIVA
        </span>
        <h2 className='section_2__h2'>TU TIENDA DE DEPORTE</h2>
        <p className='section_2__p'>
          El deporte nos mantiene en forma. Nos mantiene alerta. Nuestra ropa
          deportiva para hombre y mujer te ofrece las últimas tecnologías, a la
          altura de tu rendimiento, para que superes tu marca personal.
        </p>
        <button className='section_2__button'>
          <a href='https://adalab.es/' target='_blank'>
            Comprar
          </a>
        </button>
      </section>
      <section className='section_3' id='section_3'>
        <p className='section_3__p'>¡Prepáralos con tus marcas favoritas!</p>
        <h4 className='section_3__h4'>VUELTA AL COLE</h4>
        <div className='section_3__container--figure--1'>
          <figure className='section_3__figure--1'>
            <img src={one} alt='Niña con mochila' />
          </figure>
          <span className='section_3__figure--2'>Mochilas escolares</span>
        </div>
        <div className='section_3__container--figure--2'>
          <figure className='section_3__figure--2'>
            <img src={three} alt='Niño con estuche' />
          </figure>
          <span>Estuches</span>
        </div>
        <div className='section_3__container--figure--3'>
          <figure className='section_3__figure--3'>
            <img src={two} alt='Niña con bolsa de deporte' />
          </figure>
          <span>Bolsas de deporte</span>
        </div>
        <button className='section_3__button'>
          <a href='https://adalab.es/' target='_blank'>
            EMPEZAR AHORA
          </a>
        </button>
        <a href='#section_1'>
          <img className='section_3__img' src={arrow} alt='Icono flecha' />
        </a>
      </section>
    </main>
  );
}

export default Main;
