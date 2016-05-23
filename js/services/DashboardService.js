// This is a JavaScript file
myApp.service('DashboardService',['$filter', function($filter) {
    
        var resultado = [];
    
        this.filtroAnoMesConfirmado = function (obj, filtro) {
            return $filter('filter')(obj, {anoMesPagamento: filtro});
        }
    
        this.filtroAnoMes = function (obj, filtro) {
            return $filter('filter')(obj, {anoMesVencimento: filtro});
        }
        
        
        this.filtroPorTipoCategoria = function (obj, filtro) {
            
            return $filter('filter')(obj, {tipoCategoria: filtro});
            //console.log(resultado);
            //return resultado;
        }
        //Pago ou Em aberto 
        this.filtroPorTipoStatus = function (obj, filtro) {
            
            return $filter('filter')(obj, {tipoStatus: filtro});
            //console.log(resultado);
            //return resultado;
        }

    
        this.arraySum = function(items, prop){
            
            return items.reduce( function(a, b) {
                return parseFloat(a) + parseFloat(b[prop]);
            }, 0);
        }
    
    }]);
