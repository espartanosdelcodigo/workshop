function megastofeles(gameObject) {
    console.log("Te encontraste con Megastofeles!")
    if (!gameObject.items.espejo) {
        console.log("*Megastofeles ataca!*")
        console.log("*pierdes 10 puntos en todos tus atributos*")
        gameObject.stats.carisma = (gameObject.stats.carisma - 10)
        gameObject.stats.fuerza = (gameObject.stats.fuerza - 10)
        gameObject.stats.belleza = (gameObject.stats.belleza - 10)
        gameObject.stats.inteligencia = (gameObject.stats.inteligencia - 10)
    } else if (gameObject.items.espejo) {
        console.log("*Megastofeles ataca!*")
        console.log("Que extraño. No ha ocurrido nada...")
        console.log("*escuchas como un espejo se rompe*")
        console.log("*pierdes el espejo de tu inventario*")
        gameObject.items.espejo = false
    }
    return gameObject;
}

function obtenerEspejo(gameObject) {
    console.log("*Revisas un cofre que encuentras al fondo de tu batalla y...*")
    const vidatotal = (gameObject.stats.carisma + gameObject.stats.fuerza + gameObject.stats.belleza + gameObject.stats.inteligencia)
    const aleatorio = Math.floor(Math.random() * 10) + 1;
    if (vidatotal <= 10) {
        if (aleatorio > 2) {
            console.log("*has obtenido un espejo*")
            gameObject.items.espejo = true
        } else if (aleatorio === 1 || aleatorio === 2) {
            console.log("*el cofre está vacio*")
        }

    } else if (vidatotal > 10) {
        if (aleatorio === 1 || aleatorio === 2) {
            console.log("*has obtenido un espejo*")
            gameObject.items.espejo = true
        } else if (aleatorio > 2) {
            console.log("*el cofre está vacio*")
        }
    }
    return gameObject;
}

