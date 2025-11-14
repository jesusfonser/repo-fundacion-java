public class Video implements Reproducible_Int {
    private String formato;
    private String nombre;

    public Video(String formato, String nombre) {
        this.formato = formato;
        this.nombre = nombre;
    }

    public void detener() {
        System.out.println("Deteniendo el vídeo" + this.nombre);
    }
    
    public void reproducir() {
        System.out.println("Reproduciendo el vídeo" + this.nombre);
    }
}
