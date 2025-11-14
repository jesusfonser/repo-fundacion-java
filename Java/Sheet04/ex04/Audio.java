public class Audio implements Reproducible_Int {
    private String formato;
    private String nombre;

    public Audio(String formato, String nombre) {
        this.formato = formato;
        this.nombre = nombre;
    }

    public void detener() {
        System.out.println("Deteniendo " + this.nombre);
    }
    
    public void reproducir() {
        System.out.println("Reproduciendo " + this.nombre);
    }
}

