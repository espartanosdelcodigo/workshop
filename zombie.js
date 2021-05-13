/*let gameObject = {
  stats: {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20,
  },
  items: {
    linternas: 0,
    estacas: 2,
    tijeras: 0,
    globos: 0,
    espejo: false,
  },
};

console.log(gameObject.stats.fuerza);
*/
export function zombie(array) {
  if (array.items.estacas > 1) {
    array.stats.fuerza = array.stats.fuerza + 5;
    array.items.estacas = array.items.estacas - 1;
    console.log("Has ganado 5 puntos de fuerza");
  } else {
    array.stats.fuerza = array.stats.fuerza - 10;
    console.log("Has perdido 10 puntos de fuerza");
    if (array.stats.fuerza <= 0) {
      array.stats.carisma = array.stats.carisma - 1;
      array.stats.belleza = array.stats.belleza - 1;
      array.stats.inteligencia = array.stats.inteligencia - 1;
    }
  }
}

/*zombie(gameObject);
console.log(gameObject.stats.fuerza);
*/
/*
    - zombie puede ser eliminado si se usa una estaca en su contra.
    - Se obtiene +5 en fuerza si zombie es eliminado.
    - Si se usa una estaca, recuerda actualizar el inventario.
    - Si no se tiene una estaca, zombie atacara, lo cual disminuira la fuerza en -10
    - Si zombie ataca y la fuerza es igual o menor a 0, restar -2 en todos los atributos restantes
    Imprimir cada accion en la consola:
    - Si zombie ataca. 
    - Si zombie fue eliminado usando una estaca.
    - Cantidad de estacas restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
/*let fuerza = "gameObject.stats.fuerza";
  if (fuerza >= 0) {
    fuerza + 5;
    console.log("Se le suma 5 puntos");
  } else {
    fuerza - 10;
    console.log("Se le resta 10 puntos");
  }
}
zombie(0);*/

/*
    - zombie puede ser eliminado si se usa una estaca en su contra.
    - Se obtiene +5 en fuerza si zombie es eliminado.
    - Si se usa una estaca, recuerda actualizar el inventario.
    - Si no se tiene una estaca, zombie atacara, lo cual disminuira la fuerza en -10
    - Si zombie ataca y la fuerza es igual o menor a 0, restar -2 en todos los atributos restantes
    Imprimir cada accion en la consola:
    - Si zombie ataca. 
    - Si zombie fue eliminado usando una estaca.
    - Cantidad de estacas restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */

//function obtenerEstaca(gameObject) {
/*
    - Este item se obtiene sobre una relacion del valor de fuerza.
    - Si el valor de fuerza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
    - La condicion es inversa si fuerza es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerGlobo retorna un game object actualizado (stats e inventario)
  */
//}

export function obtenerEstaca(gameObject) {
  /*
        - Este item se obtiene sobre una relacion del valor de fuerza.
        - Si el valor de fuerza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
        - La condicion es inversa si fuerza es mayor a 5
        - De obtener un item, actualizar el inventario en el gameObject
        - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
        
        ¿Como calcular la probabilidad?
        - Generar un número random entre 1 y 10
        - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
        - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
        
          La función obtenerGlobo retorna un game object actualizado (stats e inventario)
      */
  const rnd = Math.floor(Math.random() * 10) + 1;
  if (gameObject.stats.fuerza <= 5) {
    if (rnd > 2) {
      gameObject.items.estacas++;
      console.log("Estaca agregada");
    }
  } else if (rnd < 2) {
    gameObject.items.estacas++;
    console.log("Estaca agregada");
  } else {
    console.log("El cofre estaba vacío :(");
  }
  return gameObject;
}
