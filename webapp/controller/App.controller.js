/**
 * ==========================================================
 * SAPUI5 PRODUCT TABLE CONTROLLER
 * ==========================================================
 * Features:
 * ✅ Load product data (JSONModel)
 * ✅ Search (by product name)
 * ✅ Filter (by brand)
 * ✅ Sort (by price – toggle ASC/DESC)
 * ✅ Event Delegate (onAfterRendering)
 * ✅ Item click handling
 *
 * Author: Aman Soni
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
     * onInit() – Runs when controller is initialized
     * ==========================================================
     */
    onInit: function () {

      /**
       * ✅ Step 1: Define Product Data (Mock API Response)
       */
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

      /**
       * ✅ Step 2: Bind Data to View using JSON Model
       */
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      /**
       * ✅ Step 3: Initialize Filters & Sorter
       */
      this._aFilters = [];                  // stores combined filters
      this._aSearchFilter = [];             // search filters
      this._aBrandFilter = [];              // dropdown filters
      this._oSorter = new Sorter("price", false); // default ascending sort

      /**
       * ✅ Step 4: Event Delegate (Important)
       * Runs after UI rendering is complete
       */
      this.getView().addEventDelegate({
        onAfterRendering: function () {
          console.log("✅ View Rendered → Applying Filters & Sorting");
          this._applyFiltersAndSort();
        }.bind(this)
      });
    },



    /**
     * ==========================================================
     * CENTRAL METHOD – Apply filters + sorting together
     * ==========================================================
     */
    _applyFiltersAndSort: function () {

      var oTable = this.byId("yourTableId");
      var oBinding = oTable.getBinding("items");

      if (oBinding) {
        oBinding.filter(this._aFilters); // apply filters
        oBinding.sort(this._oSorter);    // apply sorting
      }
    },



    /**
     * ==========================================================
     * SEARCH FUNCTION (Search by product name)
     * ==========================================================
     */
    onSearch: function (oEvent) {

      var sQuery = oEvent.getParameter("newValue");

      this._aSearchFilter = [];

      if (sQuery) {
        this._aSearchFilter.push(
          new Filter("name", FilterOperator.Contains, sQuery)
        );
      }

      /**
       * Example:
       * User types: "Apple"
       * → Only products with "Apple" in name appear
       */
      this._updateFilters();
    },



    /**
     * ==========================================================
     * FILTER FUNCTION (Filter by brand dropdown)
     * ==========================================================
     */
    onFilterCategory: function (oEvent) {

      var sKey = oEvent.getSource().getSelectedKey();

      this._aBrandFilter = [];

      if (sKey !== "All") {
        this._aBrandFilter.push(
          new Filter("brand", FilterOperator.EQ, sKey)
        );
      }

      /**
       * Example:
       * Select "Apple"
       * → Only Apple products appear
       */
      this._updateFilters();
    },



    /**
     * ==========================================================
     * COMBINE SEARCH + FILTER
     * ==========================================================
     */
    _updateFilters: function () {

      this._aFilters = [];

      // Combine search filters
      if (this._aSearchFilter) {
        this._aFilters = this._aFilters.concat(this._aSearchFilter);
      }

      // Combine brand filters
      if (this._aBrandFilter) {
        this._aFilters = this._aFilters.concat(this._aBrandFilter);
      }

      /**
       * Example:
       * Search: "iPhone"
       * Filter: "Apple"
       * → Both applied together ✅
       */
      this._applyFiltersAndSort();
    },



    /**
     * ==========================================================
     * SORT FUNCTION (Toggle Asc/Desc)
     * ==========================================================
     */
    onSortByPrice: function () {

      this._bDesc = !this._bDesc;  // toggle sort direction

      this._oSorter = new Sorter("price", this._bDesc);

      this._applyFiltersAndSort();

      MessageToast.show(
        "Sorted: " + (this._bDesc ? "High → Low" : "Low → High")
      );

      /**
       * Example:
       * First click → Low to High
       * Second click → High to Low
       */
    },



    /**
     * ==========================================================
     * ITEM PRESS (Row Click)
     * ==========================================================
     */
    onItemPress: function (oEvent) {

      var oProduct = oEvent.getSource()
        .getBindingContext()
        .getObject();

      MessageToast.show(
        "You selected: " + oProduct.name +
        " | Price: ₹" + oProduct.price
      );

      /**
       * Example:
       * Click → iPhone 14
       * Output → You selected: Apple iPhone 14 | Price: ₹69999
       */
    }

  });
});
