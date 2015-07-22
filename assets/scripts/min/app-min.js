$(function(){function t(t){$.ajax({url:"https://tide-api.herokuapp.com/"+t.coords.latitude.toFixed(2)+"N/"+t.coords.longitude.toFixed(2)+"E"}).done(function(t){$("#loading").hide(),$("#content").show(),$("#time").html(moment().format("ddd, DD MMM YYYY")),t.tides.length?t.tides.forEach(function(t){var e=$("<div>").addClass("row"),a=$("<div>").addClass("wrapper");a.append($("<div>").addClass("cell").text(t.type)),a.append($("<div>").addClass("cell").text(moment(t.time,"h:mm a").format("HH\\hmm")));var i=parseFloat(t.height).toFixed(1);a.append($("<div>").addClass("cell").text(i+"m")),e.append(a),$("#tide").append(e)}):$("#tide").append($("<div>").addClass("wrapper").text("Sorry, your location is not near a known tide station")),t.station&&($("#stationWrapper").show(),$("#station").html(t.station.location+" - "+t.station.distance+" away"))})}function e(t){switch($("#loading").hide(),$("#content").show(),t.code){case t.PERMISSION_DENIED:$("#tide").append($("<div>").addClass("wrapper").text("Location detection has been denied, please enable location services in your device settings."));break;case t.POSITION_UNAVAILABLE:$("#tide").append($("<div>").addClass("wrapper").text("Sorry, location information is unavailable at this time, please try again later."));break;case t.TIMEOUT:$("#tide").append($("<div>").addClass("wrapper").text("Sorry, we timed out trying to get your location, please try again later."));break;case t.UNKNOWN_ERROR:$("#tide").append($("<div>").addClass("wrapper").text("An unknown error occurred trying to get your location, please try again later."))}}navigator.geolocation.getCurrentPosition(t,e)});