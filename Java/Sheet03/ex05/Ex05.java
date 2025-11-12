package ex05;

public class Ex05 {
    public static void main(String[] args){
        Direccion address = new Direccion("Calle Obispo", 1);
        Vivienda home = new Vivienda("Jesús Fonseca Serrano", address);

        home.mostrarInfo();
}

//La clase Vivienda utiliza una instancia de la clase Direccion para su construcción.
//Se podría decir que, al ser composición, una clase tiene a la otra. Vivienda tiene a Direccion.

}