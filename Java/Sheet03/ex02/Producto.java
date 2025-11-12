public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    public void mostrarDatos() {
        System.out.println("El nombre del producto es: " + this.nombre);
        System.out.println("El precio del producto es: " + this.precio);
        System.out.println("El stock del producto es: " + this.stock);
    }

    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = 67;
    }
}
