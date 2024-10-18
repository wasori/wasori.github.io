function updateTime() {
  let today = new Date();

  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초

  // 시간이 한 자리일 경우 앞에 0을 추가해주는 코드
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // .nav-time 요소에 시간을 표시
  $(".nav-time").text(hours + ":" + minutes + ":" + seconds);
}

for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("tab-show");
      $(".tab-button").eq(i).addClass("tab-show");
      $(".tab-page").removeClass("show");
      $(".tab-page").eq(i).addClass("show");
    });
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 경남좌표
const coords2 = [
  295.4990003006503, 438.166805893648, 296.49933544175474, 436.16741364874775,
  296.49933544175474, 435.1677175262976, 297.49967058285915, 433.16832528139736,
  297.49967058285915, 433.16832528139736, 296.49933544175474, 431.1689330364971,
  295.4990003006503, 430.16923691404696, 294.49866515954585, 429.16954079159683,
  294.49866515954585, 428.1698446691467, 293.49833001844144, 427.17014854669657,
  292.497994877337, 427.17014854669657, 291.4976597362326, 427.17014854669657,
  290.49732459512813, 426.17045242424643, 289.4969894540237, 423.17136405689604,
  288.4966543129193, 423.17136405689604, 288.4966543129193, 423.17136405689604,
  287.4963191718149, 423.17136405689604, 286.4959840307105, 421.1719718119958,
  285.495648889606, 420.17227568954564, 285.495648889606, 420.17227568954564,
  284.4953137485016, 419.1725795670955, 284.4953137485016, 418.1728834446454,
  283.4949786073972, 416.17349119974506, 283.4949786073972, 416.17349119974506,
  280.49397318408387, 415.1737950772949, 279.49363804297946, 415.1737950772949,
  277.4929677607706, 414.1740989548448, 277.4929677607706, 413.17440283239466,
  276.49263261966615, 412.17470670994453, 276.49263261966615,
  412.17470670994453, 275.49229747856174, 411.1750105874944, 275.49229747856174,
  411.1750105874944, 274.4919623374573, 409.17561834259413, 274.4919623374573,
  409.17561834259413, 274.4919623374573, 407.17622609769387, 274.4919623374573,
  405.1768338527936, 274.4919623374573, 403.17744160789334, 272.49129205524844,
  402.1777454854432, 272.49129205524844, 399.1786571180928, 269.4902866319352,
  399.1786571180928, 269.4902866319352, 397.17926487319255, 271.490956914144,
  397.17926487319255, 272.49129205524844, 397.17926487319255, 274.4919623374573,
  395.1798726282923, 275.49229747856174, 394.18017650584216, 275.49229747856174,
  391.18108813849176, 275.49229747856174, 390.1813920160416, 276.49263261966615,
  388.18199977114136, 276.49263261966615, 388.18199977114136,
  278.49330290187504, 387.1823036486912, 279.49363804297946, 386.18260752624104,
  280.49397318408387, 385.1829114037909, 281.4943083251883, 383.18351915889065,
  281.4943083251883, 382.1838230364405, 281.4943083251883, 382.1838230364405,
  278.49330290187504, 380.18443079154025, 278.49330290187504, 379.1847346690901,
  278.49330290187504, 378.18503854664, 279.49363804297946, 376.1856463017397,
  279.49363804297946, 376.1856463017397, 279.49363804297946, 375.1859501792896,
  276.49263261966615, 373.1865579343893, 276.49263261966615, 373.1865579343893,
  274.4919623374573, 372.1868618119392, 273.4916271963529, 371.18716568948906,
  270.4906217730396, 371.18716568948906, 270.4906217730396, 369.1877734445888,
  271.490956914144, 367.18838119968854, 272.49129205524844, 366.1886850772384,
  273.4916271963529, 364.18929283233814, 273.4916271963529, 364.18929283233814,
  276.49263261966615, 363.189596709888, 276.49263261966615, 362.1899005874379,
  278.49330290187504, 360.1905083425376, 278.49330290187504, 358.1911160976373,
  278.49330290187504, 356.191723852737, 278.49330290187504, 353.19263548538663,
  280.49397318408387, 351.19324324048637, 280.49397318408387,
  351.19324324048637, 280.49397318408387, 347.19445875068584, 281.4943083251883,
  346.1947626282357, 281.4943083251883, 345.1950665057856, 281.4943083251883,
  343.1956742608853, 283.4949786073972, 343.1956742608853, 284.4953137485016,
  342.1959781384352, 285.495648889606, 342.1959781384352, 288.4966543129193,
  341.19628201598505, 291.4976597362326, 338.19719364863465, 292.497994877337,
  337.1974975261845, 294.49866515954585, 336.1978014037344, 297.49967058285915,
  336.1978014037344, 300.50067600617245, 335.19810528128426, 301.50101114727687,
  333.198713036384, 301.50101114727687, 333.198713036384, 302.5013462883813,
  331.1993207914837, 304.5020165705901, 331.1993207914837, 306.502686852799,
  330.19962466903354, 307.5030219939034, 328.2002324241333, 308.50335713500783,
  327.20053630168314, 308.50335713500783, 327.20053630168314, 310.5040274172167,
  329.1999285465834, 311.50436255832113, 329.1999285465834, 312.50469769942555,
  330.19962466903354, 313.50503284052996, 331.1993207914837, 316.50603826384327,
  333.198713036384, 316.50603826384327, 334.1984091588341, 318.50670854605215,
  334.1984091588341, 320.507378828261, 334.1984091588341, 323.5083842515743,
  334.1984091588341, 324.5087193926787, 334.1984091588341, 325.5090545337831,
  336.1978014037344, 326.50938967488753, 337.1974975261845, 328.5100599570964,
  338.19719364863465, 329.51039509820083, 336.1978014037344, 330.51073023930525,
  336.1978014037344, 332.51140052151413, 336.1978014037344, 333.51173566261855,
  336.1978014037344, 336.5127410859318, 336.1978014037344, 337.51307622703627,
  339.1968897710848, 340.5140816503495, 339.1968897710848, 342.5147519325584,
  341.19628201598505, 342.5147519325584, 344.19537038333544, 344.5154222147672,
  345.1950665057856, 346.5160924969761, 346.1947626282357, 347.51642763808053,
  347.19445875068584, 349.51709792028936, 348.194154873136, 349.51709792028936,
  351.19324324048637, 347.51642763808053, 351.19324324048637, 346.5160924969761,
  353.19263548538663, 345.51575735587164, 355.1920277302869, 345.51575735587164,
  355.1920277302869, 345.51575735587164, 355.1920277302869, 348.51676277918494,
  357.19141997518716, 348.51676277918494, 359.1908122200874, 349.51709792028936,
  359.1908122200874, 351.51776820249825, 359.1908122200874, 352.51810334360266,
  359.1908122200874, 353.5184384847071, 358.1911160976373, 357.5197790491248,
  358.1911160976373, 358.5201141902292, 357.19141997518716, 359.5204493313337,
  357.19141997518716, 359.5204493313337, 357.19141997518716, 360.5207844724381,
  357.19141997518716, 364.5221250368558, 357.19141997518716, 366.52279531906464,
  359.1908122200874, 367.52313046016906, 359.1908122200874, 369.52380074237794,
  359.1908122200874, 368.5234656012735, 363.189596709888, 368.5234656012735,
  363.189596709888, 372.5248061656912, 363.189596709888, 372.5248061656912,
  363.189596709888, 375.5258115890045, 363.189596709888, 377.5264818712133,
  361.19020446498774, 380.5274872945266, 361.19020446498774, 381.52782243563104,
  360.1905083425376, 384.52882785894434, 360.1905083425376, 386.52949814115317,
  360.1905083425376, 387.52983328225764, 360.1905083425376, 387.52983328225764,
  359.1908122200874, 391.53117384667536, 359.1908122200874, 394.5321792699886,
  361.19020446498774, 396.5328495521975, 363.189596709888, 399.53385497551074,
  363.189596709888, 400.53419011661515, 364.18929283233814, 403.53519553992845,
  366.1886850772384, 404.53553068103287, 366.1886850772384, 406.53620096324175,
  365.1889889547883, 409.537206386555, 364.18929283233814, 409.537206386555,
  364.18929283233814, 412.5382118098683, 364.18929283233814, 413.5385469509727,
  365.1889889547883, 415.5392172331816, 366.1886850772384, 416.539552374286,
  367.18838119968854, 418.54022265649485, 367.18838119968854, 419.5405577975993,
  367.18838119968854, 420.54089293870373, 367.18838119968854,
  423.54189836201704, 367.18838119968854, 424.54223350312145,
  367.18838119968854, 425.54256864422587, 367.18838119968854,
  428.54357406753917, 367.18838119968854, 428.54357406753917, 365.1889889547883,
  429.5439092086436, 365.1889889547883, 430.544244349748, 364.18929283233814,
  433.5452497730613, 363.189596709888, 436.54625519637455, 363.189596709888,
  436.54625519637455, 363.189596709888, 438.54692547858343, 360.1905083425376,
  438.54692547858343, 360.1905083425376, 439.54726061968785, 359.1908122200874,
  440.54759576079226, 359.1908122200874, 441.5479309018967, 358.1911160976373,
  443.54860118410556, 358.1911160976373, 444.54893632521, 358.1911160976373,
  448.5502768896277, 360.1905083425376, 448.5502768896277, 360.1905083425376,
  449.5506120307321, 360.1905083425376, 451.551282312941, 360.1905083425376,
  452.5516174540454, 360.1905083425376, 454.55228773625424, 361.19020446498774,
  456.55295801846313, 363.189596709888, 456.55295801846313, 364.18929283233814,
  455.5526228773587, 365.1889889547883, 453.5519525951498, 366.1886850772384,
  453.5519525951498, 366.1886850772384, 453.5519525951498, 367.18838119968854,
  454.55228773625424, 370.18746956703893, 456.55295801846313,
  370.18746956703893, 458.55362830067196, 371.18716568948906, 459.5539634417764,
  371.18716568948906, 461.55463372398526, 371.18716568948906, 463.5553040061941,
  372.1868618119392, 463.5553040061941, 373.1865579343893, 464.5556391472985,
  373.1865579343893, 465.555974288403, 374.18625405683946, 466.5563094295074,
  375.1859501792896, 468.5569797117162, 375.1859501792896, 469.5573148528207,
  376.1856463017397, 471.5579851350295, 377.18534242418986, 472.55832027613394,
  379.1847346690901, 472.55832027613394, 380.18443079154025, 474.5589905583428,
  380.18443079154025, 475.55932569944724, 380.18443079154025,
  478.56033112276054, 380.18443079154025, 479.56066626386496,
  380.18443079154025, 480.5610014049694, 382.1838230364405, 482.5616716871782,
  382.1838230364405, 482.5616716871782, 382.1838230364405, 483.5620068282827,
  383.18351915889065, 483.5620068282827, 384.1832152813408, 481.5613365460738,
  385.1829114037909, 480.5610014049694, 386.18260752624104, 480.5610014049694,
  387.1823036486912, 480.5610014049694, 389.1816958935915, 479.56066626386496,
  389.1816958935915, 477.5599959816561, 389.1816958935915, 475.55932569944724,
  389.1816958935915, 474.5589905583428, 388.18199977114136, 473.55865541723836,
  388.18199977114136, 473.55865541723836, 390.1813920160416, 472.55832027613394,
  392.1807842609419, 472.55832027613394, 393.180480383392, 468.5569797117162,
  395.1798726282923, 467.5566445706118, 395.1798726282923, 464.5556391472985,
  395.1798726282923, 463.5553040061941, 395.1798726282923, 462.5549688650897,
  395.1798726282923, 460.55429858288085, 395.1798726282923, 460.55429858288085,
  396.1795687507424, 456.55295801846313, 398.1789609956427, 459.5539634417764,
  399.1786571180928, 460.55429858288085, 399.1786571180928, 457.55329315956754,
  402.1777454854432, 456.55295801846313, 403.17744160789334, 455.5526228773587,
  403.17744160789334, 452.5516174540454, 405.1768338527936, 450.5509471718365,
  405.1768338527936, 443.54860118410556, 406.17652997524374, 445.5492714663144,
  406.17652997524374, 440.54759576079226, 406.17652997524374,
  440.54759576079226, 406.17652997524374, 440.54759576079226,
  407.17622609769387, 441.5479309018967, 409.17561834259413, 443.54860118410556,
  410.17531446504427, 444.54893632521, 411.1750105874944, 443.54860118410556,
  413.17440283239466, 440.54759576079226, 415.1737950772949, 437.546590337479,
  414.1740989548448, 436.54625519637455, 413.17440283239466, 435.54592005527013,
  412.17470670994453, 435.54592005527013, 412.17470670994453, 433.5452497730613,
  412.17470670994453, 431.5445794908524, 413.17440283239466, 428.54357406753917,
  413.17440283239466, 428.54357406753917, 412.17470670994453,
  428.54357406753917, 415.1737950772949, 432.54491463195683, 416.17349119974506,
  434.5455849141657, 416.17349119974506, 434.5455849141657, 419.1725795670955,
  434.5455849141657, 420.17227568954564, 433.5452497730613, 421.1719718119958,
  432.54491463195683, 421.1719718119958, 430.544244349748, 422.1716679344459,
  428.54357406753917, 421.1719718119958, 428.54357406753917, 421.1719718119958,
  425.54256864422587, 420.17227568954564, 424.54223350312145,
  420.17227568954564, 424.54223350312145, 420.17227568954564,
  421.54122807980815, 420.17227568954564, 419.5405577975993, 420.17227568954564,
  418.54022265649485, 420.17227568954564, 417.53988751539043,
  420.17227568954564, 417.53988751539043, 420.17227568954564,
  417.53988751539043, 419.1725795670955, 417.53988751539043, 417.17318732219525,
  417.53988751539043, 417.17318732219525, 414.5388820920772, 416.17349119974506,
  414.5388820920772, 415.1737950772949, 412.5382118098683, 415.1737950772949,
  412.5382118098683, 415.1737950772949, 410.53754152765947, 415.1737950772949,
  408.5368712454506, 414.1740989548448, 406.53620096324175, 413.17440283239466,
  406.53620096324175, 413.17440283239466, 406.53620096324175,
  412.17470670994453, 405.53586582213734, 411.1750105874944, 404.53553068103287,
  411.1750105874944, 402.53486039882404, 410.17531446504427, 402.53486039882404,
  410.17531446504427, 401.5345252577196, 410.17531446504427, 400.53419011661515,
  410.17531446504427, 402.53486039882404, 413.17440283239466,
  404.53553068103287, 414.1740989548448, 404.53553068103287, 415.1737950772949,
  404.53553068103287, 416.17349119974506, 404.53553068103287,
  417.17318732219525, 406.53620096324175, 419.1725795670955, 406.53620096324175,
  419.1725795670955, 406.53620096324175, 420.17227568954564, 406.53620096324175,
  422.1716679344459, 406.53620096324175, 422.1716679344459, 406.53620096324175,
  423.17136405689604, 405.53586582213734, 423.17136405689604,
  405.53586582213734, 423.17136405689604, 405.53586582213734,
  423.17136405689604, 407.53653610434617, 428.1698446691467, 407.53653610434617,
  428.1698446691467, 403.53519553992845, 427.17014854669657, 402.53486039882404,
  426.17045242424643, 401.5345252577196, 426.17045242424643, 400.53419011661515,
  426.17045242424643, 400.53419011661515, 423.17136405689604,
  399.53385497551074, 423.17136405689604, 396.5328495521975, 421.1719718119958,
  394.5321792699886, 421.1719718119958, 392.5315089877798, 421.1719718119958,
  392.5315089877798, 421.1719718119958, 389.53050356446647, 421.1719718119958,
  389.53050356446647, 421.1719718119958, 388.53016842336206, 421.1719718119958,
  387.52983328225764, 425.1707563017963, 386.52949814115317, 427.17014854669657,
  386.52949814115317, 429.16954079159683, 386.52949814115317, 431.1689330364971,
  386.52949814115317, 431.1689330364971, 388.53016842336206, 431.1689330364971,
  388.53016842336206, 431.1689330364971, 385.52916300004875, 435.1677175262976,
  385.52916300004875, 435.1677175262976, 385.52916300004875, 436.16741364874775,
  383.5284927178399, 438.166805893648, 383.5284927178399, 443.1652865058987,
  383.5284927178399, 443.1652865058987, 384.52882785894434, 444.1649826283488,
  387.52983328225764, 446.16437487324913, 387.52983328225764,
  447.16407099569926, 387.52983328225764, 447.16407099569926,
  387.52983328225764, 450.16315936304966, 386.52949814115317, 451.1628554854998,
  384.52882785894434, 452.1625516079499, 382.5281575767355, 455.1616399753003,
  382.5281575767355, 458.1607283426507, 381.52782243563104, 459.16042446510085,
  379.5271521534222, 459.16042446510085, 376.5261467301089, 456.16133609775045,
  375.5258115890045, 454.1619438528502, 372.5248061656912, 453.16224773040005,
  372.5248061656912, 451.1628554854998, 374.5254764479001, 451.1628554854998,
  375.5258115890045, 450.16315936304966, 373.52514130679566, 449.1634632405995,
  372.5248061656912, 448.1637671181494, 370.52413588348236, 447.16407099569926,
  368.5234656012735, 447.16407099569926, 365.5224601779602, 445.164678750799,
  368.5234656012735, 442.16559038344855, 371.5244710245868, 442.16559038344855,
  372.5248061656912, 441.1658942609984, 368.5234656012735, 439.16650201609815,
  364.5221250368558, 439.16650201609815, 363.52178989575134, 441.1658942609984,
  361.5211196135425, 441.1658942609984, 359.5204493313337, 440.1661981385483,
  357.5197790491248, 438.166805893648, 356.5194439080204, 439.16650201609815,
  352.51810334360266, 444.1649826283488, 352.51810334360266, 444.1649826283488,
  351.51776820249825, 445.164678750799, 346.5160924969761, 445.164678750799,
  344.5154222147672, 445.164678750799, 341.514416791454, 443.1652865058987,
  336.5127410859318, 442.16559038344855, 336.5127410859318, 442.16559038344855,
  335.5124059448274, 441.1658942609984, 334.51207080372296, 440.1661981385483,
  331.51106538040966, 440.1661981385483, 331.51106538040966, 440.1661981385483,
  331.51106538040966, 439.16650201609815, 330.51073023930525, 435.1677175262976,
  330.51073023930525, 435.1677175262976, 328.5100599570964, 431.1689330364971,
  328.5100599570964, 430.16923691404696, 328.5100599570964, 428.1698446691467,
  328.5100599570964, 431.1689330364971, 328.5100599570964, 435.1677175262976,
  328.5100599570964, 435.1677175262976, 328.5100599570964, 435.1677175262976,
  324.5087193926787, 435.1677175262976, 321.5077139693654, 435.1677175262976,
  320.507378828261, 436.16741364874775, 318.50670854605215, 435.1677175262976,
  316.50603826384327, 433.16832528139736, 315.50570312273885, 432.1686291589472,
  312.50469769942555, 437.1671097711979, 312.50469769942555, 438.166805893648,
  312.50469769942555, 438.166805893648, 311.50436255832113, 439.16650201609815,
  310.5040274172167, 439.16650201609815, 308.50335713500783, 439.16650201609815,
  306.502686852799, 439.16650201609815, 304.5020165705901, 439.16650201609815,
  301.50101114727687, 439.16650201609815, 301.50101114727687,
  439.16650201609815, 299.500340865068, 439.16650201609815, 299.500340865068,
  439.16650201609815, 296.49933544175474, 442.16559038344855,
];

