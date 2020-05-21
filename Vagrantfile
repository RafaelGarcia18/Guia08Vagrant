
  Vagrant.configure("2") do |config|
    config.vm.box = "debian/buster64"
    config.vm.network "forwarded_port", guest: 80, host: 8080
    config.vm.synced_folder "pagina", "/vagrant"
  $script = <<-SCRIPT
   sudo apt-get update;
   sudo apt-get install -y apache2;
   rm /var/www/html/index.html
   ln /vagrant/index.html /var/www/html
   ln /vagrant/estilo.css /var/www/html
   ln /vagrant/funcionabilidad.js /var/www/html;
  SCRIPT
    config.vm.provision "shell", inline: $script
  end
