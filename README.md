# Production Support Project 2
## Add psutil
` yum install gcc python-devel `

`yum install python-pip`

`pip install psutil`

##### Note: psutil is used to get current usage and memory consumption.
Implement these methods in djangobin/views.py to avoid using psutil
##### End Note

## Start the webservice
`python manage.py migrate`

`python manage.py runserver`

## Open Google chrome and disable CORS
`google-chrome --disable-web-security`

#### Or Alternatively
Install CORS Unblock on [Chrome](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cors-unblock/) 


## Open index.html
Ta-da! The charts should update every minute. Don't want to wait that long? press button above chart to update now!


### Updates
* Changed chart colors, linewidth and point radius
* Charts update every minute
* CPU usage and Memory consumption are not random anymore!
* Limited maximum no. of labels on x-axis to 5 to avoid crowding. Data labels are still visible on hovering
* Labels are current datetime displayed in `HH:MM:SS` format
 
