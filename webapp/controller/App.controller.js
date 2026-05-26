/**
 * ==========================================================
 * SIMPLE SAPUI5 CONTROLLER (BEGINNER FRIENDLY)
 * ==========================================================
 * What this app does:
 * 👉 Shows products in table
 * 👉 Search products
 * 👉 Filter by brand
 * 👉 Sort by price
 * 👉 Click to see details
 * ==========================================================
 */

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/model/Sorter"
], function (Controller, JSONModel, MessageToast, Filter, FilterOperator, Sorter) {

  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    /**
     * ==========================================================
     * 1. APP STARTS HERE
     * ==========================================================
     */
    onInit: function () {

      // ✅ Step 1: Create product data (like backend response)
      var oData = {
        products: [
          { productId: 101, name: "Apple iPhone 14", price: 69999, brand: "Apple", rating: 4.7, stock: 25 },
          { productId: 102, name: "Samsung Galaxy S23", price: 74999, brand: "Samsung", rating: 4.6, stock: 30 },
          { productId: 103, name: "Sony Headphones", price: 29999, brand: "Sony", rating: 4.8, stock: 50 },
          { productId: 104, name: "Dell Laptop", price: 59999, brand: "Dell", rating: 4.4, stock: 15 },
          { productId: 105, name: "Nike Shoes", price: 8999, brand: "Nike", rating: 4.5, stock: 40 },
          { productId: 106, name: "Fossil Watch", price: 24995, brand: "Fossil", rating: 4.3, stock: 20 }
        ]
      };

      // ✅ Step 2: Put data inside JSONModel (data box)
      var oModel = new JSONModel(oData);

      // ✅ Step 3: Give data to UI (table will use it)
      this.getView().setModel(oModel);

      // ✅ Step 4: Store filters and sorting
      this._aFilters = [];      // stores filters
      this._oSorter = new Sorter("price", false); // sort by price (low → high)

      /**
       * ✅ Step 5: Wait until screen is ready
       * then apply filter + sort
       */
      this.getView().addEventDelegate({
        onAfterRendering: function () {
          this._applyFiltersAndSort();
        }.bind(this)
      });
    },



    /**
     * ==========================================================
     * 2. MAIN FUNCTION (APPLIES FILTER + SORT)
     * ==========================================================
     */
    _applyFiltersAndSort: function () {

      // 📌 Get table
      var oTable = this.byId("yourTableId");

      // 📌 Get table data connection
      var oBinding = oTable.getBinding("items");

      if (oBinding) {

        // ✅ Apply filter (like search or dropdown)
        oBinding.filter(this._aFilters);

        // ✅ Apply sorting
        oBinding.sort(this._oSorter);
      }
    },



    /**
     * ==========================================================
     * 3. SEARCH FUNCTION (WHEN USER TYPES)
     * ==========================================================
     */
    onSearch: function (oEvent) {

      // 🧠 Get what user typed
      var sQuery = oEvent.getParameter("newValue");

      this._aFilters = [];

      // ✅ If user typed something
      if (sQuery) {

        // ✅ Create filter
        var oFilter = new Filter("name", FilterOperator.Contains, sQuery);

        this._aFilters.push(oFilter);
      }

      /**
       * SIMPLE EXAMPLE:
       * User types "Apple"
       * → Only Apple products shown
       */

      this._applyFiltersAndSort();
    },



    /**
     * ==========================================================
     * 4. FILTER FUNCTION (DROPDOWN)
     * ==========================================================
     */
    onFilterCategory: function (oEvent) {

      // 🧠 Get selected brand
      var sKey = oEvent.getSource().getSelectedKey();

      this._aFilters = [];

      if (sKey !== "All") {

        // ✅ Filter by brand
        var oFilter = new Filter("brand", FilterOperator.EQ, sKey);

        this._aFilters.push(oFilter);
      }

      /**
       * EXAMPLE:
       * Select "Apple"
       * → Only Apple products visible
       */

      this._applyFiltersAndSort();
    },



    /**
     * ==========================================================
     * 5. SORT FUNCTION
     * ==========================================================
     */
    onSortByPrice: function () {

      // ✅ Toggle sorting direction
      this._bDesc = !this._bDesc;

      // ✅ Apply sorter
      this._oSorter = new Sorter("price", this._bDesc);

      this._applyFiltersAndSort();

      /**
       * EXAMPLE:
       * Click 1 → low to high
       * Click 2 → high to low
       */

      MessageToast.show("Sorting applied!");
    },



    /**
     * ==========================================================
     * 6. CLICK ON ROW
     * ==========================================================
     */
    onItemPress: function (oEvent) {

      // ✅ Get clicked product data
      var oProduct = oEvent.getSource().getBindingContext().getObject();

      // ✅ Show message
      MessageToast.show(
        "You clicked: " + oProduct.name + 
        " | Price: ₹" + oProduct.price
      );

      /**
       * EXAMPLE:
       * Click → Apple iPhone
       * Output → You clicked Apple iPhone
       */
    }

  });
});
