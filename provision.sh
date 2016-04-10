# define a function that checks if a file exists
exists() { type -t "$1" > /dev/null 2>&1; }

# Import the public key used by the package management system
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

# Create a list file for MongoDB
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

# update packages
sudo apt-get update

# install some necessary packages
sudo apt-get install -y build-essential curl git vim

# install node (v5.x)
if ! exists node; then
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
fi

# install mongodb (v3.2.4)
if ! exists mongo; then
sudo apt-get install -y mongodb-org=3.2.4 mongodb-org-server=3.2.4 mongodb-org-shell=3.2.4 mongodb-org-mongos=3.2.4 mongodb-org-tools=3.2.4
sudo mkdir -p /data/db
fi

# install pm2 (node process manager)
if ! exists pm2; then
npm install pm2 -g
fi