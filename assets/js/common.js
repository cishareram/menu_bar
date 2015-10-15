$(document).ready(function(){
    $('li').click(function() {
	$( "#show_dialog" ).dialog({
	    height:500,
	    width:800,
	    buttons: {
	      "Load": function() {
		var thisObj 	= $(this);
		var url 	= thisObj.data('url');
		var folder_name = document.getElementById('folder_name').value;
		var action	= 'load';
		var dataString	= 'folder_name='+ folder_name +'&action='+ action;
		$.ajax({
                    url: url,
		    data: dataString,
                    type: 'POST',
                    success: function(data) {
			console.log(data);
			$("#show_files").html(data);
                    },
		});
	      },
	      Cancel: function() {
		$( this ).dialog( "close" );
	      }
	    }
	});
    });
    
    $('#start').click(function() {
	flag = 1;
	if( $('#showMenu').is(":visible") )
	{
	    $('#showMenu').hide(); 
	}
	else
	{
	    $('#showMenu').show();
	}
    });
    
    $(document).click(function() {
	if(flag)
	{
	    flag = 0;
	}
	else
	{
	    $('#showMenu').hide();
        }
    });
});