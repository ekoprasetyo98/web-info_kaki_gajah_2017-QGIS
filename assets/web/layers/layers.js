ol.proj.get("EPSG:4326").setExtent([110.340981, -7.147905, 110.997918, -6.694570]);
var wms_layers = [];
var format_uas_0 = new ol.format.GeoJSON();
var features_uas_0 = format_uas_0.readFeatures(json_uas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_uas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uas_0.addFeatures(features_uas_0);var lyr_uas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uas_0, 
                style: style_uas_0,
    title: 'uas<br />\
    <img src="styles/legend/uas_0_0.png" /> siaga<br />\
    <img src="styles/legend/uas_0_1.png" /> waspada<br />\
    <img src="styles/legend/uas_0_2.png" /> bahaya<br />\
    <img src="styles/legend/uas_0_3.png" /> darurat<br />'
        });

lyr_uas_0.setVisible(true);
var layersList = [lyr_uas_0];
lyr_uas_0.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Terjangkit': 'Terjangkit', 'Perawatan': 'Perawatan', 'Sembuh': 'Sembuh', });
lyr_uas_0.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Terjangkit': 'TextEdit', 'Perawatan': 'TextEdit', 'Sembuh': 'TextEdit', });
lyr_uas_0.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Terjangkit': 'inline label', 'Perawatan': 'inline label', 'Sembuh': 'inline label', });
lyr_uas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});