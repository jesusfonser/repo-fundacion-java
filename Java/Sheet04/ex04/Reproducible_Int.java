public interface Reproducible_Int {
    void reproducir();

    void detener();

    default void pausar() {
        System.out.println("Pausando reproducción...");
    }

    static void mostrarFormato() {
        System.out.println("Formatos permitidos: ");
    }
}


