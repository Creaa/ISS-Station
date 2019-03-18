(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(t,e,a){},180:function(t,e,a){},181:function(t,e,a){},182:function(t,e,a){"use strict";a.r(e);var n=a(5),i=a.n(n),s=a(82),o=a.n(s),c=(a(179),a(29)),r=a(30),l=a(32),u=a(31),d=a(33),p=(a(180),a(83)),m=a.n(p),h=a(84),f=a.n(h),g=(a(181),function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"planet-box"},i.a.createElement("img",{src:m.a,alt:"planet earth",style:{marginLeft:"calc(-105% + ".concat(-.55*this.props.longitude,"%)")},className:"planet"}),i.a.createElement("img",{src:f.a,style:{top:"calc(50% + ".concat(this.props.latitude/-1.8,"%)")},className:"station",alt:"iss-station"}),i.a.createElement("div",{className:"planet-shadow"})))}}]),e}(n.Component)),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=function(){console.log(a.state.distance),setInterval(function(){a.fetchData()},1e3)},a.fetchData=function(){fetch("http://api.open-notify.org/iss-now.json?callback").then(function(t){return t.json()}).then(function(t){return a.setStationInfo(t)})},a.setStationInfo=function(t){var e=parseFloat(t.iss_position.latitude).toFixed(2),n=parseFloat(t.iss_position.longitude).toFixed(2);a.setState({currentTime:a.setTime(t),stationSpeed:a.setVelocity(t),latitude:e,longitude:n,distance:a.setDistance(t)})},a.setVelocity=function(t){if(a.state.latitude&&a.state.longitude){var e=parseFloat(t.iss_position.longitude-a.state.longitude).toFixed(2)*Math.cos(t.iss_position.latitude*Math.PI/180),n=parseFloat(a.state.latitude-t.iss_position.latitude).toFixed(2),i=Math.sqrt(e*e+n*n)*Math.PI*12756.274/360*3600;return parseInt(i)}},a.setDistance=function(t){if(a.state.latitude&&a.state.longitude){console.log(a.state.distance);var e=parseFloat(t.iss_position.latitude-a.state.latitude).toFixed(2),n=parseFloat(t.iss_position.longitude-a.state.longitude).toFixed(2);e=Math.abs(e),n=Math.abs(n);var i=parseInt(1.1*(100*n+100*e));return i+=a.state.distance}return 0},a.setTime=function(t){var e=new Date(1e3*t.timestamp);return e=e.toLocaleString()},a.state={distance:5},a}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"station-info"},i.a.createElement("span",{className:"distance meter"},this.state.distance," KM"),i.a.createElement("span",{className:"speed meter"},this.state.stationSpeed," KM/H")),i.a.createElement("span",{className:"date"},this.state.currentTime),i.a.createElement(g,{latitude:this.state.latitude,longitude:this.state.longitude}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},83:function(t,e,a){t.exports=a.p+"static/media/earth-map.6dd445da.svg"},84:function(t,e,a){t.exports=a.p+"static/media/station.520a24fc.png"},85:function(t,e,a){t.exports=a(182)}},[[85,1,2]]]);
//# sourceMappingURL=main.815cf06b.chunk.js.map