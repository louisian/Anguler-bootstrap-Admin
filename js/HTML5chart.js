
    var chart = new CanvasJS.Chart("chartContainer", {

      title:{
        text: "Fruits sold in First Quarter"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         { label: "banana", y: 18 },
         { label: "orange", y: 29 },
         { label: "apple", y: 40 },                                    
         { label: "mango", y: 34 },
         { label: "grape", y: 24 }
         ]
       }
       ]
     });

    chart.render();


 var chart = new CanvasJS.Chart("chartContainer2",
    {

      title:{
      text: "Earthquakes - per month"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2012, 00, 1), y: 450 },
        { x: new Date(2012, 01, 1), y: 414 },
        { x: new Date(2012, 02, 1), y: 520 },
        { x: new Date(2012, 03, 1), y: 460 },
        { x: new Date(2012, 04, 1), y: 450 },
        { x: new Date(2012, 05, 1), y: 500 },
        { x: new Date(2012, 06, 1), y: 480 },
        { x: new Date(2012, 07, 1), y: 480 },
        { x: new Date(2012, 08, 1), y: 410 },
        { x: new Date(2012, 09, 1), y: 500 },
        { x: new Date(2012, 10, 1), y: 480 },
        { x: new Date(2012, 11, 1), y: 510 }
        ]
      }
      ]
    });

    chart.render();
	
	
	 var chart = new CanvasJS.Chart("chartContainer3",
    {
      title:{
        text: "Gaming Consoles Sold in 2012"
      },
       data: [
      {
         type: "pie",
       showInLegend: true,
       dataPoints: [
       {  y: 4181563, legendText:"PS 3", indexLabel: "PlayStation 3" },
       {  y: 2175498, legendText:"Wii", indexLabel: "Wii" },
       {  y: 3125844, legendText:"Xbox", indexLabel: "Xbox 360" },
       {  y: 1176121, legendText:"DS" , indexLabel: "Nintendo DS"},
       {  y: 1727161, legendText:"PSP", indexLabel: "PSP" },
       {  y: 4303364, legendText:"3DS" , indexLabel: "Nintendo 3DS"},
       {  y: 1717786, legendText:"Vita" , indexLabel: "PS Vita"}
       ]
     }
     ]
   });

    chart.render();