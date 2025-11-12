public class ex02{
    public static void main(String[] args) {
        Producto prod1 = new Producto("Leche", 12.95, 67);
        Producto prod2 = new Producto("Cola Loca", 1.69, 68);

        Producto prod3_new = new Producto("Alpargatas", 12);
        Producto prod4_new = new Producto("Zapas de deporte", 48);

        prod1.mostrarDatos();
        prod2.mostrarDatos();
        prod3_new.mostrarDatos();
        prod4_new.mostrarDatos();
    }
}