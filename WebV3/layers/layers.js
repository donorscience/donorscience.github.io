var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Thunderforest Landscape',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
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
            });var format_gpr_000b11a_eepsg38571 = new ol.format.GeoJSON();
var features_gpr_000b11a_eepsg38571 = format_gpr_000b11a_eepsg38571.readFeatures(json_gpr_000b11a_eepsg38571, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gpr_000b11a_eepsg38571 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_gpr_000b11a_eepsg38571.addFeatures(features_gpr_000b11a_eepsg38571);var lyr_gpr_000b11a_eepsg38571 = new ol.layer.Vector({
                source:jsonSource_gpr_000b11a_eepsg38571, 
                style: style_gpr_000b11a_eepsg38571,
                title: '<img src="styles/legend/gpr_000b11a_eepsg38571.png" /> gpr_000b11a_e epsg3857'
            });

lyr_FTSalaryperEmployeeData0.setVisible(true);lyr_gpr_000b11a_eepsg38571.setVisible(false);
var layersList = [baseLayer,lyr_FTSalaryperEmployeeData0,lyr_gpr_000b11a_eepsg38571];
lyr_FTSalaryperEmployeeData0.set('fieldAliases', {'City': 'City', 'Province': 'Province', 'median_ft_salary': 'median_ft_salary', 'num_charities': '# of Charities', 'mlattitude': 'mlattitude', 'mlongitude': 'mlongitude', 'Median Full Time Salary': 'Median Full Time Salary', });
lyr_gpr_000b11a_eepsg38571.set('fieldAliases', {'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', });
lyr_FTSalaryperEmployeeData0.set('fieldImages', {'City': 'TextEdit', 'Province': 'TextEdit', 'median_ft_salary': 'Hidden', 'num_charities': 'TextEdit', 'mlattitude': 'Hidden', 'mlongitude': 'Hidden', 'Median Full Time Salary': 'TextEdit', });
lyr_gpr_000b11a_eepsg38571.set('fieldImages', {'PRUID': 'Hidden', 'PRNAME': 'Hidden', 'PRENAME': 'Hidden', 'PRFNAME': 'Hidden', 'PREABBR': 'Hidden', 'PRFABBR': 'Hidden', });
lyr_FTSalaryperEmployeeData0.set('fieldLabels', {'City': 'inline label', 'Province': 'inline label',  'num_charities': 'inline label', 'Median Full Time Salary': 'inline label', });
lyr_gpr_000b11a_eepsg38571.set('fieldLabels', {});
lyr_gpr_000b11a_eepsg38571.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});