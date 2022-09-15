
export const llamarProductos = () => {
    const tarea = new Promise((resolve, reject) =>{
      setTimeout(() => {
        const discos = [
          {
            "id": "1",
            "disco": "Disco 1",
            "artista": "Artista 1",
            "precio": 6500,
            "año": 2010,
            "img": "vinilo-prueba.jpg",
            "category": "rock",
            "stock": 15
          },
          {
            "id": 2,
            "disco": "Disco 2",
            "artista": "Artista 9",
            "precio": 4500,
            "año": 2008,
            "img": "vinilo-prueba.jpg",
            "category": "rock",
            "stock": 15
          },
          {
            "id": 3,
            "disco": "Disco 3",
            "artista": "Artista 21",
            "precio": 5000,
            "año": 1996,
            "img": "vinilo-prueba.jpg",
            "category": "jazz",
            "stock": 15
          },
          {
            "id": 4,
            "disco": "Disco 4",
            "artista": "Artista 10",
            "precio": 5000,
            "año": 1996,
            "img": "vinilo-prueba.jpg",
            "category": "jazz",
            "stock": 15
          },
          {
            "id": 5,
            "disco": "Disco 16",
            "artista": "Artista 31",
            "precio": 5000,
            "año": 1996,
            "img": "vinilo-prueba.jpg",
            "category": "rock",
            "stock": 15
          },
          {
            "id": 6,
            "disco": "Disco 5",
            "artista": "Artista 8",
            "precio": 5000,
            "año": 1996,
            "img": "vinilo-prueba.jpg",
            "category": "pop",
            "stock": 15
          },
          {
            "id": 7,
            "disco": "Disco 6",
            "artista": "Artista 5",
            "precio": 7000,
            "año": 1983,
            "img": "vinilo-prueba.jpg",
            "category": "jazz",
            "stock": 15
          },
          {
            "id": 8,
            "disco": "Disco 7",
            "artista": "Artista 12",
            "precio": 5000,
            "año": 1986,
            "img": "vinilo-prueba.jpg",
            "category": "pop",
            "stock": 15
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
        "id": 1,
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



