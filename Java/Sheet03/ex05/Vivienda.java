package ex05;

public class Vivienda {
    private String propietario;
    private Direccion direccion;

    public Vivienda(String propietario, Direccion direccion) {
        this.propietario = propietario;
        this.direccion = direccion;
    }

    public void mostrarInfo() {
        System.out.println("El propietario de la vivienda es " + this.propietario + " y la dirección es " + this.direccion);
    }
}

/*
3. Implementa en vivienda un método mostrarInfo() que muestre el nombre del
propietario y la dirección completa.
 */
