<p align="center">
<img src="./fabric-logo.png"  />
</p>

# Zalando Fabric Scss

[![CircleCI](https://circleci.com/gh/fabric-design/scss.svg?style=svg)](https://circleci.com/gh/fabric-design/scss)
[![Styleguide](https://img.shields.io/github/issues/fabric-design/scss.svg)](https://github.com/fabric-design/components/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/fabric-design/scss.svg)]()

## Motivation

At Zalando Retail Operations we are developing a lot of web applications from small to mid-complex. As we are developing them in different cross-functional teams we wanted to guarantee the same look and feel in all of our applications independent from people and their development background. For guaranteeing same UI across applications and development teams we are developing a component-based Styleguide which provides a SCSS library and (P)React based components which can be all used independently.

This repository contains our scss styles. 

### Core Concepts

#### Folder structure

Our SCSS styles are organized based on the [atomic design pattern](http://bradfrost.com/blog/post/atomic-web-design/) which allows us a much clearer description and separation of our styles. We also believe that for the development of components atomic design gives a much clearer separation.

Therefore we have a clear folder structure:

- `Atoms` - styles to the basic building blocks of our design. Basically all HTML Tags such as form, label, button, icons.
- `Molecules` - Molecules are groups of atoms combined together to create smallest compunds of our Design. Based on molecules further complex compositions can be created. Molecules can be dropdowns , tooltips or pagination elements.
- `Organisms` - Organisms are combined from a group of molecules and form a complex, still distinct part of an interface, e.g. a navigation header with a logo, links and a search field. 
- `doc` - General documentation of our styleguide (in Markdown). They are later consumed by the [styleguide](https://github.com/fabric-design/styleguide) and displayed in the associated styleguide web application.
- `utils`- utility functions for our SCSS library like variables, grid settings or other helper mixins.

#### Linting

Different people are working on our SCSS library and to ensure a common syntax and coding style we are using the PostCSS library [stylelint](https://github.com/stylelint/stylelint) which lints our SCSS code against a set of rules. Currently, we are using an existing [OSS ruleset](https://github.com/bjankord/stylelint-config-sass-guidelines). 

You can lint your SCSS code 

`gulp lint-scss`

It runs styleint with the SCSS ruleset and breaks for any given linting error.

### Use the design/framework

You can install the package via

`npm i -D git+https://github.com/fabric-design/scss.git`

If you want to use the whole SCSS library you can just import the index SCSS file 

`@import "node_modules/fabric-scss/index"`

### Contributing

Our Zalando Retail Operations Styleguide is in active development and we welcome any contributions and feedback. See our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information on how to contribute.

### LICENSE

The MIT License (MIT)

Copyright (c) 2017 Zalando SE

[LICENSE](LICENSE)
