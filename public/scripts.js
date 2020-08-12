document
    .getElementById('seek')
    .addEventListener("click",function(){
        document
        .querySelector('.form')
        .classList.toggle('hide')
        
    })


document
    .getElementById('seeknot')
    .addEventListener("click",function(){
        document
        .querySelector('.forma')
        .classList.toggle('aparecer')
        
    })

document
    .getElementById('seekdel')
    .addEventListener("click",function(){
        document
        .querySelector('.forme')
        .classList.toggle('apare')
        
    })

    var url = '/select';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) {

            var obj = JSON.parse(xhr.responseText);

            var tabela = '';
            
            tabela += "<p>"
            
            for (x = 0; x <obj.length; x++) {
                
                tabela +="<img src='1f44d.png'>"+ obj[x].nome+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
                
            }
            tabela +="</p>"

           document.getElementById('ultimo').innerHTML = tabela;


        }
    }
     xhr.send(); 


 var ur = '/count';

     var xh = new XMLHttpRequest();
     xh.open('GET', ur, true);
     xh.onreadystatechange = function() {
         
         if (xh.readyState == 4 && xh.status == 200) {
 
             var obj = JSON.parse(xh.responseText);
 
             var div = '';
             
             div += "<p>"
             
         for (x = 0; x <obj.length; x++) {
            div +=obj[x].TOTAL;
         }
                 
             
             div +="</p>"
 
            document.getElementById('total').innerHTML = div;
 
 
         }
     }
      xh.send(); 
      

