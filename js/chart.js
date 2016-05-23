//Variaveis de Filtro
myApp.value('chart', {
    optionsDesp: 
    
    {
            chart: {
                type: 'pieChart',
                height: 350,
                x: function(d){
                         if (d.key.length > 30) {
                          return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        }  
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
                    dispatch: {
                      legendMouseover: function(o) {
                        if (tooltip.hidden()) {
                          var data = {
                            series: {
                              key: o.key,
                              value: o.value + " words",
                              color: o.color
                            }
                          };
                          tooltip.data(data)
                            .hidden(false);
                        }
                        tooltip.position({
                          top: d3.event.pageY,
                          left: d3.event.pageX
                        })();
                      },
                      legendMouseout: function(o) {
                        tooltip.hidden(true);
                      }
                    },
                 
                    
                }, 
                 
                legendPosition: 'right',
                valueFormat: function(d) {
                    return d;
                } ,
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { $scope.getvalDesp(e); 
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            },
             
        },
        
    optionsDespEfet: 
    
    
    {
            chart: {
                type: 'pieChart',
                height: 350,
                x: function(d){
                 if (d.key.length > 30) {
                          return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        }  
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
                    dispatch: {
                      legendMouseover: function(o) {
                        if (tooltip.hidden()) {
                          var data = {
                            series: {
                              key: o.key,
                              value: o.value + " words",
                              color: o.color
                            }
                          };
                          tooltip.data(data)
                            .hidden(false);
                        }
                        tooltip.position({
                          top: d3.event.pageY,
                          left: d3.event.pageX
                        })();
                      },
                      legendMouseout: function(o) {
                        tooltip.hidden(true);
                      }
                    },
                 
                    
                }, 
                 
                legendPosition: 'right',
                valueFormat: function(d) {
                    return d.key + ' - ' + d.y;
                } ,
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { $scope.getvalDespEfet(e); 
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            },
             
        },

    optionsRec: 
    
    {
            chart: {
                type: 'pieChart',
                height: 350,
                x: function(d){
                    if (d.key.length > 30) {
                          return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        } 
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
                    dispatch: {
                      legendMouseover: function(o) {
                        if (tooltip.hidden()) {
                          var data = {
                            series: {
                              key: o.key,
                              value: o.value + " words",
                              color: o.color
                            }
                          };
                          tooltip.data(data)
                            .hidden(false);
                        }
                        tooltip.position({
                          top: d3.event.pageY,
                          left: d3.event.pageX
                        })();
                      },
                      legendMouseout: function(o) {
                        tooltip.hidden(true);
                      }
                    },
                 
                    
                }, 
                 
                legendPosition: 'right',
                    valueFormat: function(d) {
                        return d.key + ' - ' + d.y;
                } ,
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { $scope.getvalRec(e); 
                        
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            },
             
        },
    
    optionsRecEfet: 
    
    {
            chart: {
                type: 'pieChart',
                height: 350,
                x: function(d){
                     if (d.key.length > 30) {
                          return d.key.substr(0, 30) + " ..." + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        } else {
                          return d.key + ' - ' + idContaGlobal.moeda + ' ' + d.y;
                        }     
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
                    dispatch: {
                      legendMouseover: function(o) {
                        if (tooltip.hidden()) {
                          var data = {
                            series: {
                              key: o.key,
                              value: o.value + " words",
                              color: o.color
                            }
                          };
                          tooltip.data(data)
                            .hidden(false);
                        }
                        tooltip.position({
                          top: d3.event.pageY,
                          left: d3.event.pageX
                        })();
                      },
                      legendMouseout: function(o) {
                        tooltip.hidden(true);
                      }
                    },
                 
                    
                }, 
                 
                legendPosition: 'right',
                valueFormat: function(d) {
                    return d.key + ' - ' + d.y;
                } ,
              
                  dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) { $scope.getvalRecEfet(e); 
                        //tooltip.hidden(false);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            },
             
        }

});

