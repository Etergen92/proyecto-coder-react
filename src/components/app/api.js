
export const llamarProductos = () => {
    const tarea = new Promise((resolve, reject) =>{
      setTimeout(() => {
        const discos = [
          {
            "disco": "Disco 1",
            "artista": "Artista 1",
            "precio": 6500,
            "año": 2010,
            "img": "vinilo-prueba.jpg"
          },
          {
            "disco": "Disco 2",
            "artista": "Artista 2",
            "precio": 4500,
            "año": 2008,
            "img": "vinilo-prueba.jpg"
          },
          {
            "disco": "Disco 3",
            "artista": "Artista 3",
            "precio": 5000,
            "año": 1996,
            "img": "vinilo-prueba.jpg"
          }
        ]
        resolve(discos)
        
      }, 2000);
      
    });
    
    return tarea;
}

export const getItem = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve(
      {
        "disco": "Disco 1",
        "artista": "Artista 1",
        "precio": 6500,
        "año": 2010,
        "stock": 20,
        "genero" : "rock",
        "formato": "vinilo",
        "origen": "uk",
        "img": "vinilo-prueba.jpg"
      }
    ), 2000);
  }) 



