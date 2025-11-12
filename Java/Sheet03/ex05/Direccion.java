package ex05;

public class Direccion {
    private String calle;
    private int numero;

    public Direccion(String calle, int numero) {
        this.calle = calle;
        this.numero = numero;
    }

    public String toString() {
        return this.calle + ", número " + this.numero; 
    }
}

/*
 Direccion : con atributos calle y numero y un constructor completo (todos
las parámetros).
 */
