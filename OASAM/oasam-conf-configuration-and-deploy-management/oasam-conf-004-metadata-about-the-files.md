
# ASAM-CONF-004: Metadata about the files

## escription:
At this stage, an attacker will examine metadata from the files included in the application in order to search useful information during the penetration attack.
In the case of Android, these files are found in the APK file structure.

## isks:
Depending on the information stored in the metadata, the risk can vary greatly. The typical metadata that can be found in the android application files is that related to the images contained within the applications.


## ecommendations:
It is recommended to remove metadata from the files included in the application in order not to provide unnecessary information. There are Open-source tools that allow removing metadata in many different formats; for example, Exiftool.


## eferences:
1. http://www.exif.org/specifications.html

2. http://www.sno.phy.queensu.ca/~phil/exiftool/
