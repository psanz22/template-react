import '../scss/Main.scss';

function Main() {
  return (
    <main className='main'>
      <aside className='main__aside'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/012/002/361/original/me-letter-logo-design-initial-letters-me-logo-icon-abstract-letter-me-minimal-logo-design-template-m-e-letter-design-with-black-colors-me-logo-vector.jpg'
          alt='about me'
          className='main__aside__img'
        />
        <div className='main__aside__containerText'>
          <h1 className='main__aside__title'>Hello world!</h1>
          <p className='main__aside__title-2'>
            Soy Paula: desarrolladora junior fullstack.
          </p>
        </div>
      </aside>
      <section className='main__section'>
        <div className='main__section__carroussel'>
          <img
            src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/arcane-jinx-2575357.jpg?tf=3840x'
            alt='proyectos'
            className='main__section__img'
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
