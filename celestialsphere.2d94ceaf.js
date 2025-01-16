document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("celestialSphere"),t=e.getContext("2d");function n(){let n=e.offsetWidth,i=e.offsetHeight;e.width=n*window.devicePixelRatio,e.height=i*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}n(),window.addEventListener("resize",function(){n(),s()});let i=document.getElementById("raSlider"),o=document.getElementById("decSlider"),l=document.getElementById("raValue"),d=document.getElementById("decValue");function a(e){return e*Math.PI/180}function c(e,t){let n=a(e),i=a(t);return{x:200*Math.cos(i)*Math.cos(n),y:200*Math.cos(i)*Math.sin(n),z:200*Math.sin(i)}}function r(e,t){let n=a(t),{x:i,y:o,z:l}=e,d=Math.cos(n),c=Math.sin(n);return{x:i,y:o*d-l*c,z:o*c+l*d}}function u(e){return function(e,t){let n=a(-20),{x:i,y:o,z:l}=e,d=Math.cos(n),c=Math.sin(n);return{x:i*d+l*c,y:o,z:-i*c+l*d}}(r(e,70),0)}function h(t){let{x:n,y:i,z:o}=t,l=o- -600,d=400/(l>1?l:1),a={x:e.width/(2*window.devicePixelRatio),y:e.height/(2*window.devicePixelRatio)};return{X:a.x+(n-0)*d,Y:a.y-(i-0)*d}}function f(e,n,i=1){t.beginPath();for(let n=0;n<e.length;n++){let i=h(e[n]);0===n?t.moveTo(i.X,i.Y):t.lineTo(i.X,i.Y)}t.strokeStyle=n,t.lineWidth=i,t.stroke()}function s(){t.clearRect(0,0,e.width,e.height),function(){for(let e=-75;e<=75;e+=15){let t=[];for(let n=0;n<=360;n+=5)t.push(c(n,e));f(t.map(u),"#888",1)}for(let e=0;e<360;e+=15){let t=[];for(let n=-90;n<=90;n+=5)t.push(c(e,n));f(t.map(u),"#888",1)}}(),function(){let e=[];for(let t=0;t<=360;t+=5)e.push(c(t,0));f(e.map(u),"green",2)}(),function(){let e=[];for(let t=0;t<=360;t+=5){let n=u(r(c(t,0),23.4));e.push(n)}f(e,"red",2)}(),function(){let e=parseFloat(i.value),n=parseFloat(o.value);l.textContent=e+"°",d.textContent=n+"°";let a=c(e,n),r=h(a=u(a));t.beginPath(),t.arc(r.X,r.Y,5,0,2*Math.PI),t.fillStyle="gold",t.fill()}()}i.addEventListener("input",s),o.addEventListener("input",s),s()});
//# sourceMappingURL=celestialsphere.2d94ceaf.js.map
