var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_FTSalaryperEmployeeData0 = new ol.format.GeoJSON();
var features_FTSalaryperEmployeeData0 = format_FTSalaryperEmployeeData0.readFeatures(json_FTSalaryperEmployeeData0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FTSalaryperEmployeeData0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FTSalaryperEmployeeData0.addFeatures(features_FTSalaryperEmployeeData0);var lyr_FTSalaryperEmployeeData0 = new ol.layer.Vector({
                source:jsonSource_FTSalaryperEmployeeData0, 
                style: style_FTSalaryperEmployeeData0,
                title: 'FT Salary per Employee Data<br />\
        <img src="styles/legend/FTSalaryperEmployeeData0_0.png" /> Less than $35k<br />\
        <img src="styles/legend/FTSalaryperEmployeeData0_1.png" /> $35k - $40k<br />\
        <img src="styles/legend/FTSalaryperEmployeeData0_2.png" /> $41k - $45k<br />\
        <img src="styles/legend/FTSalaryperEmployeeData0_3.png" /> $46k - $49k<br />\
        <img src="styles/legend/FTSalaryperEmployeeData0_4.png" /> $50k and higher<br />'
            });

lyr_FTSalaryperEmployeeData0.setVisible(true);
var layersList = [baseLayer,lyr_FTSalaryperEmployeeData0];
lyr_FTSalaryperEmployeeData0.set('fieldAliases', {'qc_id': 'qc_id', 'city': 'City', 'province': 'Province', 'median_ft_salary': 'median_ft_salary', 'num_charities': '# of Charities', 'mlattitude': 'mlattitude', 'mlongitude': 'mlongitude', 'median full time salary': 'Median Full Time Salary', });
lyr_FTSalaryperEmployeeData0.set('fieldImages', {'qc_id': 'Hidden', 'city': 'TextEdit', 'province': 'TextEdit', 'median_ft_salary': 'Hidden', 'num_charities': 'TextEdit', 'mlattitude': 'Hidden', 'mlongitude': 'Hidden', 'median full time salary': 'TextEdit', });
lyr_FTSalaryperEmployeeData0.set('fieldLabels', {'city': 'inline label', 'province': 'inline label', 'median_ft_salary': 'no label', 'num_charities': 'inline label', 'median full time salary': 'inline label', });
lyr_FTSalaryperEmployeeData0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});