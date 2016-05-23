// This is a JavaScript file
'use strict';

var myApp = angular.module('myApp', ['onsen', 'googlechart', 'nvd3', 'cgBusy', 'fiestah.money', 'ngMessages', 'auth0', 'angular-storage', 'angular-jwt', 'ngRoute', 'ui.bootstrap', '720kb.socialshare', 'angular.css.injector', 'ngCordova.plugins.googleAds'])
    .config(function ($routeProvider, authProvider, $httpProvider, $locationProvider, jwtInterceptorProvider) {
 
 $routeProvider
    .when( '/', {
      controller: 'HomeCtrl',
      templateUrl: 'home.html',
      pageTitle: 'Homepage',
      requiresLogin: true
    })
    .when( '/login', {
      controller: 'LoginCtrl',
      templateUrl: 'login/login.html',
      pageTitle: 'Login'
    });
 
 authProvider.init({
    domain: 'mypocket.auth0.com',
    clientID: 'YzAkSV2dWUg3gilVhb4I4fVynBaHFjR2',
    loginUrl: '/login'
  });
  
 
jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  }

  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example
  $httpProvider.interceptors.push('jwtInterceptor');
}).run(function($rootScope, auth, store, jwtHelper, $location) {
  $rootScope.$on('$locationChangeStart', function() {
    if (!auth.isAuthenticated) {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
           
        }  else {
          $location.path('/login');
        }
      }
    } 

  });
});
 
//Variaveis de Filtro
myApp.value('lancamentoFiltro', {
    dataCadastroDe: '',
    dataCadastroAte: '',
    status: ''
});

myApp.value('dashboardFiltro', {
    anoVencimento: '',
});

myApp.value('chartFiltro', {
    anoVencimento: '',
});

myApp.value('configGlobal', {
    tema: 'blue-basic-theme',
    notificacao: 0,
    diasVencimento: ''
});


myApp.value('categoriaFiltro', {
    icone: '',
    idCategoria: '',
    nomeCategoria: ''
});


myApp.value('idContaGlobal', { idConta: '', nomeConta: '', moeda: ''});


myApp.value('dashboardMatriz', {
    dashboard: '',
});

//---------------------

//Date Filter

myApp.filter('dateFormat', function($filter)
{
 return function(input)
 {
  if(!angular.isDefined(input)) { return ""; } 
 
  var _date = $filter('date')(input, 'dd/MM/yyyy');
 
  console.log('Date Filter');
  console.log(_date);
 
  return _date;

 };
});



myApp.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
     //$location.path('/');
  });
});



myApp.controller('ChartController', function($scope) {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
      ]);
      var options = {
        title: 'Company Performance'
      };
      var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

      chart.draw(data, options);
      
      console.log("teste");
    }
    
    
 
  );



myApp.controller(
    "chartController", function ($scope) {

    var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.cssStyle = "height:200px; width:300px;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"},
        {id: "cost-id", label: "Shipping", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"},
            {v: 4}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12},
            {v: 2}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 0},
            {v: 11},
            {v: 6}

        ]}
    ]};

    chart1.options = {
        "title": "Sales per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
    };

    chart1.formatters = {};

    $scope.chart = chart1;

});

//NVD3 Chart
myApp.controller('chart', function ($scope) {
      
  $scope.exampleData = [
                {
                    key: "One",
                    y: 5
                },
                {
                    key: "Two",
                    y: 2
                },
                {
                    key: "Three",
                    y: 9
                },
                {
                    key: "Four",
                    y: 7
                },
                {
                    key: "Five",
                    y: 4
                },
                {
                    key: "Six",
                    y: 3
                },
                {
                    key: "Seven",
                    y: 9
                }
            ];

            $scope.xFunction = function(){
                return function(d) {
                    return d.key;
                };
            }
            $scope.yFunction = function(){
                return function(d) {
                    return d.y;
                };
            }

            $scope.descriptionFunction = function(){
                return function(d){
                    return d.key;
                }
            }
            
            $scope.toolTipContentFunction = function(){
                return function(key, x, y, e, graph) {
    	        return  'Super New Tooltip' +
        	'<h1>' + key + '</h1>' +
            '<p>' +  y + ' at ' + x + '</p>'
	}
}
});


//NVD3 Chart
myApp.controller('nvd3', function ($scope) {
      $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }, dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                pie: {
                  dispatch: {
                    //chartClick: function(e) {console.log("! chart Click !")},
                    elementClick: function(e) {console.log("! element Click !")},
                    elementDblClick: function(e) {console.log("! element Double Click !")},
                    elementMouseout: function(e) {console.log("! element Mouseout !")},
                    elementMouseover: function(e) {console.log("! element Mouseover !")}
                  }
                },
            },
             
        };

        $scope.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];
});


myApp.controller('FetchCtrl', function($scope, $http){
    var pendingTask;

    if($scope.search === undefined){
      $scope.search = "Sherlock Holmes";
      fetch();
    }

    $scope.change = function(){
      if(pendingTask){
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch(){
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
       .success(function(response){ $scope.details = response; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
       .success(function(response){  $scope.related = response; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
      $scope.change();
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });



myApp.factory('Scopes', function ($rootScope) {
    var mem = {};
 
    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
});


