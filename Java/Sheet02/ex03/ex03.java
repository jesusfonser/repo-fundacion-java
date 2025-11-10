public class ex03{
public static void main(String[] args){
    int[] numericos = {1, 2, 3, 4, 5};
    System.out.println(calcularPromedio(numericos));
}

public static double calcularPromedio(int[] arrei){
    double finalnum = 0;

    for (int num : arrei){
        finalnum += num;
    }

    finalnum /= 2;

    return finalnum;
}

}