sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.bookshop.bookshopproject.controller.HomePage", {
        onInit: async function() {
            try {
                const odataUrl = "/odata/v4/admin/Books";
                const response = await fetch(odataUrl, {
                  method: "GET",
                  headers: {
                    "Accept": "application/json", // Ensures JSON response
                  },
                });
            
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
            
                const data = await response.json();
                console.log("OData response:", data);
var aBooks= data.value;
                const oModel = new JSONModel();
                oModel.setData({ Books: aBooks });
          
                // Set the model to the view
                this.getView().setModel(oModel);


              } catch (error) {
                console.error("Error fetching OData:", error);
              }

           
        },
        onClick:async function(){
            

        }
    });
});