public class ex02{
    public static void main(String args[]){
        System.out.println(sumarSiPositivo(1, 3));
        System.out.println(sumarSiPositivo(-2, 3));
    }

    public static int sumarSiPositivo(int a, int b){
        if(a >= 0 && b >= 0){
            return a + b;
        } else{
            return 0;
        }
    }
}