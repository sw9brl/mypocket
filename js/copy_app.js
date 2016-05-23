// This is a JavaScript file
'use strict';

var myApp = angular.module('myApp', ['onsen', 'googlechart', 'nvd3ChartDirectives', 'cgBusy', 'fiestah.money', 'ngMessages', 'auth0', 'angular-storage', 'angular-jwt', 'ngRoute'])
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
      templateUrl: '/login/login.html',
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
    

//var googleCharts = angular.module('google-chart-example', ['googlechart']);




myApp.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
     //$location.path('/');
  });
});

/*MonacaBackendService provides controllers with the cummunication with Monaca Backend*/

myApp.service('MonacaBackendService', function($rootScope) {

    var MC = monaca.cloud;  
    var collection = MC.Collection("collection");      
    var items;

    //Function to return the items to controllers.
    this.get_items = function() { 
        return items;
    };

    //Function to reset the items.
    this.reset_items = function() { 
        items = undefined;
        alert("items was reset!");
    };


    //Function to set the items to the controller.
    this.set_items = function(newItems) { 
        items = newItems;
    };

    //Function to fetch items from Monaca Backend.
    this.fetchItems = function(){
        items = [];
        
        collection.find()
            .done(function (result) {
                
                console.log(result.items.length);
                
                for (var i in result.items){
                    items.push(result.items[i]);
                    
                }
                
                alert("Item was fetched from MonacaBackend!");
                
                
                
                $rootScope.$apply();
            })
            .fail( function(err) {
                  alert('Error: ' + JSON.stringify(err)); 
            });
    }
});



//Page1Ctrl Start
myApp.controller('Page1Ctrl', function($scope, MonacaBackendService) {

    $scope.backend_service = MonacaBackendService;
    
    $scope.on_search_btn = function(){
        $scope.backend_service.fetchItems();                
    }        

    //Watch the result of backend_service.get_items().
    $scope.$watch('backend_service.get_items()', function(newItems) {
        
            //If items was not undefined the following codes run.
            if(typeof newItems !== 'undefined' && typeof newItems !== null){

                    //$scope.myNavigator.pushPage('page2.html')
                    $scope.app.slidingMenu.setMainPage("page2.html", {closeMenu: true});
            }
            
    });   
});


//Page1Ctrl Start


//Page1Ctrl End


//Page2Ctrl Start
myApp.controller('Page2Ctrl', function($scope, MonacaBackendService) {
    
    //Fetch items from MonacaBackendService
    $scope.items = MonacaBackendService.get_items();
    
    
    
});
//Page2Ctrl End

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

  if (false == monaca.cloud.User.isAuthenticated()) {
  // Go to login
   app.slidingMenu.setMainPage("login.html", {closeMenu: true});
}
