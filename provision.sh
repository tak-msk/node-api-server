# define a function that checks if a file exists
exists() { type -t "$1" > /dev/null 2>&1; }

# update packages
sudo apt-get update

# install some necessary packages
sudo apt-get install -y build-essential curl git vim

# install node (v5.x)
if ! exists node; then
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
fi