const coords = [
  294, 562.90625, 296, 560.90625, 297, 557.90625, 296, 553.90625, 294,
  551.90625, 294, 548.90625, 294, 548.90625, 293, 548.90625, 291, 545.90625,
  289, 545.90625, 286, 545.90625, 285, 543.90625, 283, 540.90625, 283,
  538.90625, 283, 536.90625, 281, 534.90625, 280, 534.90625, 279, 533.90625,
  277, 532.90625, 275, 531.90625, 273, 527.90625, 273, 524.90625, 273,
  523.90625, 273, 519.90625, 272, 517.90625, 270, 515.90625, 269, 513.90625,
  269, 513.90625, 269, 513.90625, 269, 510.90625, 271, 510.90625, 272,
  508.90625, 275, 507.90625, 276, 505.90625, 274, 504.90625, 274, 501.90625,
  277, 498.90625, 279, 496.90625, 281, 494.90625, 282, 493.90625, 283,
  491.90625, 279, 490.90625, 278, 490.90625, 277, 488.90625, 277, 486.90625,
  278, 483.90625, 278, 482.90625, 277, 481.90625, 272, 479.90625, 270,
  476.90625, 271, 472.90625, 274, 469.90625, 275, 467.90625, 275, 464.90625,
  276, 459.90625, 277, 455.90625, 279, 453.90625, 281, 450.90625, 280,
  447.90625, 280, 445.90625, 281, 442.90625, 283, 441.90625, 286, 439.90625,
  287, 438.90625, 289, 435.90625, 290, 434.90625, 291, 433.90625, 293,
  431.90625, 299, 430.90625, 300, 429.90625, 303, 425.90625, 306, 422.90625,
  309, 421.90625, 313, 421.90625, 314, 422.90625, 314, 424.90625, 318,
  426.90625, 319, 427.90625, 319, 429.90625, 319, 429.90625, 321, 429.90625,
  323, 432.90625, 323, 433.90625, 324, 433.90625, 326, 433.90625, 329,
  433.90625, 333, 433.90625, 336, 433.90625, 338, 433.90625, 340, 437.90625,
  342, 438.90625, 343, 440.90625, 344, 442.90625, 344, 443.90625, 347,
  445.90625, 350, 447.90625, 350, 449.90625, 349, 451.90625, 349, 453.90625,
  348, 455.90625, 345, 456.90625, 342, 458.90625, 346, 459.90625, 347,
  459.90625, 350, 459.90625, 352, 460.90625, 356, 461.90625, 357, 459.90625,
  359, 459.90625, 362, 459.90625, 363, 459.90625, 365, 459.90625, 367,
  461.90625, 369, 462.90625, 369, 462.90625, 369, 464.90625, 370, 466.90625,
  372, 466.90625, 375, 466.90625, 376, 466.90625, 378, 465.90625, 381,
  464.90625, 385, 463.90625, 387, 463.90625, 388, 463.90625, 391, 463.90625,
  392, 462.90625, 395, 465.90625, 398, 466.90625, 398, 467.90625, 401,
  470.90625, 404, 470.90625, 408, 470.90625, 410, 470.90625, 413, 470.90625,
  416, 470.90625, 417, 470.90625, 420, 471.90625, 422, 471.90625, 425,
  471.90625, 426, 471.90625, 427, 469.90625, 429, 468.90625, 432, 468.90625,
  434, 467.90625, 439, 464.90625, 441, 464.90625, 441, 463.90625, 443,
  460.90625, 445, 460.90625, 449, 461.90625, 451, 464.90625, 454, 465.90625,
  454, 469.90625, 452, 470.90625, 452, 473.90625, 453, 474.90625, 454,
  476.90625, 454, 478.90625, 454, 479.90625, 458, 479.90625, 459, 479.90625,
  464, 480.90625, 467, 482.90625, 468, 485.90625, 468, 487.90625, 468,
  487.90625, 472, 488.90625, 474, 490.90625, 476, 490.90625, 480, 490.90625,
  483, 493.90625, 481, 496.90625, 477, 499.90625, 476, 500.90625, 475,
  502.90625, 471, 500.90625, 471, 502.90625, 472, 506.90625, 471, 507.90625,
  468, 508.90625, 466, 509.90625, 466, 509.90625, 463, 510.90625, 459,
  511.90625, 456, 514.90625, 455, 516.90625, 451, 519.90625, 451, 520.90625,
  446, 523.90625, 442, 524.90625, 440, 525.90625, 440, 528.90625, 442,
  531.90625, 437, 532.90625, 432, 532.90625, 432, 533.90625, 432, 536.90625,
  438, 538.90625, 437, 541.90625, 431, 542.90625, 427, 542.90625, 424,
  541.90625, 420, 541.90625, 420, 541.90625, 416, 537.90625, 414, 534.90625,
  411, 533.90625, 409, 533.90625, 403, 532.90625, 403, 532.90625, 403,
  528.90625, 400, 529.90625, 400, 533.90625, 404, 538.90625, 408, 540.90625,
  403, 545.90625, 402, 547.90625, 401, 549.90625, 393, 545.90625, 389,
  545.90625, 386, 549.90625, 389, 553.90625, 388, 555.90625, 381, 560.90625,
  380, 565.90625, 380, 570.90625, 383, 572.90625, 383, 573.90625, 384,
  577.90625, 383, 580.90625, 381, 584.90625, 380, 588.90625, 380, 592.90625,
  380, 593.90625, 376, 590.90625, 373, 587.90625, 374, 585.90625, 379,
  583.90625, 375, 580.90625, 372, 578.90625, 370, 576.90625, 370, 571.90625,
  374, 568.90625, 373, 564.90625, 368, 565.90625, 365, 570.90625, 355,
  573.90625, 354, 568.90625, 351, 569.90625, 350, 571.90625, 346, 571.90625,
  341, 568.90625, 339, 568.90625, 334, 564.90625, 331, 560.90625, 333,
  553.90625, 332, 547.90625, 330, 548.90625, 327, 552.90625, 325, 557.90625,
  322, 561.90625, 314, 561.90625, 309, 562.90625, 309, 562.90625, 308,
  563.90625, 303, 565.90625, 300, 565.90625, 299, 565.90625,
];

