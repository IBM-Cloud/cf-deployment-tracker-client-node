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

function combineData(data,cfData){
	try{
	cfData.config = {};
	cfData.config.repository_id = data.id;
	cfData.config.target_runtimes = data.runtimes;
	cfData.config.target_services = data.services;
	cfData.config.event_id = data.event_id;
	cfData.config.deploy_to_bluemix = data.deploy_to_bluemix;
	return cfData;
	}catch(ex){
		return cfData;
	}
}


function getjson(){
	var pkg = null;
	try {
        pkg = yaml.safeLoad(fs.readFileSync('repository.config', 'utf8'));
    }
    catch(ex) {
        console.log("repository.config could not be loaded from the fs");
    }
	return pkg;
}