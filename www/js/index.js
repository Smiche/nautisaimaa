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
            this.initLeaflet();
        }
    },

    initLeaflet: function(){
        var map = L.map('map').setView([61.6894343, 27.2789637], 15);
        var wmsLayer = L.tileLayer.wms('http://kartta.liikennevirasto.fi/meriliikenne/dgds/wms_ip/merikartta?', {
        layers: 'background,cities,cells'
            }).addTo(map);
    }
};

app.initialize();