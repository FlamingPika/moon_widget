const o=q;(function(h,E){const V=q,X=h();while(!![]){try{const A=parseInt(V(0x1f7))/0x1+parseInt(V(0x1ba))/0x2+parseInt(V(0x211))/0x3*(-parseInt(V(0x201))/0x4)+parseInt(V(0x21c))/0x5+parseInt(V(0x1f8))/0x6+-parseInt(V(0x257))/0x7+parseInt(V(0x233))/0x8;if(A===E)break;else X['push'](X['shift']());}catch(g){X['push'](X['shift']());}}}(J,0xb2392));let selected_date=new Date(Date[o(0x1ae)]());const monthNames=['January',o(0x248),o(0x262),o(0x222),o(0x22c),o(0x1e5),'July',o(0x1e0),o(0x213),o(0x282),'November','December'],days=['Sunday',o(0x21b),'Tuesday',o(0x1cb),o(0x1dd),o(0x227),o(0x1f9)],zodiacData={'Aries':o(0x205),'Taurus':'Your\x20safety\x20depends\x20on\x20the\x20need\x20for\x20stability,\x20which\x20is\x20not\x20easy\x20to\x20satisfy\x20now.\x20You\x20have\x20to\x20learn\x20to\x20accept\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20change\x20as\x20part\x20of\x20your\x20life.\x20The\x20basic\x20problem\x20is\x20finding\x20your\x20own\x20self-respect\x20in\x20order\x20to\x20ensure\x20that\x20you\x20do\x20not\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mistakenly\x20seek\x20it\x20in\x20material\x20things.\x20When\x20you\x20accept\x20yourself\x20for\x20who\x20you\x20are,\x20it\x20will\x20become\x20easier\x20for\x20you\x20to\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20find\x20peace\x20and\x20tranquility\x20in\x20the\x20outside\x20world.','Gemini':o(0x1cf),'Cancer':'Your\x20feeling\x20of\x20safety\x20is\x20now\x20related\x20to\x20your\x20home,\x20family\x20and\x20related\x20activities\x20such\x20as\x20cooking\x20and\x20gardening.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20You\x20may\x20be\x20prone\x20to\x20emotional\x20fluctuations;\x20you\x20should\x20learn\x20to\x20forgive\x20and\x20forget\x20in\x20order\x20to\x20avoid\x20depression\x20from\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20thinking\x20too\x20much\x20about\x20things.\x20Your\x20perception\x20of\x20the\x20world\x20can\x20be\x20very\x20subjective;\x20try\x20to\x20create\x20a\x20certain\x20distance\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20without\x20being\x20bitter.\x20Due\x20to\x20your\x20rich\x20emotional\x20manifestation\x20you\x20can\x20create\x20a\x20real\x20sense\x20of\x20belonging\x20in\x20the\x20world.','Leo':o(0x1d0),'Virgo':'Your\x20feeling\x20of\x20safety\x20is\x20now\x20related\x20to\x20order\x20and\x20clarity,\x20even\x20in\x20emotions.\x20You\x20may\x20have\x20the\x20need\x20to\x20organise\x20\x20\x20\x20\x20\x20\x20\x20\x20everything\x20chaotic\x20and\x20disorganized.\x20Try\x20being\x20more\x20tolerant\x20and\x20accept\x20imperfections\x20of\x20life.\x20\x20\x20\x20\x20\x20\x20\x20\x20It\x20is\x20better\x20to\x20trust\x20life\x20and\x20let\x20it\x20run\x20its\x20own\x20way,\x20not\x20everything\x20must\x20be\x20according\x20to\x20our\x20expectations.','Libra':o(0x1c0),'Scorpio':'Moon\x20in\x20Scorpio\x20creates\x20the\x20need\x20to\x20delve\x20into\x20your\x20feelings\x20as\x20deep\x20as\x20possible.\x20You\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20desire\x20meaningful\x20emotional\x20exchanges\x20now\x20more\x20than\x20at\x20any\x20other\x20time\x20even\x20if\x20it\x20is\x20not\x20easy\x20and\x20you\x20are\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20forced\x20to\x20change\x20many\x20things.\x20Shallow\x20relationships\x20do\x20not\x20satisfy\x20you,\x20because\x20they\x20are\x20not\x20purifying\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20enough','Sagittarius':o(0x1ce),'Capricorn':o(0x254),'Pisces':o(0x20e),'Aquarius':o(0x231)};function normalize(h){const m=o,E={'JRouX':function(X,A){return X-A;},'GwGiK':function(X,A){return X<A;},'uwLDM':function(X,A){return X+A;}};return h=E[m(0x283)](h,Math[m(0x243)](h)),E[m(0x272)](h,0x0)&&(h=E[m(0x284)](h,0x1)),h;}function getZodiac(h){const y=o,E={'Bxhbh':y(0x25b),'WnlRU':function(l,x){return l(x);},'ucNAk':function(l,e){return l/e;},'LXpRM':function(l,e){return l-e;},'QlmaG':function(l,e){return l*e;},'uGQtM':function(l,e){return l+e;},'BcUei':function(l,e){return l+e;},'EZwsZ':function(l,e){return l<e;},'CNGud':y(0x219),'EydUm':function(l,e){return l<e;},'GbfGL':y(0x27a),'jjqnX':function(l,e){return l<e;},'rWloi':y(0x1bf),'wKloN':function(l,e){return l<e;},'mwDLp':'Cancer','oLOhr':function(l,e){return l<e;},'dYYdG':y(0x1e1),'HGKZQ':y(0x24d),'VAybl':y(0x206),'scrzJ':y(0x1b2),'wtUXO':y(0x226),'XnUoY':y(0x266),'esuJT':y(0x244),'HKdnh':function(l,e){return l<e;},'mHupC':'Pisces','KiIPS':function(l,e){return l+e;},'RuNUd':function(l,e){return l+e;},'cOmlG':function(l,e){return l*e;},'tebwf':function(l,e){return l+e;},'oQjuN':function(l,e){return l+e;},'PcBTf':function(l,e){return l*e;},'SjFSc':function(l,e){return l-e;},'qQkoJ':function(l,e){return l*e;},'gmMgj':function(l,e){return l*e;},'litrx':function(l,e){return l*e;},'wTFjY':function(l,e){return l*e;},'aovhl':function(l,e){return l/e;},'goqmR':function(l,e){return l-e;},'CqTHW':function(l,e){return l/e;},'LSxWr':function(l,e){return l-e;},'majYn':function(l,e){return l-e;},'jzlsd':function(l,e){return l-e;},'XVhda':function(l,e){return l*e;},'IXfui':function(l,e){return l*e;},'xYZYF':function(l,e){return l*e;},'vnBmX':function(l,x){return l(x);},'KAXHL':function(l,e){return l/e;},'cnVLM':function(l,e){return l-e;},'KCBPQ':function(l,e){return l>e;},'dBVBQ':function(l,e){return l-e;},'pMJFQ':function(l,e){return l>=e;},'hkzoe':function(l,e){return l+e;}},X=E[y(0x253)][y(0x285)]('|');let A=0x0;while(!![]){switch(X[A++]){case'0':var g=h[y(0x200)]();continue;case'1':R=E['WnlRU'](normalize,E['ucNAk'](E[y(0x217)](O,2451550.1),29.530588853));continue;case'2':return n;case'3':Z=Math[y(0x243)](E[y(0x1b7)](365.25,E[y(0x22d)](w,0x1268)));continue;case'4':z=E[y(0x217)](Math[y(0x243)](E[y(0x1b7)](Math[y(0x243)](E['BcUei'](E[y(0x23d)](w,0x64),0x31)),0.75)),0x26);continue;case'5':if(E[y(0x1e8)](Y,33.18))n=E[y(0x280)];else{if(E[y(0x1e9)](Y,51.16))n=E['GbfGL'];else{if(E[y(0x1e4)](Y,93.44))n=E['rWloi'];else{if(E[y(0x250)](Y,119.48))n=E[y(0x1ca)];else{if(E[y(0x20f)](Y,135.3))n=E['dYYdG'];else{if(E[y(0x250)](Y,173.34))n=E[y(0x1ef)];else{if(E[y(0x20f)](Y,224.17))n=E[y(0x235)];else{if(E[y(0x20f)](Y,242.57))n=E['scrzJ'];else{if(E[y(0x1e9)](Y,271.26))n=E[y(0x245)];else{if(E['wKloN'](Y,302.49))n=E[y(0x270)];else{if(E[y(0x20f)](Y,311.72))n=E[y(0x261)];else E[y(0x28d)](Y,348.58)?n=E[y(0x1dc)]:n=E[y(0x280)];}}}}}}}}}}continue;case'6':var Y,n;continue;case'7':O=E[y(0x1e2)](E[y(0x1cc)](E[y(0x22d)](Z,G),g),0x3b);continue;case'8':G=Math[y(0x243)](E[y(0x1d2)](E['cOmlG'](30.6,N),0.5));continue;case'9':Y=E[y(0x21d)](E[y(0x1cc)](E[y(0x1fd)](E['PcBTf'](0x168,Q),E['cOmlG'](6.3,Math[y(0x1bd)](P))),E[y(0x1fa)](1.3,Math[y(0x1bd)](E[y(0x1d3)](E[y(0x212)](0x2,R),P)))),E['qQkoJ'](0.7,Math[y(0x1bd)](E['gmMgj'](0x2,R))));continue;case'10':R=E['litrx'](E[y(0x212)](R,0x2),Math['PI']);continue;case'11':P=E[y(0x1ec)](E['wTFjY'](0x2,Math['PI']),E[y(0x27b)](normalize,E[y(0x20c)](E[y(0x25e)](O,2451562.2),27.55454988)));continue;case'12':w=E[y(0x1d3)](p,Math['floor'](E['CqTHW'](E[y(0x27d)](0xc,B),0xa)));continue;case'13':var B=E[y(0x1cc)](h['getMonth'](),0x1);continue;case'14':distance=E[y(0x27f)](E[y(0x1d9)](E[y(0x27d)](60.4,E['XVhda'](3.3,Math['cos'](P))),E[y(0x24c)](0.6,Math[y(0x1c2)](E['SjFSc'](E[y(0x215)](0x2,R),P)))),E[y(0x1c6)](0.5,Math['cos'](E[y(0x1ec)](0x2,R))));continue;case'15':Q=E[y(0x275)](normalize,E[y(0x1eb)](E[y(0x1c8)](O,2451555.8),27.321582241));continue;case'16':E[y(0x1c7)](O,0x231518)&&(O=E[y(0x269)](O,z));continue;case'17':var R,P,Q;continue;case'18':var w,N,Z,G,z,O;continue;case'19':var p=h[y(0x1d7)]();continue;case'20':E[y(0x232)](N,0xc)&&(N=E[y(0x27f)](N,0xc));continue;case'21':N=E['hkzoe'](B,0x9);continue;}break;}}const getJulianDate=(h=new Date())=>{const C=o,E={'WCMqJ':function(g,Y){return g+Y;},'fvzJs':function(g,Y){return g-Y;},'ihChM':function(g,Y){return g/Y;}},X=h['getTime'](),A=h[C(0x1b5)]();return E['WCMqJ'](E['fvzJs'](E['ihChM'](X,0x5265c00),E[C(0x202)](A,0x5a0)),2440587.5);},LUNAR_MONTH=29.53058770576,getLunarAge=(h=new Date())=>{const a=o,E={'spmJK':function(g,Y){return g(Y);},'rkbIB':function(g,Y){return g*Y;}},X=E[a(0x1fe)](getLunarAgePercent,h),A=E[a(0x228)](X,LUNAR_MONTH);return A;},getLunarAgePercent=(h=new Date())=>{const c=o,E={'ZlpJJ':function(A,g){return A/g;},'SiIcG':function(A,g){return A-g;},'QCAja':function(A,g){return A(g);},'kfwrm':function(A,g){return A-g;},'agPzB':function(A,g){return A<g;},'vSPbC':function(A,g){return A+g;}};let X=E['ZlpJJ'](E[c(0x1b8)](E[c(0x1f4)](getJulianDate,h),2451550.1),LUNAR_MONTH);return X=E['kfwrm'](X,Math[c(0x243)](X)),E[c(0x1be)](X,0x0)?E['vSPbC'](X,0x1):X;},getLunarPhase=h=>{const i=o,E={'lQNIu':function(A,g){return A(g);},'kDqQA':function(A,g){return A<=g;},'WbCIP':i(0x242),'xpNHB':function(A,g){return A<g;},'pgLfZ':i(0x21f),'MVQMy':function(A,g){return A<=g;},'QkHFO':i(0x1bc),'ZhMBX':'Waning\x20Moon'},X=E[i(0x25f)](getLunarAge,h);if(E['kDqQA'](X,0.9))return E['WbCIP'];else{if(E['xpNHB'](X,14.6))return E[i(0x28c)];else{if(E[i(0x1f2)](X,15.765294))return E[i(0x27c)];else{if(E['kDqQA'](X,29.1))return E[i(0x1b0)];}}}return E['WbCIP'];};function showMoonDescription(h,E){const S=o,X={'IgEpc':'yesterday','lRLra':function(Y,n){return Y-n;},'jHiMk':function(Y,n){return Y===n;},'jSlts':'today-left','XPsmS':S(0x251),'bGFKp':S(0x246),'xwlmk':S(0x1e6),'nHdJk':function(Y,n){return Y===n;},'cvYbK':S(0x256),'FPWJJ':'tomorrow','ySUYR':function(Y,n){return Y+n;},'WPXVS':S(0x221),'npdsK':function(Y,n){return Y(n);},'tqBJT':function(Y,n){return Y+n;},'fmlOn':S(0x273),'hFtrt':function(Y,n){return Y+n;},'TWYSy':function(Y,n){return Y+n;}},A=new Date(Date[S(0x1ae)]());let g=new Date(E);switch(h){case 0x0:h=X[S(0x216)],g['setDate'](X[S(0x1cd)](E[S(0x200)](),0x1));if(X['jHiMk'](g['toDateString'](),A[S(0x225)]()))document[S(0x23b)](X[S(0x281)])['style'][S(0x1f6)]=X[S(0x1da)];else document[S(0x23b)](X[S(0x281)])[S(0x1b4)]['visibility']=X['bGFKp'];break;case 0x1:h=X[S(0x263)],g[S(0x26d)](E[S(0x200)]()),console[S(0x1b3)](g[S(0x225)]()),console['log'](A[S(0x225)]());if(X[S(0x234)](g[S(0x225)](),A[S(0x225)]()))document[S(0x23b)](X['cvYbK'])[S(0x1b4)][S(0x1f6)]=X[S(0x1da)];else document['getElementById'](X[S(0x28b)])[S(0x1b4)][S(0x1f6)]=X[S(0x267)];break;case 0x2:h=X[S(0x268)],g[S(0x26d)](X['ySUYR'](E[S(0x200)](),0x1));if(X[S(0x22b)](g['toDateString'](),A[S(0x225)]()))document[S(0x23b)](X[S(0x1b9)])[S(0x1b4)][S(0x1f6)]=X[S(0x1da)];else document[S(0x23b)](X[S(0x1b9)])[S(0x1b4)][S(0x1f6)]=X['bGFKp'];break;}document['getElementById'](h)[S(0x203)]=X['npdsK'](getLunarPhase,g),document[S(0x23b)](X[S(0x260)](h,X[S(0x286)]))['innerHTML']=X[S(0x1c1)](X[S(0x208)](monthNames[g['getMonth']()],'\x20'),g['getDate']());}const next=()=>{const k=o,h={'yfYHq':function(X,A){return X+A;},'NqOLn':function(X){return X();},'OcxzP':function(X,A,g,Y){return X(A,g,Y);},'xFfOH':'tomorrow','qsiux':k(0x1c9)};selected_date[k(0x26d)](h[k(0x249)](selected_date[k(0x200)](),0x1)),h[k(0x258)](refresh_description),h[k(0x258)](toggle_moon_animation);let E=h[k(0x249)](h[k(0x210)](check_change_phase,selected_date,0x1,h[k(0x20a)]),h[k(0x210)](check_change_phase,selected_date,-0x1,h[k(0x20a)]));E=h['yfYHq'](h['OcxzP'](check_change_phase,selected_date,0x1,h['qsiux']),h[k(0x210)](check_change_phase,selected_date,-0x1,h[k(0x230)]));},prev=()=>{const D=o,h={'VIrwT':function(X,A){return X-A;},'kpDOU':function(X){return X();},'xmBuD':function(X){return X();},'worZw':function(X,A){return X+A;},'zzCwX':function(X,A,g,Y){return X(A,g,Y);},'TSLOw':D(0x288),'lWxcf':function(X,A,g,Y){return X(A,g,Y);},'MtBLT':'yesterday','RSChg':function(X,A,g,Y){return X(A,g,Y);}};selected_date['setDate'](h[D(0x23a)](selected_date['getDate'](),0x1)),h['kpDOU'](refresh_description),h['xmBuD'](toggle_moon_animation);let E=h[D(0x265)](h[D(0x21a)](check_change_phase,selected_date,0x1,h['TSLOw']),h[D(0x23c)](check_change_phase,selected_date,-0x1,h['TSLOw']));E=h[D(0x265)](h['lWxcf'](check_change_phase,selected_date,0x1,h[D(0x26e)]),h['RSChg'](check_change_phase,selected_date,-0x1,h[D(0x26e)]));};function refresh_description(){const U=o,h={'gHaUT':U(0x1f5),'hQPMe':function(X,A){return X+A;},'oYBMK':function(X,A){return X+A;},'BByiI':function(X,A){return X+A;},'dkOOc':function(X,A){return X(A);},'EFuCj':U(0x276),'FoDbS':U(0x23e),'FJXRk':function(X,A,g){return X(A,g);},'NFSWW':function(X,A,g){return X(A,g);}};document[U(0x23b)](h['gHaUT'])[U(0x203)]=h[U(0x1c3)](h['hQPMe'](h[U(0x1c3)](h[U(0x1c3)](h[U(0x287)](h[U(0x1ee)](days[selected_date[U(0x27e)]()],',\x20'),selected_date[U(0x200)]()),'\x20'),monthNames[selected_date[U(0x26a)]()]),'\x20'),selected_date['getFullYear']());let E=h['dkOOc'](getZodiac,selected_date);document[U(0x23b)](h[U(0x255)])[U(0x203)]=E,document['getElementById'](h[U(0x1b6)])[U(0x203)]=zodiacData[E],h[U(0x26b)](showMoonDescription,0x0,selected_date),h[U(0x252)](showMoonDescription,0x1,selected_date),h[U(0x252)](showMoonDescription,0x2,selected_date);}const check_change_phase=(h,E,X)=>{const I=o,A={'iOMeX':function(B,R){return B===R;},'InheF':I(0x288),'TkTWk':function(B,R){return B+R;},'JGRFt':I(0x1c9),'OTuXS':function(B,R){return B-R;},'UiBHF':function(B,R){return B===R;},'UpNNt':function(B,R){return B(R);},'sgRtI':I(0x242),'qxJPD':function(B,R){return B(R);},'ZdOlE':'Full\x20Moon','sONQd':function(B,R){return B!==R;},'wtOUW':function(B,R){return B+R;},'NAvPc':function(B,R){return B(R);}};let g=new Date(h);if(A[I(0x24a)](X,A[I(0x207)]))g[I(0x26d)](A['TkTWk'](h[I(0x200)](),0x1));else A[I(0x24a)](X,A[I(0x1ff)])&&g[I(0x26d)](A[I(0x277)](h['getDate'](),0x1));if(A[I(0x1e3)](A[I(0x1de)](getLunarPhase,g),A['sgRtI'])||A['iOMeX'](A['qxJPD'](getLunarPhase,g),A[I(0x220)]))return 0x0;let Y='',n=0x0;while(A[I(0x209)](Y,A[I(0x1fb)])&&A[I(0x209)](Y,A[I(0x220)])){g[I(0x26d)](A['wtOUW'](g[I(0x200)](),E)),n+=0x1,Y=A[I(0x22e)](getLunarPhase,g);}return n;},moon_animation=(h,E,X,A,g,Y,n,B)=>{const t=o,R={'APYob':function(P,Q){return P<Q;},'JvgBK':function(P,Q){return P+Q;},'IQJCx':t(0x247),'CuaLi':t(0x218),'GeBiy':function(P,Q){return P+Q;},'wrJgu':t(0x25d),'xcQDZ':function(P,Q){return P+Q;},'qGMjL':function(P,Q){return P*Q;},'cPYOy':function(P,Q){return P+Q;},'BPXcg':function(P,Q){return P>Q;},'rBOTg':function(P,Q){return P+Q;},'levnL':function(P,Q){return P+Q;},'FeDVy':function(P,Q){return P+Q;},'qrCap':function(P,Q){return P+Q;},'uxhRr':function(P,Q){return P+Q;},'VDKUs':function(P,Q){return P+Q;},'aLSff':function(P,Q){return P*Q;},'aleIn':function(P,Q){return P+Q;}};if(R['APYob'](Y,A))document[t(0x23b)](R[t(0x259)](h,R[t(0x1df)]))[t(0x1b4)]['backgroundColor']=X,document[t(0x23b)](R[t(0x259)](h,R['CuaLi']))[t(0x1b4)][t(0x289)]=E,document['getElementById'](R[t(0x1ed)](h,R[t(0x229)]))['style']['borderRadius']=R[t(0x1af)],document[t(0x23b)](R[t(0x1ed)](h,R[t(0x229)]))[t(0x1b4)][t(0x1d5)]=R[t(0x1d4)](R[t(0x20b)](R[t(0x25a)](Y,0x1),0xa)['toString'](),'px');else R[t(0x223)](Y,g)?(document[t(0x23b)](R[t(0x22a)](h,R[t(0x1df)]))[t(0x1b4)][t(0x289)]=E,document[t(0x23b)](R[t(0x25a)](h,R[t(0x229)]))[t(0x1b4)]['backgroundColor']=X,document[t(0x23b)](R[t(0x238)](h,R[t(0x229)]))[t(0x1b4)][t(0x278)]=R[t(0x1af)],document['getElementById'](R[t(0x1f0)](h,R['CuaLi']))[t(0x1b4)][t(0x1d5)]=R[t(0x259)](R[t(0x20b)](R[t(0x24f)](0x2,n),-0xa)['toString'](),'px')):(document[t(0x23b)](R[t(0x1ea)](h,R[t(0x229)]))[t(0x1b4)][t(0x1d5)]=R[t(0x23f)](R['aLSff'](0x9,B)[t(0x26f)](),'px'),document[t(0x23b)](R['aleIn'](h,R[t(0x229)]))[t(0x1b4)][t(0x278)]='0%');};function q(h,E){const X=J();return q=function(A,g){A=A-0x1ae;let Y=X[A];return Y;},q(h,E);}function check_time_moon_animation(h,E,X,A){const F=o,g={'LPwiJ':function(Y,n){return Y===n;},'FEeDH':'Full\x20Moon','MJldi':function(Y,n){return Y+n;},'mCnMf':F(0x218),'EmqKO':F(0x1f1),'BycFR':F(0x242),'tUHgX':function(Y,n){return Y+n;},'ejBzS':F(0x264),'WibbL':F(0x21f),'Zyyfh':function(Y,n,B,R,P,Q,w,N,Z){return Y(n,B,R,P,Q,w,N,Z);},'azyBM':function(Y,n){return Y===n;},'wLYMa':F(0x237),'KoTEW':function(Y,n,B,R,P,Q,w,N,Z){return Y(n,B,R,P,Q,w,N,Z);},'HOepu':function(Y,n){return Y===n;},'EIMob':function(Y,n){return Y===n;},'NHOVN':function(Y,n,B,R,P,Q,w,N,Z){return Y(n,B,R,P,Q,w,N,Z);},'YdbaJ':F(0x1fc)};g[F(0x1c4)](document[F(0x23b)](h)[F(0x203)],g[F(0x28a)])&&(document[F(0x23b)](g[F(0x1d6)](h,g[F(0x20d)]))[F(0x1b4)]['backgroundColor']=g[F(0x1d1)]);g[F(0x1c4)](document['getElementById'](h)['innerHTML'],g[F(0x274)])&&(document[F(0x23b)](g[F(0x1d8)](h,g[F(0x20d)]))[F(0x1b4)][F(0x289)]=g[F(0x1b1)]);if(g['LPwiJ'](g[F(0x1d8)](g[F(0x1d6)](E,0x1),X),0xe)){if(g['LPwiJ'](document['getElementById'](h)['innerHTML'],g[F(0x1db)]))g[F(0x24b)](moon_animation,h,g[F(0x1b1)],g['EmqKO'],0x7,0x7,E,X,A);else g[F(0x1f3)](document[F(0x23b)](h)[F(0x203)],g[F(0x241)])&&g[F(0x1e7)](moon_animation,h,g[F(0x1d1)],g[F(0x1b1)],0x7,0x7,E,X,A);}else{if(g[F(0x271)](g[F(0x1d6)](g[F(0x1d6)](E,0x1),X),0xd)){if(g[F(0x271)](document[F(0x23b)](h)[F(0x203)],g['WibbL']))g[F(0x1e7)](moon_animation,h,g['ejBzS'],g[F(0x1d1)],0x6,0x6,E,X,A);else g['EIMob'](document['getElementById'](h)['innerHTML'],g[F(0x241)])&&g[F(0x239)](moon_animation,h,g[F(0x1d1)],g[F(0x1b1)],0x6,0x6,E,X,A);}else document[F(0x23b)](g[F(0x1d6)](h,g[F(0x20d)]))[F(0x1b4)][F(0x1d5)]=g[F(0x1bb)];}}function J(){const v=['floor','Aquarius','wtUXO','hidden','-moon','February','yfYHq','iOMeX','Zyyfh','XVhda','Virgo','GMwKD','qrCap','wKloN','visible','NFSWW','Bxhbh','You\x20might\x20have\x20a\x20strong\x20need\x20for\x20being\x20useful\x20to\x20the\x20society\x20and\x20you\x20look\x20for\x20justification\x20in\x20the\x20outside\x20world.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20You\x20may\x20underestimate\x20what\x20you\x20want\x20from\x20yourself\x20and\x20for\x20yourself.\x20Shyness\x20may\x20be\x20accompanied\x20by\x20resentment\x20of\x20the\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fact\x20that\x20others\x20ignore\x20you.\x20Do\x20not\x20seek\x20approval\x20from\x20the\x20outside,\x20it\x20will\x20not\x20help\x20you\x20get\x20rid\x20of\x20your\x20doubt\x20and\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20it\x20is\x20harmful\x20to\x20you.\x20You\x20have\x20to\x20trust\x20your\x20inner\x20values.','EFuCj','today-middle','7487935OevwDP','NqOLn','JvgBK','cPYOy','6|18|17|19|13|0|12|21|20|3|8|4|7|16|1|10|11|14|15|9|5|2','svSDc','100%','goqmR','lQNIu','tqBJT','esuJT','March','xwlmk','black','worZw','Capricorn','bGFKp','FPWJJ','dBVBQ','getMonth','FJXRk','KSmRE','setDate','MtBLT','toString','XnUoY','HOepu','GwGiK','-date','BycFR','vnBmX','zodiac','OTuXS','borderRadius','euEAC','Taurus','WnlRU','QkHFO','LSxWr','getDay','majYn','CNGud','jSlts','October','JRouX','uwLDM','split','fmlOn','oYBMK','tomorrow','backgroundColor','FEeDH','cvYbK','pgLfZ','HKdnh','now','wrJgu','ZhMBX','ejBzS','Scorpio','log','style','getTimezoneOffset','FoDbS','QlmaG','SiIcG','WPXVS','2671622qgRyDv','YdbaJ','Full\x20Moon','sin','agPzB','Gemini','You\x20might\x20have\x20a\x20strong\x20need\x20for\x20balance\x20and\x20harmony\x20now.\x20You\x20probably\x20desire\x20to\x20keep\x20things\x20nice\x20rather\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20than\x20venturing\x20into\x20fundamental\x20questions\x20in\x20order\x20not\x20to\x20disturb\x20the\x20peace.\x20You\x20must\x20learn\x20to\x20share\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20your\x20good\x20and\x20bad\x20feelings.\x20Do\x20not\x20be\x20afraid\x20to\x20be\x20who\x20you\x20really\x20are,\x20despite\x20what\x20is\x20expected\x20of\x20you.','hFtrt','cos','hQPMe','LPwiJ','pQAqt','xYZYF','KCBPQ','cnVLM','yesterday','mwDLp','Wednesday','BcUei','lRLra','The\x20greatest\x20need\x20is\x20to\x20always\x20search\x20for\x20something.\x20In\x20order\x20to\x20feel\x20safe\x20you\x20might\x20find\x20that\x20you\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20need\x20to\x20have\x20a\x20goal,\x20mission\x20or\x20philosophy\x20that\x20gives\x20your\x20life\x20meaning.\x20With\x20Moon\x20in\x20Sagittarius\x20you\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20have\x20an\x20optimistic\x20approach\x20to\x20life\x20and\x20you\x20believe\x20that\x20things\x20will\x20get\x20better\x20even\x20if\x20you\x20get\x20into\x20trouble.','Moon\x20in\x20Gemini\x20manifests\x20itself\x20by\x20the\x20need\x20for\x20changes\x20and\x20spontaneity.\x20Safety\x20lies\x20in\x20thinking\x20about\x20your\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20feelings\x20and\x20sharing\x20them\x20with\x20others.\x20You\x20can\x20be\x20more\x20talkative\x20and\x20speak\x20with\x20ease\x20these\x20days.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20You\x20might\x20have\x20a\x20better\x20ability\x20to\x20keep\x20a\x20cool\x20head,\x20but\x20beware,\x20cold\x20heart\x20can\x20discourage\x20others.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Harmony\x20of\x20thinking\x20and\x20feeling\x20is\x20important.','You\x20feel\x20safe\x20in\x20moments\x20when\x20you\x20can\x20impress\x20others\x20and\x20get\x20praise\x20and\x20admiration.\x20Yet,\x20when\x20you\x20get\x20into\x20the\x20spotlight,\x20\x20\x20\x20\x20\x20\x20\x20\x20you\x20may\x20find\x20yourself\x20at\x20a\x20loss.\x20Maybe\x20you\x20should\x20admit\x20your\x20fear\x20of\x20criticism\x20and\x20your\x20inability\x20to\x20accept\x20criticism.\x20\x20\x20\x20\x20\x20\x20\x20\x20It\x20is\x20very\x20important\x20to\x20accept\x20feedback\x20and\x20use\x20it\x20for\x20improvement.','EmqKO','RuNUd','SjFSc','xcQDZ','right','MJldi','getFullYear','tUHgX','jzlsd','XPsmS','WibbL','mHupC','Thursday','UpNNt','IQJCx','August','Leo','KiIPS','UiBHF','jjqnX','June','today','KoTEW','EZwsZ','EydUm','uxhRr','KAXHL','gmMgj','GeBiy','BByiI','HGKZQ','FeDVy','whitesmoke','MVQMy','azyBM','QCAja','current_date','visibility','282694ELcTjV','4728330DHULuT','Saturday','cOmlG','sgRtI','0px','oQjuN','spmJK','JGRFt','getDate','528108RUtXMY','ihChM','innerHTML','yZqdR','The\x20feeling\x20of\x20uncertainty\x20can\x20make\x20you\x20solve\x20problems\x20faster\x20then\x20is\x20natural.\x20Do\x20not\x20rush\x20as\x20if\x20there\x20was\x20a\x20deadline.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Try\x20to\x20slow\x20down\x20so\x20that\x20you\x20can\x20decide\x20what\x20you\x20want\x20to\x20do\x20and\x20proceed\x20at\x20your\x20own\x20comfortable\x20pace.','Libra','InheF','TWYSy','sONQd','xFfOH','qGMjL','aovhl','mCnMf','Moon\x20in\x20Pisces\x20has\x20the\x20greatest\x20sensitivity\x20and\x20perceptiveness\x20of\x20surroundings.\x20You\x20can\x20experience\x20feelings\x20of\x20insecurity,\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20be\x20passive\x20and\x20only\x20wait\x20and\x20see\x20what\x20happens\x20in\x20your\x20life.\x20If\x20you\x20engage\x20in\x20creative\x20or\x20spiritual\x20search,\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20you\x20will\x20benefit\x20from\x20great\x20imagination\x20of\x20Pisces.','oLOhr','OcxzP','21Iiurtx','PcBTf','September','FmWVp','IXfui','IgEpc','LXpRM','-moon-shadow','Aries','zzCwX','Monday','305055YTKFoA','tebwf','SNNej','Waxing\x20Moon','ZdOlE','today-right','April','BPXcg','uYHJq','toDateString','Sagittarius','Friday','rkbIB','CuaLi','rBOTg','jHiMk','May','uGQtM','NAvPc','jVwWP','qsiux','Your\x20relationship\x20with\x20your\x20emotions\x20might\x20be\x20more\x20complicated,\x20because\x20Moon\x20in\x20Aquarius\x20has\x20a\x20strong\x20need\x20for\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20emotional\x20freedom.\x20However,\x20when\x20you\x20are\x20in\x20a\x20group\x20of\x20people,\x20it\x20is\x20easier\x20for\x20you\x20to\x20understand\x20your\x20feelings\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20free\x20yourself\x20from\x20negative\x20emotions\x20such\x20as\x20fear,\x20anger\x20and\x20jealousy.','pMJFQ','2050600kdCRjc','nHdJk','VAybl','RJHgs','Waning\x20Moon','levnL','NHOVN','VIrwT','getElementById','lWxcf','ucNAk','info-text','VDKUs','GdHud','wLYMa','New\x20Moon'];J=function(){return v;};return J();}function toggle_moon_animation(){const r=o,h={'euEAC':function(A,g){return A-g;},'WujPt':function(A,g,Y,n){return A(g,Y,n);},'svSDc':r(0x1e6),'uYHJq':function(A,g){return A-g;},'FmWVp':function(A,g,Y,n){return A(g,Y,n);},'jVwWP':function(A,g,Y,n,B){return A(g,Y,n,B);},'pQAqt':function(A,g,Y,n){return A(g,Y,n);},'GMwKD':r(0x1c9),'SNNej':function(A,g){return A-g;},'KSmRE':'tomorrow','RJHgs':function(A,g){return A-g;},'PylDb':function(A,g,Y,n){return A(g,Y,n);},'yZqdR':function(A,g,Y,n,B){return A(g,Y,n,B);}};let E=h[r(0x279)](h['WujPt'](check_change_phase,selected_date,-0x1,h[r(0x25c)]),0x1),X=h[r(0x224)](h[r(0x214)](check_change_phase,selected_date,0x1,h[r(0x25c)]),0x1);h[r(0x22f)](check_time_moon_animation,h['svSDc'],E,X,0xa),E=h[r(0x224)](h[r(0x1c5)](check_change_phase,selected_date,-0x1,h['GMwKD']),0x1),X=h[r(0x224)](h[r(0x214)](check_change_phase,selected_date,0x1,h[r(0x24e)]),0x1),h[r(0x22f)](check_time_moon_animation,h['GMwKD'],E,X,0x5),E=h[r(0x21e)](h[r(0x1c5)](check_change_phase,selected_date,-0x1,h['KSmRE']),0x1),X=h[r(0x236)](h['PylDb'](check_change_phase,selected_date,0x1,h[r(0x26c)]),0x1),h[r(0x204)](check_time_moon_animation,h[r(0x26c)],E,X,0x5);}window['onload']=function(){const T=o,h={'GdHud':function(E){return E();}};h['GdHud'](refresh_description),h[T(0x240)](toggle_moon_animation);};