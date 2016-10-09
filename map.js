console.log("Here");

var states = ['american_samoa.kml', 'nevada.kml', 'arizona.kml', 'wisconsin.kml', 'commonwealth_of_the_northern_mariana_islands.kml', 'georgia.kml', 'virgin_islands_of_the_united_states.kml', 'kansas.kml', 'connecticut.kml', 'indiana.kml', 'maine.kml', 'massachusetts.kml', 'montana.kml', 'maryland.kml', 'arkansas.kml', 'alabama.kml', 'virginia.kml', 'nebraska.kml', 'guam.kml', 'kentucky.kml', 'new_york.kml', 'colorado.kml', 'vermont.kml', 'south_dakota.kml', 'michigan.kml', 'missouri.kml', 'hawaii.kml', 'puerto_rico.kml', 'north_carolina.kml', 'rhode_island.kml', 'idaho.kml', 'delaware.kml', 'district_of_columbia.kml', 'new_hampshire.kml', 'minnesota.kml', 'north_dakota.kml', 'oklahoma.kml', 'alaska.kml', 'iowa.kml', 'tennessee.kml', 'florida.kml', 'louisiana.kml', 'new_mexico.kml', 'wyoming.kml', 'pennsylvania.kml', 'south_carolina.kml', 'utah.kml', 'west_virginia.kml', 'washington.kml', 'mississippi.kml', 'oregon.kml', 'illinois.kml', 'new_jersey.kml', 'california.kml', 'ohio.kml', 'texas.kml'];

var states = ['arizona.kml'];
function initMap() {
    console.log("Initializing map");
    var initialPos = {lat:-25.363,lng: 131.044  };
    var map = new google.maps.Map(document.getElementById('map'),
            {
                zoom : 4,
                center : initialPos
            });
        kmlLayer = new google.maps.KmlLayer({
            url : "https://raw.githubusercontent.com/analyst1001/DataDump/master/data/us_states_processes.kml",
            map : map
        });
        console.log(kmlLayer);
}

