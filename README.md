<p align="center"><img src="https://raw.githubusercontent.com/wajeht/udundi-coding-challenge/master/src/img/screenshot_index.png" width="40%%"><img src="https://raw.githubusercontent.com/wajeht/udundi-coding-challenge/master/src/img/screenshot_card.png" width="40%"></p>

# <p align="center">udundi-coding-challenge</p>

<p align="center">A Fond-end Web Developer coding challenge for Udundi</p>

# ⚠️ Depreciated

This codebase is no longer actively maintained. The package will continue working, but support and changes are no longer provided.

# ⌛ Time

I'd received the challenge on Friday. I started working it on Friday at 8pm to 12am. This project took me roughly 2-3 hours to get the prototype done working. I spend the rest of the weekend fixing finish and touches.

# 📺 Demo

Visit the following url for prototype.

```
https://udundi.jaw.dev/
```

# 🔔 Prerequisites

Install docker on your systems. Visit official site at https://www.docker.com/ for more information. Follow proper instruction for your own systems.

# 📖 Configuration

If you're deploying it into a server, make sure to edit `nginx.conf` file within this project.

# 👨‍💻 Development

1. Open up terminal and type in the following command to clone this project repository.

   ```
   git clone https://github.com/wajeht/udundi-coding-challenge.git
   ```

2. After cloning this project repository, get inside this project folder by typing the following command.

   ```
   cd udundi-coding-challenge
   ```

3. After we are inside `'udundi-coding-challenge` folder, type in just one command and it will open open up a browser at `http://localhost:8080`.

   ```
   make
   ```

# ⌨️ `make` commands

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

5. The following command will delete the docker container if it has been build
   ```
   make clean
   ```

# 👥 Contribute

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# ©️ License

Distributed under the MIT License © [wajeht](https://www.github.com/wajeht/). See LICENSE for more information.
