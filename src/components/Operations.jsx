export default function Operations() {
  return (
    <div>
      <h1 className="main-title">Operaciones de Prueba</h1>
      <br>
        <br>
      <h2 className="mt-4">Insert</h2>
          <br>
            <br>
      <h3 className="mt-4">Categorias</h3>
              <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751079048/ptw8ffisjinnsgu8dsh5.png"
          width="300" height="200
          alt="Insert Category" 
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751079048/tdyxmnwvaoobbarrtlfx.png"
            width="300" height="200
          alt="Select Category" 
        />
        <p>se agregan las categorias disponibles en la base de datos y se realiza un <b>select</b> para verificar la informacion</p>
      </div>
      <br><br>
      <h3 className="mt-4">Producto</h3>
        <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081468/rh2ztpa3szx5biber0wv.png"
          width="300" height="200
          alt="Insert Producto" 
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081506/yd2se4iqndyazspdz3ow.png"
          width="300" height="200
          alt="Select Producto" 
        />
        <p>se agregan en total 9 productos en la base de datos y se realiza un <b>select</b> para verificar la informacion</p>
      </div>
      <br><br>
      <h3 className="mt-4">Rol</h3>
        <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081713/ceojm4iil19azleizzoz.png" 
          width="300" height="200
          alt="Insert Rol" 
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081801/haayljp3sc4kguyziijg.png" 
          width="300" height="200
          alt="Select Rol" 
          
        />
        <p>En la base de datos solo existiran 2 roles, Administrador y usuario <b>select</b> para verificar la informacion</p>
      </div>
        <br><br>
       <h3 className="mt-4">Usuario</h3>
          <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751081959/khaslqiafkksefimzv0k.png" 
          width="300" height="200
          alt="Insert Usuario" 
          
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751084121/yhvxj253ftxhkoiqzoaj.png" 
          width="300" height="200
            alt="Select Usuario" 
        />
        <p>Se registran en total 10 usuarios, 3 con rol de administrador y los demas como Usuarios todos en estado activos se realiza un <b>select</b> para verificar la informacion</p>
      </div>
        <br><br>
      <h3 className="mt-4">Factura</h3>
          <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082671/xxrnykr91uqeznxhjzdo.png" 
          width="300" height="200
          alt="Insert Factura" 
          
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082699/r61ffkufqjudz6dmdni3.png" 
          width="300" height="200
            alt="Select Factura" 
          
        />
        <p>Se registra una factura de venta y un <b>select</b> para verificar la informacion</p>
      </div>
        <br><br>
      <h3 className="mt-4">Detalles de factura</h3>
          <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082819/opn7y17n72wwpnm2giqo.png" 
          width="300" height="200
          alt="Insert Detalles" 
          
        />
          <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751082819/iajhzogzm7ienocy5jkz.png" 
          width="300" height="200
            alt="Select Detalles" 
          
        />
        <p>Se registran los detalles del pedido y con <b>select</b> se verifica la informacion</p>
      </div>
        <br><br>
        <h3 className="mt-4">Informacion detallada de compra</h3>
          <br>
      <div className="mb-4">
        {/* Puedes usar imágenes o enlaces */}
        <img 
          src="https://res.cloudinary.com/dwp4z1yok/image/upload/v1751083642/dhbdqgyogdu4bwsswknv.png" 
          width="300" height="200
          alt="Inner daros de compra" 
          
        />
        <p>se realiza inner join para mostrar los datos relevantes de la compra que se realizo, nombre de usuario, nombre de producto, cantidad, valor y fecha de compra</p>
      </div>
      
    </div>
  );
}

