<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Health-and-Wellness theme
</h1>

A Gatsby theme for Health and Wellness system called "HealthScore".

<div style="display:flex;">
  <img src="https://user-images.githubusercontent.com/56475750/229354964-34ed80dc-710e-4cd4-8157-c189405d29a1.jpg" 
            alt="before" width="300"/>
  <img src="https://user-images.githubusercontent.com/56475750/229354967-5f4fdf6e-7a52-4d0e-8639-e36a8b9efa80.jpg" 
            alt="after" width="302.5"/>
</div>

### [Live Demo Link](https://myhealthscore.netlify.app/)

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the Health-and-Wellness Theme

```shell
yarn add health-and-wellness-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "health-and-wellness-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

4. Run your site using `gatsby develop` and navigate to your hotel-management-system site.

## Usage

### Theme options

| Key        | Default value | Description           |
| ---------- | ------------- | --------------------- |
| `basePath` | `/`           | Root url for the site |

#### Example configuration

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `health-and-wellness-theme`,
      options: {
        // basePath defaults to `/`
        basePath: `/site/`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

#### Build by [Shwet Khatri](https://github.com/ShwetKhatri2001)
