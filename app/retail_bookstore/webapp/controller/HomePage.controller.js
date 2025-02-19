sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel"
  ], function(Controller, ODataModel) {
    "use strict";
  
    return Controller.extend("com.bookstore.retailbookstore.controller.HomePage", {
  
      onInit: function() {
        // Initialize the OData v4 model and set it to the view
       
      },
  
      onAddBook: function() {
        // Get the input values from the form
        var oNewBook = {
            title: this.byId("bookTitleInput").getValue(),   // Get value from input fields
            author: this.byId("bookAuthorInput").getValue(),
            year: this.byId("bookYearInput").getValue()
        };
  
        // Send a POST request to your CAP service (bypassing ODataModel)
        fetch("/odata/v4/admin/Bookstore", {
          method: "POST",  // POST request to create a new entry
          headers: {
            "Content-Type": "application/json"  // Set correct content type
          },
          body: JSON.stringify(oNewBook)  // Convert the book data to JSON
        })
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
          MessageToast.show("Book added successfully!");  // Show success message
          console.log(data);  // Optionally log the response
        })
        .catch(error => {
          MessageToast.show("Error adding book: " + error.message);  // Show error message
          console.error(error);
        });
      }
  
    });
  });
  