# pubgraph

Visualization of Pub shows dependency graph of a pub package.

# Screenshots

Default view:
![Default view](https://raw.githubusercontent.com/anvaka/npmgraph.an/master/images/default_view.png)


Responsive view:

![Responsive view](https://raw.githubusercontent.com/anvaka/npmgraph.an/master/images/responsive_view.png)


3d view:
![3d view](https://raw.githubusercontent.com/anvaka/npmgraph.an/master/images/3d_view.png)

# How it's done?

[angular.js](https://angularjs.org/) + [browserify](https://browserify.org/) + [ngraph](https://github.com/anvaka/ngraph) => [gulp](https://gulpjs.com/) => https://werainkhatri.github.io/pubgraph/

The website is entirely hosted on [GitHub Pages](https://pages.github.com/).

The pub data is coming from https://pub.dev/api/packages/ and is collected by [pubgraphbuilder](https://github.com/werainkhatri/pubgraphbuilder) in real time.

For CSS styles I'm using [twitter bootstrap](https://getbootstrap.com/css/) and [less](https://lesscss.org/).

# npm rocks

All modules of this application are provided by [npm](https://github.com/werainkhatri/pubgraph/blob/master/package.json). 

# Local development

```
git clone https://github.com/werainkhatri/pubgraph.git
cd pubgraph
npm i
npm start
```

This should start local dev server and serve Pub visualization.

# license

MIT
