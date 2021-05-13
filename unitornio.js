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

// afecta inteligencia
export function unitornio(gameObject) {
  /*
      - unitornio puede ser eliminado si se usa un globo en su contra.
      - Se obtiene +5 en inteligencia si unitornio es eliminado.
      - Si se usa un globo, recuerda actualizar el inventario.
      - Si no se tiene un globo, unitornio atacara, lo cual disminuira la inteligencia en -10
      - Si unitornio ataca y la inteligencia es igual o menor a 0, restar -2 en todos los atributos restantes
      Imprimir cada accion en la consola:
      - Si unitornio ataca. 
      - Si unitornio fue eliminado usando un globo.
      - Cantidad de globos restantes
      
       La función retorna un game object actualizado (stats e inventario)
    */

  if (gameObject.items.globos > 0) {
    gameObject.items.globos--;
    gameObject.stats.inteligencia += 5;
    console.log("Unitornio fue eliminado con una linterna");
    console.log("Globos restantes: " + gameObject.items.globos);
    return gameObject;
  }
  console.log("Unitornio ataca! :o -.- :o ");
  gameObject.stats.inteligencia -= 10;
  if (gameObject.items.inteligencia <= 0) {
    gameObject.stats.belleza -= 2;
    gameObject.stats.fuerza -= 2;
    gameObject.stats.carisma -= 2;
  }
  return gameObject;
}

export function obtenerGlobo(gameObject) {
  /*
      - Este item se obtiene sobre una relacion del valor de inteligencia.
      - Si el valor de inteligencia de la heroina es menor o igual 5: 80% probabilidad de sumar 1 globo, 20% de no obtener nada.
      - La condicion es inversa si inteligencia es mayor a 5
      - De obtener un item, actualizar el inventario en el gameObject
      - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
      
      ¿Como calcular la probabilidad?
      - Generar un número random entre 1 y 10
      - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
      - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
      
        La función obtenerGlobo retorna un game object actualizado (stats e inventario)
    */

  const rnd = Math.floor(Math.random() * 10) + 1;
  if (gameObject.stats.inteligencia <= 5) {
    if (rnd > 2) {
      gameObject.items.globos++;
      console.log("Globo agregado");
    }
  } else if (rnd < 2) {
    gameObject.items.globos++;
    console.log("Globo agregado");
  } else {
    console.log("El cofre estaba vacío :(");
  }
  return gameObject;
}
