var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-6869992474017983/9375997553',
    interstitial: 'ca-app-pub-6869992474017983/1657046752'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-6869992474017983/4806197152',
    interstitial: 'ca-app-pub-6869992474017983/7563979554'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-6869992474017983/8878394753',
    interstitial: 'ca-app-pub-6869992474017983/1355127956'
  };
}


console.log('Paulo');
/*
if (! AdMob ) { 
    
    console.log ('AdMob Erro'); 
    
} else {
*/
   console.log('AdMob OK');

  // this will create a banner on startup
  $cordovaGoogleAds.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  $cordovaGoogleAds.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
  
 
//}

 console.log ('AdMob Erro'); 