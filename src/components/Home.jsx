export default function Home() {
  return (
    <div>
      <h1 className="main-title">RZDX Implementos Deportivos</h1>
      <h2>Sector: Deportivo</h2>
      <img
        src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751035853/nxv3p74zty7ij9uqay4r.png"
        alt="Imagen del Proyecto"
        style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '30px auto' }}
      />
      <p>En RZDX Implementos Deportivos, nos apasiona el deporte y la excelencia. Nos dedicamos a ofrecer productos de alta calidad que acompañan a los atletas en cada paso de su camino.

Con un equipo comprometido y años de experiencia, brindamos atención personalizada y soluciones efectivas para todas tus necesidades deportivas.</p>
     <a
        href="https://rzdx.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginTop: '30px', fontSize: '1.2em', color: '#e63946' }}
      >
        Visita nuestra página web
      </a>
    </div>
  );
}

