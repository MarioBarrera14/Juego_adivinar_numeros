//                       --------- Adivina el numero! ---------

// Esto es un extra que no se va a calificar, solo por si quieren tener un pequenio desafio

/*
                          --------- A tener en cuenta ---------
1) el usuario debe ingresar numeros y debemos ver si este con el numero al azar, 'theNumber'
2) si el numero ingresado por el usuario es mayor que theNumber, debemos decirle al usuario
"ese numero es muy alto"
3) si el numero ingresado por el usuario es menor que theNumber, debemos decirle al usuario
"ese numero es muy bajo"
4) Si el usuario ingresa -1, entonces el usuario se rinde y el juego termina
5) Les dejo un pequenio codigo inicial, solo tienen que pensar como armar el ciclo

*/

// Puntos extras: Usar la variable 'counter' para ver en cuantos intentos el jugador adivina.
// Al terminar, imprimir un mensaje en consola que diga 'Tardaste X intentos' 

// Vamos!



// Esto genera el numero al azar
let theNumber = Math.floor(Math.random() * 21);

// Instrucciones para el jugador
console.log("Juguemos a 'Adivinar el numero'!");
console.log("Estoy pensando en un numero entre 0 y 20");
console.log("Ingresa el numero que quieras adivinar, o ingresa -1 para salir");
console.log("Buena suerte!");

//Variable Counter, opcional!
let counter = 0;

//Condicional para el ciclo while. Pueden usar otro ciclo si quieren
let exit = false;



// ---------- Modificar de aca para abajo ----------
//ingresa directo y con el -1 finalizo
while (!exit) {
   let input=prompt(`Ingrese un numero de 0 a 20 (Intentos ${counter})`)
    if(input > theNumber){
        alert("ese numero es muy alto")
        counter +=1;
    }else if(input==theNumber){
        alert(`Adivinaste cantidad de intentos de: ${counter}`);
        exit=true;
    }else{
        if(input==-1){
            alert("Finalizaste el programa Gallina loca miedosa")
            exit=true;

        }else if(input<theNumber){
            alert("ese numero es muy bajo")
            counter +=1;
        }
    }
}


// ---------- Modificar de aca para arriba ----------

