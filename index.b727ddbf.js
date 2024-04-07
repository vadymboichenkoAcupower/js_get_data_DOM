var e=document.querySelectorAll(".population"),o=0;e.forEach(function(e){var r=e.innerHTML.trim();o+=parseInt(r.replace(/,/g,""),10)});var r=e.length,t=o/r;document.querySelector(".total-population").innerHTML=o.toLocaleString(),document.querySelector(".average-population").innerHTML=t.toLocaleString();
//# sourceMappingURL=index.b727ddbf.js.map
