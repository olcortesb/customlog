# customlog
Custom Log Class For Node JS 

# Example:

```javascript
var CustomLog = require('./customlog');

var clogExample = new utils.CustomLogs("Text Example",process.env.STAGE,process.env.VERSION);

//Log Info
clogExample.logInfo("Info Log sample","variable");

//Log Error
clogExample.logError("Error Log sample","variable");

//Log Request
clogExample.logRequest("Request Log sample","variable");


//Log Response
clogExample.logResponse("Response Log sample","variable");

```




