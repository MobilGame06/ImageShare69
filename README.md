

  <h3 align="center">ImageShare69</h3>

  <p align="center">
    ImageShare69 is a selfhosted service to upload images with category and look at them sorted by category.
    <br />
    <br />
  </p>
</div>


### Features
- ✅ Upload images in any format
- ✅ Create endless categories
- ✅ Set for every image a category
- ✅ Nice Design with Bootstrap
- ✅ Dark Mode depending on system color(i hate light mode :D)
- ✅ Easy to setup

## Getting Started

### Requirements
#### Installed via Installer
* npm
* nodejs
* pm2
#### Manual installation
* mysql database

                   

### Installation
1. Use the installer to install nodejs,npm,pm2 and all dependencies for you:
                   (Tested on ubuntu 20 works on every distro with apt)
   ```sh
   curl -s -L https://raw.githubusercontent.com/MobilGame06/ImageShare69/main/install.sh | bash                                    
   ``` 
                   
  or Clone the repo
     ```
    git clone https://github.com/MobilGame06/ImageShare69.git
     ```
                   
2. Create a user account with own database in mysql and import the provided sql file([imageShare69.sql](https://github.com/MobilGame06/ImageShare69/blob/main/imageShare69.sql))

3. Install NPM packages (ONLY when not using installer)
   ```sh
   npm install
   ```
4. Enter your mysql data into `.env`
   ```env
   myHost=mysqlIP
   myUser=mysqlUser
   myPassword=mysqlPW
   myDatabase=imageShare69
   PORT=8666
   requestsperminute=30
   ```
5. Start it via pm2
   ```sh
   pm2 start server.js --name ImageShare69
   ```
   
### Usage
to add Categories and images you need to start the app.js script
```sh
node app.js
```

then follow the menu prompts.

<p align="right">(<a href="#top">back to top</a>)</p>
