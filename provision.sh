# define a function that checks if a file exists
exists() { type -t "$1" > /dev/null 2>&1; }

# update packages
sudo apt-get update

# install dependencies of linuxbrew
sudo apt-get install -y build-essential curl git python-setuptools ruby

# install node (nodebrew -> node v5.10.0)
if ! exists node; then
  curl -L git.io/nodebrew | perl - setup

  ## set envval to .bashrc
  cat << '__EOF__' > ~/.bashrc
  export PATH=$HOME/.nodebrew/current/bin:$PATH
  __EOF__

  source ~/.bashrc

  nodebrew install-binary v5.10.0
  nodebrew use v5.10.0
fi
