export default function Operations() {
  return (
    <div>
      <h1 className="main-title">Operaciones de Prueba</h1>
      
      <h2 className="mt-4">Insert</h2>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://via.placeholder.com/600x200?text=Captura+Insert" 
          alt="Operación Insert" 
          className="img-fluid"
        />
      </div>
      
      <h2 className="mt-4">Update</h2>
      <div className="mb-4">
        <img 
          src="https://via.placeholder.com/600x200?text=Captura+Update" 
          alt="Operación Update" 
          className="img-fluid"
        />
      </div>
      
      <h2 className="mt-4">Delete</h2>
      <div className="mb-4">
        <img 
          src="https://via.placeholder.com/600x200?text=Captura+Delete" 
          alt="Operación Delete" 
          className="img-fluid"
        />
      </div>
    </div>
  );
}

