export let leaflet = (()=>{
    var map = L.map('map').setView([54.1528536, -4.5314269], 14);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXV4IiwiYSI6ImNrOHVmandpeDA3ODAzbmsyNDJjdWprejgifQ.zHLtDqxE67DZdLpA8jI2Rg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 6,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

var marker = L.marker([54.1528536, -4.5314269]).addTo(map);
})