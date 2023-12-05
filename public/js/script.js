async function addToCart(id, carrito) {
    try {
      const response = await postCart(id, carrito);
  
      if (response.ok) {
        alert("Producto agregado al carrito con éxito");
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Hubo un error al agregar el producto al carrito", err);
    }
  }
  
  async function postCart(id, carrito) {
    try {
      const response = await fetch(`/api/carts/${carrito}/product/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al agregar el producto al carrito: ${response.status}`);
      }
  
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  
  async function increase(idCart, idProduct) {
    try {
      const response = await postCart(idProduct, idCart);
  
      if (response.ok) {
        alert("Producto agregado al carrito con éxito");
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Hubo un error al agregar el producto al carrito", err);
    }
  }
  