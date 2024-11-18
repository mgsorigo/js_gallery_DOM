var e=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(t){t.preventDefault();var r=t.target;if("IMG"===r.tagName){var a=r.parentElement;a&&"A"===a.tagName&&(e.src=a.href)}else"A"===r.tagName&&(e.src=r.href)});
//# sourceMappingURL=index.60cadc6b.js.map
