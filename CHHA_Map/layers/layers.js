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
var format_HearingLossPrevalencebyDisseminationArea_0 = new ol.format.GeoJSON();
var features_HearingLossPrevalencebyDisseminationArea_0 = format_HearingLossPrevalencebyDisseminationArea_0.readFeatures(json_HearingLossPrevalencebyDisseminationArea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HearingLossPrevalencebyDisseminationArea_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HearingLossPrevalencebyDisseminationArea_0.addFeatures(features_HearingLossPrevalencebyDisseminationArea_0);var lyr_HearingLossPrevalencebyDisseminationArea_0 = new ol.layer.Vector({
                source:jsonSource_HearingLossPrevalencebyDisseminationArea_0, 
                style: style_HearingLossPrevalencebyDisseminationArea_0,
                title: 'Hearing Loss Prevalence by Dissemination Area<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_0.png" /> 0 - 5%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_1.png" /> 6 - 11%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_2.png" /> 12 - 16%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_3.png" /> 17 - 22%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_4.png" /> 23 - 28%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_5.png" /> 29 - 34%<br />\
        <img src="styles/legend/HearingLossPrevalencebyDisseminationArea_0_6.png" /> 34 - 40%<br />'
            });var format_OreSites_1 = new ol.format.GeoJSON();
var features_OreSites_1 = format_OreSites_1.readFeatures(json_OreSites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OreSites_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OreSites_1.addFeatures(features_OreSites_1);var lyr_OreSites_1 = new ol.layer.Vector({
                source:jsonSource_OreSites_1, 
                style: style_OreSites_1,
                title: '<img src="styles/legend/OreSites_1.png" /> Ore Sites'
            });var format_PetroleumWells_2 = new ol.format.GeoJSON();
var features_PetroleumWells_2 = format_PetroleumWells_2.readFeatures(json_PetroleumWells_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetroleumWells_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetroleumWells_2.addFeatures(features_PetroleumWells_2);var lyr_PetroleumWells_2 = new ol.layer.Vector({
                source:jsonSource_PetroleumWells_2, 
                style: style_PetroleumWells_2,
                title: '<img src="styles/legend/PetroleumWells_2.png" /> Petroleum Wells'
            });

lyr_HearingLossPrevalencebyDisseminationArea_0.setVisible(true);lyr_OreSites_1.setVisible(true);lyr_PetroleumWells_2.setVisible(true);
var layersList = [baseLayer,lyr_HearingLossPrevalencebyDisseminationArea_0,lyr_OreSites_1,lyr_PetroleumWells_2];
lyr_HearingLossPrevalencebyDisseminationArea_0.set('fieldAliases', {'DAUID': 'DAUID', 'CDUID': 'CDUID', 'CDNAME': 'CDNAME', 'CDTYPE': 'CDTYPE', 'CSDUID': 'CSDUID', 'CSDNAME': 'CSDNAME', 'CSDTYPE': 'CSDTYPE', 'CCSUID': 'CCSUID', 'CCSNAME': 'CCSNAME', 'ERUID': 'ERUID', 'ERNAME': 'ERNAME', 'CMAPUID': 'CMAPUID', 'CMAUID': 'CMAUID', 'CMANAME': 'CMANAME', 'CMATYPE': 'CMATYPE', 'SACCODE': 'SACCODE', 'SACTYPE': 'SACTYPE', 'CTUID': 'CTUID', 'CTNAME': 'CTNAME', 'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'Top5_Poor': 'Top5_Poor', 'Top5_Rich': 'Top5_Rich', 'CHHA_Hearingloss_Prevs_final (1)_HLoss_Prev': 'CHHA_Hearingloss_Prevs_final (1)_HLoss_Prev', });
lyr_OreSites_1.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'UID': 'UID', });
lyr_PetroleumWells_2.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', });
lyr_HearingLossPrevalencebyDisseminationArea_0.set('fieldImages', {'DAUID': 'TextEdit', 'CDUID': 'TextEdit', 'CDNAME': 'TextEdit', 'CDTYPE': 'TextEdit', 'CSDUID': 'TextEdit', 'CSDNAME': 'TextEdit', 'CSDTYPE': 'TextEdit', 'CCSUID': 'TextEdit', 'CCSNAME': 'TextEdit', 'ERUID': 'TextEdit', 'ERNAME': 'TextEdit', 'CMAPUID': 'TextEdit', 'CMAUID': 'TextEdit', 'CMANAME': 'TextEdit', 'CMATYPE': 'TextEdit', 'SACCODE': 'TextEdit', 'SACTYPE': 'TextEdit', 'CTUID': 'TextEdit', 'CTNAME': 'TextEdit', 'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'Top5_Poor': 'TextEdit', 'Top5_Rich': 'TextEdit', 'CHHA_Hearingloss_Prevs_final (1)_HLoss_Prev': 'TextEdit', });
lyr_OreSites_1.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'UID': 'TextEdit', });
lyr_PetroleumWells_2.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'map_sel': 'TextEdit', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', });
lyr_HearingLossPrevalencebyDisseminationArea_0.set('fieldLabels', {'DAUID': 'no label', 'CDUID': 'no label', 'CDNAME': 'no label', 'CDTYPE': 'no label', 'CSDUID': 'no label', 'CSDNAME': 'no label', 'CSDTYPE': 'no label', 'CCSUID': 'no label', 'CCSNAME': 'no label', 'ERUID': 'no label', 'ERNAME': 'no label', 'CMAPUID': 'no label', 'CMAUID': 'no label', 'CMANAME': 'no label', 'CMATYPE': 'no label', 'SACCODE': 'no label', 'SACTYPE': 'no label', 'CTUID': 'no label', 'CTNAME': 'no label', 'PRUID': 'no label', 'PRNAME': 'no label', 'Top5_Poor': 'no label', 'Top5_Rich': 'no label', 'CHHA_Hearingloss_Prevs_final (1)_HLoss_Prev': 'no label', });
lyr_OreSites_1.set('fieldLabels', {'MEAN_X': 'no label', 'MEAN_Y': 'no label', 'UID': 'no label', });
lyr_PetroleumWells_2.set('fieldLabels', {'feature_id': 'no label', 'datemin': 'no label', 'datemax': 'no label', 'haccmin': 'no label', 'haccmax': 'no label', 'map_sel': 'no label', 'map_sel_en': 'no label', 'map_sel_fr': 'no label', });
lyr_PetroleumWells_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_PetroleumWells_2.on("postcompose", update);

    var listenerKey = lyr_PetroleumWells_2.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });