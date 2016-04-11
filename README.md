# node-rest-api
Sample node REST API from scratch

## Dependencies
### OS Setup
- VirtualBox - 5.0.4
- Vagrant - 1.8.1
- Packer - 0.8.6
- Ubuntu - ~~15.10~~ -> 14.04 (using [boxcutter](https://github.com/tak-msk/ubuntu))
  - Because of waiting for getting [this](https://github.com/mitchellh/vagrant/pull/6724) merged, we use 14.04 instead

### Other
- [Node.js](https://github.com/nodesource/distributions#deb) - 5.10.0
- npm - 3.8.3
- [pm2](https://github.com/Unitech/pm2) - 1.1.1
- MongoDB - 3.2.4

## How it works
Get a box of Ubuntu 14.04 using boxcutter, then add it to vagrant at first.
```
packer build -only=virtualbox-iso -var-file=ubuntu1404.json ubuntu.json

vagrant box add ubuntu1404 /path/your/boxfile
```

Then run vagrant.
```
vagrant up --provision

--- Some tasks ran, then ---
==> default: [PM2] Spawning PM2 daemon
==> default: [PM2] PM2 Successfully daemonized
==> default: [PM2] Starting /home/vagrant/data/server.js in fork_mode (1 instance)
==> default: [PM2] Done.
==> default: ┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────────────┬──────────┐
==> default: │ App name │ id │ mode │ pid  │ status │ restart │ uptime │ memory      │ watching │
==> default: ├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────────────┼──────────┤
==> default: │ server   │ 0  │ fork │ 1503 │ online │ 0       │ 0s     │ 20.922 MB   │ disabled │
==> default: └──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────────────┴──────────┘
==> default:  Use `pm2 show <id|name>` to get more details about an app
```

Now you can see API server is running here.
```
http://localhost:3000/api
```
