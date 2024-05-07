package com.example.application.views.media;

import java.util.ArrayList;

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

@PageTitle("Media")
@Route(value = "media", layout = MainLayout.class)
@Uses(Icon.class)
public class MediaView extends Composite<VerticalLayout> {

    public MediaView() {
        H1 h1 = new H1();
        H1 h2 = new H1();
        H1 h3 = new H1();
        NumberField numberField = new NumberField();
        Button buttonPrimary = new Button();
        Button buttonPrimary2 = new Button();
        getContent().setWidth("100%");
        getContent().getStyle().set("flex-grow", "1");
        h1.setText("Calculadora de media");
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
            double primerValor = numberField.getValue(); //este metodo me va guardar el valor ingresado por el usuario
            arrayList.add(primerValor);             //este metodo me va limpiar el campo de texto
            numberField.clear();                   //este metodo me limpia el campo de texto    
            String cadena = "";
            for (Double item : arrayList) {
                cadena += String.valueOf(item)+" , ";
                h3.setText(cadena);
            }                                       //este for me va imprimir los valores ingresados por los usuarios
        });
        buttonPrimary2.addClickListener(event -> {
            double suma = 0;
            for (Double item : arrayList) {
                suma += item;
            }                                       //este for lo que hace es sumar todos los valores del array
            double media = suma / arrayList.size(); //size es el numero de elementos que tiene el array
            h3.setText("La media es: "+String.valueOf(media)); //este metodo me va imprimir la media
            arrayList.clear();                                 //Este metodo me va limpiar el array

        });




        getContent().add(h1);
        getContent().add(numberField);
        getContent().add(buttonPrimary);
        getContent().add(buttonPrimary2);
        getContent().add(h2);
        getContent().add(h3);
    }
}
