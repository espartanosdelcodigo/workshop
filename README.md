# workshop
Existe una heroína que tiene que atravesar una cierta cantidad de niveles. Cada nivel tiene 2 posibles encuentros: hallar un tesoro o realizar una batalla con algunos de los 5 jefes.
La heroína tiene un conjunto de 4 atributos que definen la cantidad de vida total, y cada jefe ataca en particular a un atributo, excepto por Megastófeles, que ataca a todos los atributos.  En el tesoro, la heroína podrá encontrar ítems para defenderse de los jefes, pero si tiene muy mala suerte, puede encontrar nada.

## Condición ganadora

Si bien la heroína puede derrotar a todos los jefes, estos podrán volver a aparecer aleatoriamente en niveles siguientes. 
La condición ganadora es que la heroína pase el nivel 10 con más de 0 puntos en el total de su vida (la sumatoria de todos sus atributos). 

## Condición perdedora

Se considera game over si la vida total de la heroína es menor o igual a cero después de cualquier nivel.
Es importante que cada función de ataque verifique la condición perdedora (después de que el jefe ataque) y de cumplirse, anunciar la muerte de nuestra heroína. :(

## Ítems

En cada nivel puede haber o un combate con un jefe, o se puede encontrar un cofre del tesoro.
Si se encuentra un cofre, se escogerá al azar 2 posibilidades: que la heroína encuentre un ítem para derrotar a un jefe, o nada.
La especificación de los ítems está descrita en cada gist.

## Personajes
### La heroína

Tiene 4 atributos, cuyos valores empiezan en:
Carisma = 25
Fuerza = 25
Inteligencia = 25
Belleza = 25

### Burlón oscuro

Es especialista en disminuir el autoestima de sus oponentes.
Si ataca a nuestra heroína, le quita 10 puntos a su carisma.
El burlón alimenta sus poderes de la oscuridad del espacio, pero algo tan sencillo como una linterna puede derrotarlo.
De extinguir al burlón oscuro, la heroína ganará +5 en carisma.

### Zombie eléctrico

Es alérgico al gluten y no consume sangre humana. Fue atacado por un rayo y desde ese momento derrota a sus enemigos con electricidad.
Si ataca a la heroína, reduce su fuerza por 10 puntos.
Es derrotado con una estaca de plástico, y si se le extingue exitosamente, la heroína gana +5 en fuerza.

### Unitornio de fuego

Una fascinación con el fuego generó un incendio en su casa, matando a sus creadores: un unicornio y un minotauro. Desde ese momento va por la vida queriendo incendiar todo lo que se le atraviese en su camino.
Si ataca a la heroína, rostiza su inteligencia quitándole 10 puntos a este atributo.
Es derrotado con una bomba de agua, pero si se lo extingue exitosamente, la heroína gana +5 en inteligencia.

###  Lazy violenta

Es hermosa, pero letal. 
Lazy violenta debe ser la única persona hermosa en el lugar. Al sentirse intimidada por la belleza ajena, no lo piensa dos veces para amarrar y ahorcar con su lazo.
Si ataca a la heroína, le quita a su belleza 10 puntos.
Con un par de tijeras puedes cortar su lazo y derrotar a Lazy, y así la heroína ganará +5 en belleza.

### Megastófeles

Es el jefe más dañino. Es un demonio con un gran complejo de narcisismo.
No puede ser derrotado, pero puedes esquivarlo usando un espejo. Megastófeles quedara hipnotizado bajo la magia de su reflejo, dándote una oportunidad para escapar.
Si ataca a la heroína, le quita 10 puntos de todos sus atributos.
Si se esquiva exitosamente, la heroína no ganará nada extra, solo la oportunidad de avanzar al siguiente nivel.
