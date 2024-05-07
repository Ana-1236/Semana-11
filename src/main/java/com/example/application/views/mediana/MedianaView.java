package com.example.application.views.mediana;

import java.util.ArrayList;
import java.util.Collections;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.Uses;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Mediana")
@Route(value = "mediana", layout = MainLayout.class)
@Uses(Icon.class)
public class MedianaView extends Composite<VerticalLayout> {

    public MedianaView() {
        H1 h1 = new H1();
        H1 h2 = new H1();
        H1 h3 = new H1();
        NumberField numberField = new NumberField();
        Button buttonPrimary = new Button();
        Button buttonPrimary2 = new Button();
        getContent().setWidth("100%");
        getContent().getStyle().set("flex-grow", "1");
        h1.setText("Calculadora de Mediana");
        h2.setText("Los valores ingresados son: ");
        getContent().setAlignSelf(FlexComponent.Alignment.CENTER, h1);
        h1.setWidth("max-content");
        numberField.setLabel("Valor");
        getContent().setAlignSelf(FlexComponent.Alignment.CENTER, numberField);
        numberField.setWidth("min-content");
        buttonPrimary.setText("Anadir Valor");
        getContent().setAlignSelf(FlexComponent.Alignment.CENTER, buttonPrimary);
        buttonPrimary.setWidth("min-content");
        buttonPrimary.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        buttonPrimary2.setText("Calcular");
        getContent().setAlignSelf(FlexComponent.Alignment.CENTER, buttonPrimary2);
        buttonPrimary2.setWidth("min-content");
        buttonPrimary2.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        ArrayList<Double> arrayList = new ArrayList<>();
        buttonPrimary.addClickListener(event -> {
            // Obtiene el valor ingresado por el usuario y lo agrega al ArrayList
            double primerValor = numberField.getValue();
            arrayList.add(primerValor);
            
            // Limpia el campo de texto
            numberField.clear();
        
            // Ordena el ArrayList en orden ascendente
            Collections.sort(arrayList);
        
            // Concatena los valores ordenados y actualiza el texto del h3
            StringBuilder cadena = new StringBuilder();
            for (Double item : arrayList) {
                cadena.append(String.valueOf(item)).append(" , ");
            }
            h3.setText(cadena.toString());
        });

        buttonPrimary2.addClickListener(event -> {
            int paroInpar = arrayList.size();
        
            if (paroInpar % 2 == 0) {
                // Si el tamaño es par
                int posicion = paroInpar / 2;
                double mediana = (arrayList.get(posicion) + arrayList.get(posicion - 1)) / 2;
                
                h3.setText("La mediana es " + String.valueOf(mediana));
            } else {
                // Si el tamaño es impar
                int posicion = paroInpar / 2;
                double mediana = arrayList.get(posicion);
                h3.setText("La mediana es " + String.valueOf(mediana));
            }
        
            // Limpia el ArrayList después de calcular la mediana
            arrayList.clear();
        });
        getContent().add(h1);
        getContent().add(numberField);
        getContent().add(buttonPrimary);
        getContent().add(buttonPrimary2);
        getContent().add(h2);
        getContent().add(h3);
    }
}
