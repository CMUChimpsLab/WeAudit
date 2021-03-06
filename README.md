# WeAudit
Informational repository describing both the frontend and backend of the [WeAudit forum website](https://forum.weaudit.org).

WeAudit was set up as a Discourse server hosted by AWS Lightsail and Docker.
It is run on the crowdAuditsDiscourse [Lightsail instance](https://lightsail.aws.amazon.com/ls/webapp/us-east-1/instances/crowdAuditsDiscourse/connect) in the AWS Management Console on the AWS account for ChimpsLab.  

The current capacity for the server is 2 GB RAM, 1 vCPU, and 60 GB SSD. The server was created on March 24, 2022, 6:07 PM. This capacity is free for the first three months (up until June 24, 2022), and it will incur a monthly charge of $9.99 subsequently.

The IP addresses on the server include:

Public IP: `54.234.130.2`

Private IP: `172.26.4.182`

Public IPv6: `2600:1f18:251:1e00:d475:3d56:4dd3:ad7a`

The server is run under Ubuntu 20.04. SSH commands can be issued online through [here](https://lightsail.aws.amazon.com/ls/remote/us-east-1/instances/crowdAuditsDiscourse/terminal?protocol=ssh).

## Initial Setup:

Do not intend to replicate this setup. This is for informational purposes only to describe how the server was instantiated. In the SSH terminal for AWS Lightsail, type the following commands:

```
Step 0:

sudo apt update 

sudo apt upgrade -y 

Step 1:

sudo git clone https://github.com/discourse/discourse_docker.git /var/discourse
cd /var/discourse


Step 2:

sudo ./discourse-setup
```

## Editing the forum

Go to https://forum.weaudit.org

Sign into the admin account. The credentials are:
```
username: cmuweaudit
password: cmuweaudit12345
```

The admin is setup with an email account. The credentials are:
```
email address username: cmuweaudit@gmail.com
email address password: weaudit12345
```

### Admin Login

Admin login access is restricted to CMU users only. To login to the admin account, you can either connect to campus WiFi via CMU-SECURE or connect through the [campus VPN](https://www.cmu.edu/computing/services/endpoint/network-access/vpn/) through Cisco AnyConnect Secure Mobility Client.

Note that if you choose to connect to campus VPN, you must connect to the `Full VPN` group. If you connect to the `Campus VPN` group, there will be split-tunneling, and Discourse will not be able to detect that you are connected to the VPN.

To edit the website, go to the admin site once logged in.

### Technical Support

If there are any questions or difficulties regarding IP address connectivity, please direct your questions to the Help Center (it-help@andrew.cmu.edu).

The Campus IP addresses were given by Mark Poepping and Daryl Hollinger.

## Implementation

### [Editing a theme](https://forum.weaudit.org/admin/customize/themes) 

This is used for adding and modifying existing features in the Discourse template by creating a custom template with HTML/CSS

### [Restrict IP addresses for admin login](https://forum.weaudit.org/admin/logs/screened_ip_addresses)

IP addresses for admin login have been restricted to certain ranges only accessible to CMU members. To add an IP range for admins to login, add the IP address and classify it as `Allow Admin`. Below is a list of the current allowed IP address ranges.

* WiFi:
  * CMU-SECURE: `172.26.0.0/17`
  * CMU-DEVICE: `172.26.192.0/18`
* Campus VPN:
  * BORDER-GENERAL: `172.31.64.0/20`
  * BORDER-FULL: `172.31.56.0/21`
* Wired:
  * `128.2.0.0/16`
  * `128.237.0.0/16`

### Security

#### Preventing User Spam for Sign-Up

* ReCAPTCHA
  * Initially, this was attempted, but there is no native ReCAPTCHA support on Discourse. Therefore, we would need to create our own plugin for ReCAPTCHA, which may be a bit hairy of an implementation detail. Thus, there were some alternatives below.
* Google and Facebook Sign-Up
  * Users can now sign up for new accounts on Discourse with a Google or Facebook login. Users can customize their usernames on the platform for remaining anonymous. This process is done via OAuth2.
  * The Google Cloud Platform account and Facebook Developers account that manage these plugins are under the account name, `cmuweaudit@gmail.com`. The password is the same as before, `cmuweaudit12345`.

#### Enabling Email and Mail Permissions on Discourse

This procedure is needed for email sign-up, but since we are directing sign-ups to be from Google and Facebook, this procedure is no longer needed.

However, if we do decide to use this procedure, we must integrate a Mail API using one of the platforms linked [here](https://github.com/discourse/discourse/blob/main/docs/INSTALL-email.md). These services will incur an additional monthly charge.



## Plans

Because we own the weaudit.org domain, https://weaudit.org can be an informational page that describes the purposes of our project while https://forum.weaudit.org is our primary discussion forum.

[Spreadsheet of Progress Link](https://docs.google.com/spreadsheets/d/1_fKQ28U5SxLMANW9wGegWib_JvO1uIWbCu94F2Vklzc/edit?usp=sharing)
