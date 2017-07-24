function getTriangleArea(a,h) {
   if (a <= 0){
     return 'Nieprawidłowe dane';
   } else if (h <= 0) {
     return 'Nieprawidłowe dane';
   } else {
     return 'TriangleArea: ' +a*h/2;
    }     
 }
 
 
 getTriangleArea ();
 
 var getTriangle1Area = getTriangleArea(-10,6);
 var getTriangle2Area = getTriangleArea(2,-8);
 var getTriangle3Area = getTriangleArea(4,5);
 
 getTriangleArea ();
 
 console.log(getTriangle1Area);
 console.log(getTriangle2Area);
 console.log(getTriangle3Area); 

