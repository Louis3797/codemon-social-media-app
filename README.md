<div id="top"></div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">codemon</h1>

  <p align="center">
    A social network for developers to share code and knowledge. Login with your Github Account and start!
    <br />
    <br />
    <a href="https://github.com/Louis3797/codemon-social-media-app/">View Demo</a>
    ·
    <a href="https://github.com/Louis3797/codemon-social-media-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Louis3797/codemon-social-media-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->
## About The Project

![homescreen][product-screenshot]

codemon is a social media app that can be used to share and code and knowledge and also to work with people together

This project was generated using [Nx](https://nx.dev/). The Frontend is build using Next.js and for the Backend we use Nest.js as main Server and Golang as Media Microservice.  

### Built With

* [Nx](https://nx.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Golang](https://go.dev/)
* [Prisma](https://www.prisma.io/)
* [Apollo](https://www.apollographql.com/)
* [GraphQL](https://graphql.org/)
* [MySQL](https://www.mysql.com/)
* [Nest.js](https://nestjs.com/)
* [Socket.Io](https://socket.io/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

| Codebase | Description      |
| -------- | ---------------- |
| apps  | [All Apps these Project uses are here](https://github.com/Louis3797/codemon-social-media-app/tree/main/apps)  |
| libs  | [Shared Libaries](https://github.com/Louis3797/codemon-social-media-app/tree/main/libs)  |

This project uses npm as packet manager.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Louis3797/codemon-social-media-app.git
   ```

2. Install yarn packages

   ```sh
    cd codemon-social-media-app
    npm install 
   ```

3. Run on dev Server

   ```sh
    nx serve api
    nx serve media-server
    nx serve web
   ```

<!-- USAGE EXAMPLES -->
## Usage


<!-- ROADMAP -->
## Roadmap

* [ ] Add Frontend
* [ ] Setup Databases and Schemas
* [ ] Setup Nestjs and Redis

See the [open issues](https://github.com/Louis3797/codemon-social-media-app/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Louis

Project Link: [codemon](https://github.com/Louis3797/codemon-social-media-app/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/image_url.png

[forks-shield]: https://img.shields.io/github/forks/Louis3797/codemon-social-media-app.svg?style=for-the-badge
[forks-url]: https://github.com/Louis3797/codemon-social-media-app/network/members

[stars-shield]: https://img.shields.io/github/stars/Louis3797/codemon-social-media-app.svg?style=for-the-badge
[stars-url]: https://github.com/Louis3797/codemon-social-media-app/stargazers

[issues-shield]: https://img.shields.io/github/issues/Louis3797/codemon-social-media-app.svg?style=for-the-badge
[issues-url]: https://github.com/Louis3797/codemon-social-media-app/issues

[license-shield]: https://img.shields.io/github/license/Louis3797/codemon-social-media-app.svg?style=for-the-badge
[license-url]: https://github.com/Louis3797/codemon-social-media-app/blob/master/LICENSE.txt
