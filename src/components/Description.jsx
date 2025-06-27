export default function Description() {
  return (
    <div>
      <h1 className="main-title">Descripción del Proyecto</h1>
      <p>
        Este proyecto consiste en el desarrollo de una aplicación web de
        comercio electrónico enfocada en la venta de implementos deportivos,
        diseñada para brindar a los usuarios una experiencia de compra rápida,
        intuitiva y segura. La interfaz del sistema ha sido desarrollada
        utilizando React, permitiendo una navegación dinámica y fluida, mientras
        que el manejo de datos se gestiona a través de una base de datos
        relacional PostgreSQL, garantizando eficiencia, integridad y
        escalabilidad en el almacenamiento de la información.
      </p>
      <p>
        El sistema permite a los usuarios explorar una variedad de productos
        deportivos organizados por categorías, agregar artículos al carrito,
        gestionar pedidos y realizar compras. A su vez, los administradores
        pueden gestionar productos, categorías, inventario y visualizar
        estadísticas de ventas.
      </p>
      <p>
        El modelo entidad-relación (MER) ha sido cuidadosamente estructurado
        para representar las entidades clave del negocio como usuarios,
        productos, pedidos, categorías, métodos de pago y más, permitiendo un
        control preciso sobre las operaciones del e-commerce.
      </p>
    </div>
  );
}

