// This is a JavaScript file
myApp.service('chartService',['$filter','idContaGlobal', function($filter, idContaGlobal) {
    
        var optionsDesp = {
          options: {  
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){
                         //if (d.key.length > 30) {
                         // return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        //} else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        //}  
                },
                y: function(d){return d.y;},
                
                showLabels: true,
                noData : "Sem dados para exibir",
                labelType: 'percent',
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                donutLabelsOutside: true,
                donutRatio:0.3,
                donut: true,
                labelThreshold: 0.02,
                
                legend: {
                    
                    vers: 'furious',
                                     
                    
                }, 
                 
                legendPosition: 'top',
                 
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { //$scope.getvalDesp(e);
                    
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            }
          }
        };
        
    var optionsDespEfet = { options: {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){
                 //if (d.key.length > 30) {
                 //         return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                 //       } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                 //       }  
                },
                y: function(d){return d.y;},
                showLabels: true,
                noData : "Sem dados para exibir",
                labelType: 'percent',
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                donutLabelsOutside: true,
                donutRatio:0.3,
                donut: true,
                labelThreshold: 0.02,
                
                legend: {
                    
                    vers: 'furious',
                    
                }, 
                 
                legendPosition: 'top',
                
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { //$scope.getvalDespEfet(e); 
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            }
        }
    
    };
             
        

    var optionsRec = { options: {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){
                   // if (d.key.length > 30) {
                    //      return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                      //  } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        //} 
                },
                y: function(d){return d.y;},
                showLabels: true,
                noData : "Sem dados para exibir",
                labelType: 'percent',
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                donutLabelsOutside: true,
                donutRatio:0.3,
                donut: true,
                labelThreshold: 0.02,
                legend: {
                    
                    vers: 'furious',
                    
                }, 
                 
                legendPosition: 'top',
                
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { //$scope.getvalRec(e); 
                        
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            }
        }
    
    };
    
    var optionsRecEfet = { options: { 
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){
                     //if (d.key.length > 30) {
                      //    return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        //} else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        //}     
                },
                y: function(d){return d.y;},
                showLabels: true,
                noData : "Sem dados para exibir",
                labelType: 'percent',
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                donutLabelsOutside: true,
                donutRatio:0.3,
                donut: true,
                labelThreshold: 0.02,
                    
                legend: {
                    
                    vers: 'furious',
                    
                }, 
                 
                legendPosition: 'top',
                
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { //$scope.getvalRecEfet(e); 
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            }
        }
    };
    
        this.getOptionsDesp = function () {
            return optionsDesp;
        }
    
        this.getOptionsRec = function () {
            return optionsRec;
        }
        
        
        this.getOptionsDespEfet = function () {
            
            return optionsDespEfet;
            //console.log(resultado);
            //return resultado;
        }
        
        this.getOptionsRecEfet = function () {
            
            return optionsRecEfet;
           
        }
    
    }]);


