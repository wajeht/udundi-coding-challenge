<p align="center"><img src="https://raw.githubusercontent.com/wajeht/udundi-coding-challenge/master/src/img/screenshot_index.png" width="50%%"><img src="https://raw.githubusercontent.com/wajeht/udundi-coding-challenge/master/src/img/screenshot_card.png" width="50%"></p>

# <p align="center">udundi-coding-challenge</p>

# Prerequisites

Install docker on your systems. Visit official site at https://www.docker.com/ for more information. Follow proper instruction for your own systems.

# Configuration
If you're deploying it into a server, make sure to edit `nginx.conf` file within this project.
# Development

1. Open up terminal and type in the following command to clone this project repository.

    ```
    git clone https://github.com/wajeht/udundi-coding-challenge.git
    ```

2. After cloning this project repository, get inside this project folder by typing the following command.

    ```
    cd udundi-coding-challenge
    ```

3. After we are inside `'udundi-coding-challenge` folder, type in just one command and it will open open up a browser at `http:localhost:3000`.

    ```
    make
    ```

# `make` commands

Available `make` commands are as follows:

1. The following command will build docker image

    ```bash
	make build
    ```

2. The following command will start docker container with the image built above
    ```
	make run
    ```

3. The following command will open up a browser at `http://localhost:8080` 
    ```
	make visit
    ```

4. The following command will stop the docker container if it is running. 
    ```
	make stop
    ```

4. The following command will delete the docker container if it has been build 
    ```
	make clean
    ```
# Contribute

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# License

Distributed under the MIT License © [wajeht](https://www.github.com/wajeht/). See LICENSE for more information.
