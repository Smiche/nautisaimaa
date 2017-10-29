var app = {
    // Application Constructor
    initialize: function() {
        this.receivedEvent.bind(this);
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this), false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    onDOMContentLoaded: function() {
        this.receivedEvent('DOMContentLoaded');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        if(id === "deviceready" || id === "DOMContentLoaded"){
            this.initMap();
        }
    },

    initMap: function(){
        var layers = [
  /**          new ol.layer.Tile({
              source: new ol.source.OSM()
            }), **/
            new ol.layer.Tile({
              //extent: [-13884991, 2870341, -7455066, 6338219],
              source: new ol.source.TileWMS({
                url: 'http://kartta.liikennevirasto.fi/meriliikenne/dgds/wms_ip/merikartta?',
                params: {'LAYERS': 'background,cities,cells', 'TILED': true},
                serverType: 'geoserver'
              })
            })
          ];
          var map = new ol.Map({
            layers: layers,
            target: 'map',
            view: new ol.View({
              center: ol.proj.fromLonLat([27.2789637,61.6894343]),
              zoom: 17
            })
          });
    }
};

//Map url: http://kartta.liikennevirasto.fi/meriliikenne/dgds/wms_ip/merikartta?
//layers: 'background,cities,cells'
//center: [61.6894343, 27.2789637]
app.initialize();