var toc=document.getElementById("toc"),tocToggle=toc.querySelector("h2"),tocNav=toc.querySelector("nav");tocToggle.onclick=function(t){if(window.innerWidth<1024){var e=tocNav.currentStyle?tocNav.currentStyle.display:getComputedStyle(tocNav,null).display;tocNav.style.display="none"==e?"block":"none"}},tocNav.addEventListener("click",(function(t){if(t.preventDefault(),"A"==t.target.nodeName){window.innerWidth<1024&&(tocNav.style.display="none");var e=t.target.getAttribute("href"),o=e.substr(1);document.getElementById(o).scrollIntoView(!0),window.history.pushState("","",e)}})),window.onresize=function(){tocNav.style.display=window.innerWidth<1024?"none":"block"};