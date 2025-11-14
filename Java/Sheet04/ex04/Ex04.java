import java.util.ArrayList;

public class Ex04 {
    public static void main(String[] args) {
        Audio audio1 = new Audio("MP3", "Chacarrón");
        Audio audio2 = new Audio("MP4", "Corazón de seda");

        Video video1 = new Video("MP4", "Bee Movie");
        Video video2 = new Video("AVI", "Shrek 2");

        ArrayList<Reproducible_Int> lista = new ArrayList<>();
        lista.add(audio1);
        lista.add(audio2);
        lista.add(video1);
        lista.add(video2);

        for (Reproducible_Int archivo : lista) {
            archivo.reproducir();
            archivo.detener();
        }
    }
}