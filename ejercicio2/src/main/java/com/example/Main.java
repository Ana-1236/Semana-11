package com.example;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ingresar la cantidad de datos
        System.out.print("Ingrese la cantidad de datos: ");
        int n = scanner.nextInt();

        // Ingresar los valores del conjunto de datos
        double[] datos = new double[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Ingrese el valor " + (i + 1) + ": ");
            datos[i] = scanner.nextDouble();
        }

        // Calcular la media
        double media = calcularMedia(datos);

        // Calcular la mediana
        double mediana = calcularMediana(datos);

        // Calcular la desviación estándar
        double desviacionEstandar = calcularDesviacionEstandar(datos, media);

        // Mostrar los resultados
        System.out.println("\n**Resultados:**");
        System.out.println("Media: " + media);
        System.out.println("Mediana: " + mediana);
        System.out.println("Desviación estándar: " + desviacionEstandar);
    }

    private static double calcularMedia(double[] datos) {
        double suma = 0;
        for (double valor : datos) {
            suma += valor;
        }
        return suma / datos.length;
    }

    private static double calcularMediana(double[] datos) {
        Arrays.sort(datos);
        int indiceMediana = datos.length / 2;
        if (datos.length % 2 == 0) {
            return (datos[indiceMediana - 1] + datos[indiceMediana]) / 2;
        } else {
            return datos[indiceMediana];
        }
    }

    private static double calcularDesviacionEstandar(double[] datos, double media) {
        double sumaCuadradosDiferencias = 0;
        for (double valor : datos) {
            double diferencia = valor - media;
            sumaCuadradosDiferencias += diferencia * diferencia;
        }
        return Math.sqrt(sumaCuadradosDiferencias / datos.length);
    }
}
