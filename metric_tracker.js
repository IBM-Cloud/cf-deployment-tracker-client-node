var yaml = require('js-yaml');
var fs   = require('fs');


module.exports = {
	getJson: function(){
		return getjson();
	},

	massage: function(data,cfData){
		return combineData(data,cfData);
	}

};

//Reformat the data into one Json
function combineData(data,cfData){
	try{
	cfData.config = {};
	if(data.id) cfData.config.repository_id = data.id; else cfData.config.repository_id = "";
	if(data.runtimes) cfData.config.target_runtimes = data.runtimes; else cfData.config.target_runtimes = "";
	if(data.services) cfData.config.target_services = data.services; else cfData.config.target_services = "";
	if(data.event_id) cfData.config.event_id = data.event_id; else cfData.config.event_id = "";
	if(data.deploy_to_bluemix) cfData.config.deploy_to_bluemix = data.deploy_to_bluemix; else cfData.config.deploy_to_bluemix = "";
	if(data.event_organizer) cfData.config.event_organizer = data.event_organizer; else cfData.config.event_organizer = "";
	return cfData;
	}catch(ex){
		return cfData;
	}
}


function getjson(){
	var pkg = null;
	try {
        pkg = yaml.safeLoad(fs.readFileSync('repository.yaml', 'utf8'));
    }
    catch(ex) {
        console.log("repository.config could not be loaded from the fs");
    }
	return pkg;
}