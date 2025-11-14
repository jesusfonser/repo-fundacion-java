package ex04;

public class Producto {
    private String nombre;
    private double price;

    public Producto(String nombre, double price) {
        this.nombre = nombre;
        this.price = price;
    }

    public double getPrice() {
        return this.price;
    }
}
