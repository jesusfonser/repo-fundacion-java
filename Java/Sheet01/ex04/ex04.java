import java.util.Scanner;

public class ex04 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String cadena = sc.nextLine();
        System.out.println(cadena);

        System.out.print("Introduce una temperatura en Celsius para convertirla a Fahrenheit: ");
        double temperatura = sc.nextDouble();
        double temp_converted = (temperatura * 9/5) + 32;
        System.out.printf("La temperatura en Fahrenheit es %.2f", temp_converted);
        sc.close();
    }
}