////////////////////
//// 좌표 따오기/////
///////////////////
// const canvas2 = document.getElementById("canvas");
// const ctx2 = canvas2.getContext("2d");

// canvas2.width = canvas2.offsetWidth;
// canvas2.height = canvas2.offsetHeight;

// // 클릭 이벤트 리스너
// canvas2.addEventListener("click", function (event) {
//   const rect = canvas2.getBoundingClientRect();

//   // 캔버스의 CSS 크기와 실제 해상도 차이를 고려한 클릭 좌표 변환
//   const scaleX = canvas2.width / rect.width; // x 좌표의 비율
//   const scaleY = canvas2.height / rect.height; // y 좌표의 비율

//   // 클릭한 좌표를 캔버스 좌표로 변환 (해상도 고려)
//   const x = (event.clientX - rect.left) * scaleX;
//   const y = (event.clientY - rect.top) * scaleY;

//   // 좌표를 콘솔에 출력 (디버깅용)
//   console.log("캔버스 내 클릭한 좌표:", x, y);

//   // 좌표를 coords 배열에 추가
//   coords.push(x, y);
//   console.log(JSON.stringify(coords));

//   // 좌표가 추가된 후 다시 다각형을 그리기
//   redrawPolygon();
// });

// 기존 다각형 그리기 코드 (다시 그리기)
function redrawPolygon() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // 캔버스를 지우기

  // 다각형 경계선 그리기
  ctx2.beginPath();
  ctx2.moveTo(coords[0], coords[1]);

  for (let i = 2; i < coords.length; i += 2) {
    ctx2.lineTo(coords[i], coords[i + 1]);
  }
  ctx2.closePath();

  // 내부 색상 설정 (붉은색, 반투명)
  ctx2.fillStyle = "rgba(0, 0, 255, 0.1)";
  ctx2.fill(); // 내부를 채우기

  // 경계선 스타일 설정
  ctx2.strokeStyle = "rgba(0, 0, 255, 0.5)";
  ctx2.lineWidth = 3;
  ctx2.stroke(); // 경계선 그리기
}

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 캔버스 사이즈 설정
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// 다각형 내부에 마우스가 있는지 확인하는 함수
function isPointInPolygon(pointX, pointY, coords) {
  let inside = false;
  for (let i = 0, j = coords.length / 2 - 1; i < coords.length / 2; j = i++) {
      const xi = coords[i * 2], yi = coords[i * 2 + 1];
      const xj = coords[j * 2], yj = coords[j * 2 + 1];

      const intersect = ((yi > pointY) !== (yj > pointY)) &&
                        (pointX < (xj - xi) * (pointY - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  return inside;
}

// 다각형을 다시 그리는 함수
function drawPolygon(coords) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 캔버스 초기화
    ctx.beginPath();
    ctx.moveTo(coords[0], coords[1]);

    for (let i = 2; i < coords.length; i += 2) {
        ctx.lineTo(coords[i], coords[i + 1]);
    }
    ctx.closePath();

    // 내부 색상 설정 (붉은색, 반투명)
    ctx.fillStyle = 'rgba(0, 0, 255, 0.1)'; // 투명도 0.3
    ctx.fill();  // 내부를 채우기

    // 경계선 스타일 설정
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)'; // 경계선 투명도 0.7
    ctx.lineWidth = 4;
    ctx.stroke(); // 경계선 그리기
}

// 마우스 움직임 감지
canvas.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;  // 마우스 X좌표
  const mouseY = event.clientY - rect.top;   // 마우스 Y좌표

  // 마우스 좌표가 다각형 내부에 있는지 확인
  if (isPointInPolygon(mouseX, mouseY, coords)) {
      drawPolygon(coords);  // 내부에 있을 때만 다각형을 그리기
  } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // 다각형 제거
  }
});

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // 다각형 경계선 그리기
// ctx.beginPath();
// ctx.moveTo(coords[0], coords[1]);

// for (let i = 2; i < coords.length; i += 2) {
//   ctx.lineTo(coords[i], coords[i + 1]);
// }
// ctx.closePath();

// // 내부 색상 설정 (붉은색, 반투명)
// ctx.fillStyle = "rgba(255, 0, 0, 0.1)"; // 투명도 0.3
// ctx.fill(); // 내부를 채우기

// // 경계선 스타일 설정
// ctx.strokeStyle = "rgba(255, 0, 0, 0.5)"; // 경계선 투명도 0.7
// ctx.lineWidth = 4;
// ctx.stroke(); // 경계선 그리기

// 최초 시간 업로드
updateTime();
setInterval(updateTime, 100);
