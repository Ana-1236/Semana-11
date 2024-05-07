package com.example.application.views.desviacionestandar;

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

@PageTitle("Desviacion Estandar")
@Route(value = "Desviacion-Estandar", layout = MainLayout.class)
@Uses(Icon.class)
public class DesviacionEstandarView extends Composite<VerticalLayout> {

    public DesviacionEstandarView() {
        H1 h1 = new H1();
        NumberField numberField = new NumberField();
        Button buttonPrimary = new Button();
        Button buttonPrimary2 = new Button();
        getContent().setWidth("100%");
        getContent().getStyle().set("flex-grow", "1");
        h1.setText("Calculadora de Desviacion Estandar");
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
        getContent().add(h1);
        getContent().add(numberField);
        getContent().add(buttonPrimary);
        getContent().add(buttonPrimary2);
    }
}
