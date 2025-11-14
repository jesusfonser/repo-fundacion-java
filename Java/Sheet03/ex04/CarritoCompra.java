package ex04;
import java.util.ArrayList;

public class CarritoCompra {
    private class LineaCarrito {
        private Producto producto;
        private int unidades;

        private double subtotal() {
            return this.producto.getPrice() * this.unidades;
        }

        public Producto getProducto() {
            return this.producto;
        }

        public void addUnidades(int num) {
            this.unidades += num;
        }
    }
    
    ArrayList<LineaCarrito> lineas;

    public void agregarProducto(Producto p, int unidades) {
        if (p == null || unidades <= 0 || p.getPrice() < 0) {
            System.out.println("¡Error!");
        } else {
            boolean foundInLines = false;
            
            for (LineaCarrito n : lineas) {
                if (n.getProducto().equals(p)) { 
                    n.addUnidades(unidades);
                    foundInLines = true;
                }
            }

            if (!foundInLines) {
                
            }

        }

    }
}


/*
 * 
agregarProducto(Producto p, int unidades)
No debe permitir:
que el producto sea null
que las unidades sean menores o iguales a cero
que el producto tenga precio negativo
Si el producto ya existe en el carrito, suma las unidades en lugar de
duplicar la línea.
eliminarProducto(String nombre)
Elimina del carrito la línea cuyo producto tenga ese nombre.

Programación Orientada a Objetos (POO): Fundamentos (sheet03) 2

Si el producto no existe, no debe lanzar error pero tampoco eliminar
nada.
total()
Calcula y devuelve el importe total de la compra.
mostrarResumen()
Muestra en consola todas las líneas del carrito con el formato:
Nombre - unidades x precioUnitario = subtotal €
y el total general al final.
 */
