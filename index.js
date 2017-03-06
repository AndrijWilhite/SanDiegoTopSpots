$(document).ready(function() {


  $.getJSON('topspots.json', function(data) {

            $.each(data, function(i, dataItem){

                $('#hotTable').append(

                                 "<tr>"+
                                            "<td>"+dataItem.name+"</td>"+
                                            "<td>"+dataItem.description+"</td>"+
                                            "<td><a href='https://www.google.com/maps?q='"+ dataItem.location + ">Click Me</a></td>"+
                                        "<tr>"

                            );

                })
        });
});
