function generateHtml(data) {
  return
  ;`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <style>
      body {
        background-color: white;
      }
      .main {
        height: 35vh;
      }
      .jumbotron {
        height: 40vh;
      }
      img {
        border-radius: 50%;
        width: 20%;
        height: 20vh;
        margin-left: 30%;
        margin-bottom: 20%;
        border: 4px solid #ffff00;
      }
      .user-card {
        position: relative;
        bottom: 50px;
        margin-right: 5vh;
        height: 50vh;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="jumbotron">
        <div class="card ml-3 text-center user-card">
          <img
            class="shadow mb-5 mx-auto d-block"
            src="${data.profile.data.avatar_url}"
            alt="image"
          />
          <div class="card-title">Hi</div>
          <div class="card-body">
            <h2>My name is ${data.answers.name}</h2>
            <h4>Currently at ${data.profile.data.company}</h4>
            <div class="links-nav">
            <div class="nav-link">
            <i class="fas fa-location-arrow"></i>
            <a href="https://www.google.com/maps/place/${data.profile.data.location}">${data.profile.data.location}</a>
            </div>
            <div class="nav-link">
              <i class="fab fa-github-alt"></i>
              <a href="${data.profile.data.url}">GitHub</a>
            </div>
            <div class="nav-link">
              <i class="fas fa-blog"></i>
              <a href="${data.profile.data.blog}">Blog</a>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <div class="main">
        <br />
        <br />
        <br />
        <h1 class="text-center">${data.profile.data.bio}
        </h1>
        <div class="row">
          <div class="col-sm-6">
            <div class="card ml-5 mb-2 text-center">
              <div class="card-title">Public Repositories</div>
              <div class="card-body"><h3>${data.profile.data.public_repos}</h3></div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card ml-2 ml-2 mt-1 text-center">
              <div class="card-title">Followers</div>
              <div class="card-body"><h3>${data.profile.data.followers}</h3></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card ml-5 mt-4 text-center">
              <div class="card-title">
                Github Stars
                <div class="card-body"><h3>${data.stars.data.length}</h3></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card ml-2 mr-3 mt-4 text-center">
              <div class="card-title">Following</div>
              <div class="card-body"><h3>${data.profile.data.following}</h3></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="jumbotron"></div>
    </div>
  </body>
</html>`
}
