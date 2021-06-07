(function (document) {
   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', pageLoaded)
   } else {
     pageLoaded()
   }

   function pageLoaded() {
     var menu = document.getElementById('menu')
     var hamburger = document.getElementById('hamburger')

     menu.addEventListener('click', function (e) {
       if (e.target.nodeName !== 'A') {
         return
       }

       hamburger.checked = false
     })
   }

})(document)