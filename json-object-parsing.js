var JSONObject = {"success":true,"timestamp":1539809646,"base":"EUR","date":"2018-10-17","rates":{"AED":4.223689,"AFN":87.460204,"ALL":124.828594,"AMD":556.442392,"ANG":2.04164,"AOA":346.514063,"ARS":41.635473,"AUD":1.617879,"AWG":2.069928,"AZN":1.957805,"BAM":1.833152,"BBD":2.302163,"BDT":96.389584,"BGN":1.955851,"BHD":0.433501,"BIF":2082.577894,"BMD":1.14996,"BND":1.621732,"BOB":7.948237,"BRL":4.238523,"BSD":1.150133,"BTC":0.000177,"BTN":84.602206,"BWP":12.23788,"BYN":2.424058,"BYR":22539.219618,"BZD":2.311878,"CAD":1.497461,"CDF":1869.835906,"CHF":1.144642,"CLF":0.028804,"CLP":774.734845,"CNY":7.966346,"COP":3517.785703,"CRC":682.949583,"CUC":1.14996,"CUP":30.473945,"CVE":109.931016,"CZK":25.844786,"DJF":204.370879,"DKK":7.461054,"DOP":56.296333,"DZD":136.494523,"EGP":20.595213,"ERN":17.249471,"ETB":32.199167,"EUR":1,"FJD":2.464595,"FKP":0.873993,"GBP":0.877071,"GEL":2.86334,"GGP":0.876963,"GHS":5.594593,"GIP":0.873993,"GMD":56.848273,"GNF":10476.137133,"GTQ":8.896896,"GYD":240.560527,"HKD":9.01471,"HNL":27.719748,"HRK":7.41615,"HTG":81.973739,"HUF":322.216043,"IDR":17469.332654,"ILS":4.192983,"IMP":0.876963,"INR":84.631319,"IQD":1369.60258,"IRR":48419.073971,"ISK":137.213074,"JEP":0.876963,"JMD":154.738747,"JOD":0.816013,"JPY":129.565751,"KES":116.065544,"KGS":79.693655,"KHR":4698.737821,"KMF":490.687122,"KPW":1034.964128,"KRW":1297.879462,"KWD":0.348495,"KYD":0.958544,"KZT":417.515798,"LAK":9807.438936,"LBP":1744.257479,"LKR":196.688798,"LRD":180.543495,"LSL":16.496212,"LTL":3.395534,"LVL":0.695599,"LYD":1.581229,"MAD":10.897366,"MDL":19.521756,"MGA":3970.231313,"MKD":61.336008,"MMK":1828.839053,"MNT":2948.902064,"MOP":9.285641,"MRO":410.535451,"MUR":39.627384,"MVR":17.778483,"MWK":836.245324,"MXN":21.709181,"MYR":4.781879,"MZN":69.589869,"NAD":16.772156,"NGN":418.585411,"NIO":36.971012,"NOK":9.447343,"NPR":135.471083,"NZD":1.756041,"OMR":0.442694,"PAB":1.150133,"PEN":3.833988,"PGK":3.739843,"PHP":62.05761,"PKR":152.886904,"PLN":4.291341,"PYG":6831.691894,"QAR":4.186973,"RON":4.665733,"RSD":118.417162,"RUB":75.363445,"RWF":1000.465361,"SAR":4.313443,"SBD":9.248666,"SCR":15.772282,"SDG":54.13901,"SEK":10.310317,"SGD":1.584702,"SHP":1.518984,"SLL":9717.163661,"SOS":668.126919,"SRD":8.576415,"STD":24502.498602,"SVC":10.065574,"SYP":592.229127,"SZL":16.496183,"THB":37.360481,"TJS":10.835617,"TMT":4.03636,"TND":3.280724,"TOP":2.641003,"TRY":6.426666,"TTD":7.752744,"TWD":35.514798,"TZS":2632.259144,"UAH":32.112644,"UGX":4342.122523,"USD":1.14996,"UYU":37.936694,"UZS":9441.173324,"VEF":285788.047914,"VND":26845.820509,"VUV":131.206939,"WST":3.026159,"XAF":653.395595,"XAG":0.078694,"XAU":0.000941,"XCD":3.107825,"XDR":0.825581,"XOF":663.527033,"XPF":119.245511,"YER":287.837918,"ZAR":16.393257,"ZMK":10350.949255,"ZMW":13.658657,"ZWL":370.695428}};

//console.log(JSONObject);
let JSONRates = JSONObject.rates;
let RateKeys = Object.keys(JSONRates);
let FromValue = "USD";
//Object.keys(JSONRates).map(e => {
  // console.log(`key= ${e} value = ${JSONRates[e]}`)
//});
Object.entries(JSONRates).forEach(([key, value]) => {
  //if (key === FromValue) {
   // console.log(value)
  //}
 //  console.log(`key= ${key} value = ${value}`)
  console.log(`${key} : ${value}`)
});