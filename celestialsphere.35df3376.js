function e(e){let t=document.querySelector(`#${e}`);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}function t(e){let t=["one-celestial","two-celestial","three-celestial","four-celestial"],n=t.indexOf(e);return -1!==n&&n<t.length-1?t[n+1]:null}function n(n){e(t(n.closest(".slide").id))}document.querySelectorAll(".scroll-button").forEach(e=>{e.addEventListener("click",function(){n(e)})}),document.addEventListener("keydown",function(n){let o=document.elementFromPoint(window.innerWidth/2,window.innerHeight/2).closest(".slide");if(o){let l=o.id;"ArrowDown"===n.key?e(t(l)):"ArrowUp"===n.key&&e(function(e){let t=["one-celestial","two-celestial","three-celestial","four-celestial"],n=t.indexOf(e);return n>0?t[n-1]:null}(l))}}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".scroll-button").forEach(e=>{e.addEventListener("click",()=>{n(e)})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("side-menu"),t=document.getElementById("drpicon");document.getElementById("close-menu"),t.addEventListener("click",function(){e.classList.toggle("hidden")}),document.addEventListener("click",n=>{e.contains(n.target)||t.contains(n.target)||e.classList.contains("hidden")||e.classList.add("hidden")})});
//# sourceMappingURL=celestialsphere.35df3376.js.map