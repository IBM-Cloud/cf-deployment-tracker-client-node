# Overview

This is an npm module that can track and report details of a demo/tutorial that has been deployed to Cloud Foundry

# To Use

1. Add cf-deployment-tracker-client as a dependency to your `package.json`.
2. Require the package in your main entry point to your app (probably app.js).  `require("cf-deployment-tracker-client").track();`

# Example app

To see how to include this into your app please visit [Bluemix Hello World]()https://github.com/IBM-Bluemix/bluemix-hello-node.  You will want to pay attention to [package.json](https://github.com/IBM-Bluemix/bluemix-hello-node/blob/master/package.json#L9), and [server.js](https://github.com/IBM-Bluemix/bluemix-hello-node/blob/master/server.js#L15).
