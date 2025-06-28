export default function Operations() {
  return (
    <div>
      <h1 className="main-title">Operaciones de Prueba</h1>
      
      <h2 className="mt-4">Insert</h2>
      <h3 className="mt-4">Categorias</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751079048/ptw8ffisjinnsgu8dsh5.png" 
          alt="Insert Category" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751079048/tdyxmnwvaoobbarrtlfx.png" 
          alt="Select Category" 
          className="img-fluid"
        />
        <p>se agregan las categorias disponibles en la base de datos y se realiza un <b>select</b> para verificar la informacion</p>
      </div>
      
      <h3 className="mt-4">Producto</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081468/rh2ztpa3szx5biber0wv.png" 
          alt="Insert Producto" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081506/yd2se4iqndyazspdz3ow.png" 
          alt="Select Producto" 
          className="img-fluid"
        />
        <p>se agregan en total 9 productos en la base de datos y se realiza un <b>select</b> para verificar la informacion</p>
      </div>

      <h3 className="mt-4">Rol</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081713/ceojm4iil19azleizzoz.png" 
          alt="Insert Rol" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081801/haayljp3sc4kguyziijg.png" 
          alt="Select Rol" 
          className="img-fluid"
        />
        <p>En la base de datos solo existiran 2 roles, Administrador y usuario <b>select</b> para verificar la informacion</p>
      </div>

       <h3 className="mt-4">Usuario</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081959/khaslqiafkksefimzv0k.png" 
          alt="Insert Usuario" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081801/haayljp3sc4kguyziijg.png" 
          alt="Select Usuario" 
          className="img-fluid"
        />
        <p>Se registran en total 10 usuarios 3 con rol de administrador y los demas como Usuarios todos en estado activos se realiza un <b>select</b> para verificar la informacion</p>
      </div>

      <h3 className="mt-4">Factura</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082671/xxrnykr91uqeznxhjzdo.png" 
          alt="Insert Factura" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082699/r61ffkufqjudz6dmdni3.png" 
          alt="Select Factura" 
          className="img-fluid"
        />
        <p>Se registra una factura de venta y un <b>select</b> para verificar la informacion</p>
      </div>

      <h3 className="mt-4">Detalles de factura</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082819/opn7y17n72wwpnm2giqo.png" 
          alt="Insert Detalles" 
          className="img-fluid"
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082819/iajhzogzm7ienocy5jkz.png" 
          alt="Select Detalles" 
          className="img-fluid"
        />
        <p>Se registran los detalles del pedido y con <b>select</b> se verifica la informacion</p>
      </div>

        <h3 className="mt-4">Informacion detallada de compra</h3>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751083642/dhbdqgyogdu4bwsswknv.png" 
          alt="Inner daros de compra" 
          className="img-fluid"
        />
        <p>se realiza inner join para mostrar los datos relevantes de la compra que se realizo, nombre de usuario, nombre de producto, cantidad, valor y fecha de compra</p>
      </div>
      
    </div>
  );
}

