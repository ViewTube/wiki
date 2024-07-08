---
order: 4
---

# Admin Panel

Visit the admin panel by clicking on your profile image and selecting "Admin panel".

![admin-panel.png](/admin-panel.png)

## Info

Information about the server and configuration. Only IP adress is shown at the moment, more coming soon.

## Users

Configure options for the instance here. Make sure to restart ViewTube after configuring these options.

### Enable public registration

If this option is disabled, the register form is hidden and registration is blocked. Accounts can only be created by the admin.

### Require login everywhere 

Makes the entire ViewTube instance private, requiring a login for every page.

::alert{type="info"}
Look for the following log messages to make sure your preferred configuration is applied.
![Log_Options.png](/Log_Options.png)
::

## Logs

View and download the log files.

![Logs.png](/Logs.png)

## Blocked videos

This option allows adding video IDs that wil be blocked. This option exists in order for public instances to respond to DMCA requests. Make sure to only add the ID of the video, not the entire URL.

If blocked, a video will show the following error when accessed.

![Copyright_block.png](/Copyright_block.png)