/*
Contrato para el gameObject:
let gameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20
  },
  items : {
    linternas: 0,
    estacas: 0,
    tijeras: 0,
    globos: 0,
    espejo: false
  },
}
*/

// afecta belleza
export function lazy(gameObject) {
  /*
      - lazy puede ser eliminada si se usa una tijera en su contra.
      - Se obtiene +5 en belleza si lazy es eliminado.
      - Si se usa una tijera, recuerda actualizar el inventario.
      - Si no se tiene una tijera, lazy atacara, lo cual disminuira la belleza en -10
      - Si lazy ataca y la belleza es igual o menor a 0, restar -2 en todos los atributos restantes
      Imprimir cada accion en la consola:
      - Si lazy ataca. 
      - Si lazy fue eliminada usando una tijera.
      - Cantidad de tijeras restantes
      
       La función retorna un game object actualizado (stats e inventario)
    */

  if (gameObject.items.tijeras > 0) {
    gameObject.items.tijeras--;
    gameObject.stats.belleza += 5;
    console.log("Lazy fue eliminada con una tijera");
    console.log("Tijeras restantes: " + gameObject.items.tijeras);
    return gameObject;
  }
  console.log("Lazy ataca! :o");
  gameObject.stats.belleza -= 10;
  if (gameObject.items.belleza <= 0) {
    gameObject.stats.carisma -= 2;
    gameObject.stats.fuerza -= 2;
    gameObject.stats.inteligencia -= 2;
  }
  return gameObject;
}

export function obtenerTijera(gameObject) {
  /*
      - Este item se obtiene sobre una relacion del valor de belleza.
      - Si el valor de belleza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 tijera, 20% de no obtener nada.
      - La condicion es inversa si belleza es mayor a 5
      - De obtener un item, actualizar el inventario en el gameObject
      - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
      
      ¿Como calcular la probabilidad?
      - Generar un número random entre 1 y 10
      - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
      - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
      
        La función obtenerTijera retorna un game object actualizado (stats e inventario)
    */
  const rnd = Math.floor(Math.random() * 10) + 1;
  if (gameObject.stats.belleza <= 5) {
    if (rnd > 2) {
      gameObject.items.tijeras++;
      console.log("Tijeras agregadas");
    }
  } else if (rnd < 2) {
    gameObject.items.tijeras++;
    console.log("Tijeras agregadas");
  } else {
    console.log("El cofre estaba vacío :(");
  }
  return gameObject;
}
