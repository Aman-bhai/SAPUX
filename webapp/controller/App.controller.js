sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    onInit: function () {
      var oData = {
        products: [
          {
            productId: 101,
            name: "Apple iPhone 14",
            category: "Smartphones",
            price: 69999,
            rating: 4.7,
            stock: 25,
            brand: "Apple",
            image: "https://example.com/images/iphone14.jpg"
          },
          {
            productId: 102,
            name: "Samsung Galaxy S23",
            category: "Smartphones",
            price: 74999,
            rating: 4.6,
            stock: 30,
            brand: "Samsung",
            image: "https://example.com/images/galaxy-s23.jpg"
          },
          {
            productId: 103,
            name: "Sony WH-1000XM5 Headphones",
            category: "Audio",
            price: 29999,
            rating: 4.8,
            stock: 50,
            brand: "Sony",
            image: "https://example.com/images/sony-headphones.jpg"
          },
          {
            productId: 104,
            name: "Dell Inspiron 15 Laptop",
            category: "Laptops",
            price: 59999,
            rating: 4.4,
            stock: 15,
            brand: "Dell",
            image: "https://example.com/images/dell-laptop.jpg"
          },
          {
            productId: 105,
            name: "Nike Air Max Running Shoes",
            category: "Footwear",
            price: 8999,
            rating: 4.5,
            stock: 40,
            brand: "Nike",
            image: "https://example.com/images/nike-airmax.jpg"
          },
          {
            productId: 106,
            name: "Fossil Gen 6 Smartwatch",
            category: "Wearables",
            price: 24995,
            rating: 4.3,
            stock: 20,
            brand: "Fossil",
            image: "https://example.com/images/fossil-watch.jpg"
          }
        ]
      };

      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },

    onItemPress: function (oEvent) {

      console.log("✅ Event triggered");

      var oItem = oEvent.getSource();
      console.log("Clicked Item:", oItem);

      var oContext = oItem.getBindingContext();

      if (!oContext) {
        console.error("❌ No binding context found!");
        return;
      }

      console.log("Binding Context:", oContext);

      var oProduct = oContext.getObject();
      console.log("Product Data:", oProduct);

      if (!oProduct) {
        console.error("❌ No product data found!");
        return;
      }

      console.log("Name:", oProduct.name);
      console.log("Price:", oProduct.price);

      MessageToast.show(
        "You selected: " + oProduct.name + " | Price: " + oProduct.price
      );
    }


  });
});