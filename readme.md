前端开发框架
==========

概述
--------
这是一个参照（Angle）搭建的框架，主要运用了 Bootstrap + AngularJS


__All the best and enjoy coding.__

### 官网

如果你有任何问题，可以到官网查找。

[联系支持 >](https://wrapbootstrap.com/user/themicon)


入门指南
---------------

### 目录结构

以下是项目文件组织结构:

```
+-- app/                       //打包生成的目录
|   +-- css/
|   +-- documentation/
|   +-- img/
|   +-- js/
|   +-- i18n/
|   +-- pages/
|   +-- vendor/
|   +-- views/
+-- master/                     //开发的目录
|   +-- jade/                   //html 目录，不过它是用jade来编写的
|   |   +-- pages/
|   |   +-- views/
|   +-- js/
|   |   +-- modules/            //js基础模块目录
|   |   |   +-- controllers/
|   |   |   +-- directives/
|   |   |   +-- services/
|   |   +-- custom/             //js业务模块目录
|   +-- sass/                   //css 目录
|   |   +-- app/
|   |   +-- bootstrap/
|   |   +-- themes/
|   +-- gulpfile.js            //gulp 执行文件
|   +-- package.json           //npm依赖包管理
|   +-- bower.json             //bower依赖包管理
+-- server/                     //异步请求测试数据
|   +-- *.json
+-- vendor/                     //依赖的组件库
+-- index.html                  //主入口页面
```
---
#### Main folders explanation 

__app/__ folder

This folder contains the compiled files. __This files are ready to deploy on your server.__
这个文件夹包含编译文件, 可以准备部署到服务器上。

- pages/
This folder contains the compiled html files for the single pages (out of the app).
这个文件夹包含编译后的单独html文件(比如404等页面)。

- views/
This folder contains the compiled html files for the views and partials used for the app. 
这个文件夹包含编译后app的相关html文件（在views文件夹中）包含模板的html文件（在partials文件夹中）

- i18n/
This folder contains the json files use for translation.
这个文件夹包含多国语言翻译用的json文件

- vendor/
This folder contains vendor files not managed via bower
这个文件夹包含所需的依赖组件库（不通过bower管理）


__master/__ folder
 
This folder contains the source files. You will find the following folders inside
 这个文件夹包含源文件。你在里面将找到子文件夹

- jade/
This folder contains JADE files. This files need to be compiled into html files to be displayed by a browser
这个文件夹包含JADE文件。这些文件需要被编译成被浏览器显示的html文件。

- js/
Here you will find pure JS files. All this files are concatenated into the file app.js. 
 这里你将发现开发的JS文件。所有文件打包到app.js这个文件中。

__vendor/__ folder
 
This folder contains the vendor files used to include plugins and other components. This folder is handled via bower so optionally you can remove or upgrade the vendor components using such tool.
这个文件夹包含用于包含插件和其他组件库。通过bower来控制，所以你用这个工具能随意移除或升级供应商组件。

__server/__ folder
 
This folder contains server side files used for demonstration and guide for the flot chart and file upload components.
  这个文件夹包含用于本地测试的数据文件。

- __sidebar-menu.json__
This file is __important and required__ because it contains the sidebar menu definition.
侧栏菜单json文件
### Custom code

To add your own code you can follow this instructions:
添加你自己的代码你要遵循以下说明
__Working with css and js__

- Create a file app/css/custom.css and add your own styles
- Create a file app/js/custom.js and add your own javascript
- Edit the file index.html and include custom.css after all other css files and custom.js after all other js files.
创建一个app/css/custom.css放置你的css
创建app/js/custom.js放置你的js
编辑index.html，custom.css，custom.js在所有其他css文件和和js文件之后

__Working with source files__

- For JS, go to folder master/js/custom and start editing the file custom.js. 
- After compile the source again with gulp, your own code will included at th bottom of file app/js/app.js.
- For LESS, go to folder master/less and create a folder called custom and add your won less files. 
- Then edit file app.less and @import all your stylesheets at the bottom (overrides all app default styles)
对于JS，进入 master/js/custom 开始编辑 custom.js。在用gulp编译源码后，你自己的代码将会在app/js/app.js的底部。
对于LESS，进入 master/less 创建一个叫custom的文件夹添加你自己的LESS文件。然后编辑app.less，在底部导入所有样式表。

__A note on updating__

> The premise is, the less you change the downloaded code, the easier will be to apply any updates.Try always to keep your own code the most separated as possible from the package code to easily apply new updates when necessary.
越少改变下载的代码，申请任何升级将更容易。尝试尽可能保持你的代码和打包代码分离，这样必要时申请更新将更容易
Build
-----

**Important!** You only need to follow this instructions in case you want to work with JADE, LESS and concatenate all JS modules.
万一你需要使用JADE,LESS，链接所有JS模块你只需要按照指示
__Node.js__ is a platform built on Chrome's JavaScript runtime for easily building fast, 
scalable network applications.
node.js是一个创建chrome js快速建立可拓展网络应用的平台
__Gulp__ is a task manager, you can define different tasks to run certain commands. Those commands does the compilation job for JADE and LESS, and concatenates the JS files.

__Bower__ is a dependency manager, it works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you're looking for. Bower keeps track of these packages in a manifest file, bower.json. 

The package includes under the master/ folder the file __gulpfile.js__,  __package.json__ and __bower.json__ to install the required components to compile the source files.
打包文件包含了在 master/文件夹下的gulpfile.js，package.json，bower.json来安装源文件编译所需要的组件。
#### Installing tools

The following steps are intended to be an orientation guide, if you are not experienced with this you will need to learn more about it from Google :)
下列步骤特定方向知道，如果你对这方面没经验你需要更多了解
- To install node and npm, go to http://nodejs.org/
- Run __npm install -g bower__ to install bower to manage dependencies
- Download and install GIT for your platform http://git-scm.com/downloads
安装node和npm，去http://nodejs.org/
运行npm install -g bower安装bower进行依赖性管理
从平台http://git-scm.com/downloads下载安装GIT


Once  you have all tools installed
一旦你安装所有工具之后
- Open a terminal, go the package __master/__ folder, then run the command __npm install__. This command will install gulp and all project dependencies. 
- Then, to install vendor dependencies, run __bower install__
- Finally run __gulp__ to start the task manager 
打开终端，进入master/文件夹，运行指令npm install，这个指令将会安装gulp和所有依赖性项目。
最后。运行gulp来启动任务管理器



If everything goes fine, you should see the messages in the terminal telling you that most the task are done ok. The task will watch for files to compile them automatically all files when change.
如果一切顺利，你应该看见控制台的的信息，告诉你任务大部分已经完成。当文件改变时这个任务将会自动监视所有编译文件。
To enable the automatic page reload there is also included a LiveReload task that requires the Chrome plugin [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
为了能自动页面重载，这里包含一个叫LiveReload的任务能命令Chrome插件
### Javascript

The Javascript source is divided in two main files that controls the app
js源码分成两部分
__base.js__: contains the scripts to start the application
包含启动应用的脚本
__app.js__: contains the modules used in the application (controllers, directive, etc)
包含在应用中使用的模块
__Note__ The edit the scripts included in base.js open the file vendor.base.json located under the master folder

The app.js script build (concatenation) order is 
 app.js 的创建命令如下
```
'js/app.init.js'
'js/modules/*.js'
'js/modules/controllers/*.js'
'js/modules/directives/*.js'
'js/modules/services/*.js'
'js/modules/filters/*.js'
```

### LESS

The LESS files compiles into the file __app.css__. This file contains the bootstrap styles and the application custom styles.
LESS文件从编译成app.css.这个文件包含bootstrap样式和应用的定制样式
Also the __app-rtl.css__ is automatically generated with the same styles but inverted for RTL layout. To convert styles the node script css-flip is used.
app-rtl.css是用同样的样式自动生成的。但是反转成RTL布局。转换样式使用了node脚本的css-flip
### Vendor

Vendor script dependencies are managed by bower. Just run __bower install__ in folder master/ and all dependencies will be installed.
运营商脚本的依赖性文件由bower管理。仅仅在文件夹master/运行bower install就能使所有依赖性文件被安装。
After installing all dependencies is necessary to install them in the locations the app expects them. To do that, run gulp task with the command `gulp scripts:vendor`  in the master folder.  
This task will run automatically the tasks  `scripts:vendor:app` and  `scripts:vendor:base`
在安装所有依赖性文件之后，必须安装他们在app预计的位置。为了完成它，在master文件夹下用指令gulp scripts:vendor运行gulp任务。
这个任务将会自动运行任务scripts:vendor:app和scripts:vendor:base
#### Vendor folder

To avoid not necessary files that bower downloads there's a task `scripts:vendor:app` that will copy all files required by the app from the __bower_components__ folder to the main __/vendor__ folder.  
This files are listed in __vendor.json__ file which contains the path of all necessary files required by the app components. Those files are usually required via the lazy load module and you can include fonts, svg, etc.
为了避免不必要的文件被bower下载，任务scripts:vendor:app会从bower_components文件夹复制所有必要的文件到/vendor文件夹
这些文件会在vendor.json上登记，vendor.json包含了app组件所有必要文件的路径。那些文件通常需要经由懒加载模块，这些文件可以是fonts,svg,etc
#### Vendor Base

The `base.js` file is generated with the task  `scripts:vendor:base`. This task will read the list of files in the __vendor.base.json__ file and will concat and compress all files and move them to create the mentioned base.js file.  
All files in base.js are loaded when the app is required for first time and contains all vendor scripts necessary to start the app (jquery, angular, etc).
base.js生成任务scripts:vendor:base。这个任务将会读取vendor.base.json的文件列表，将会合并和压缩所有文件，将他们移动去创建刚刚所提到的base.js文件。
所有在base.js中的文件都在app第一次被需要的时候以及需要所有运营商脚本去启动app时被加载
#### Vendor Updates

To update vendor files via bower you can edit the bower.json file by adding the last version you want to download. 
为了更新运营商文件via bower你能通过增加你想下载的最新版本编辑 bower.json
__Note__ The folder __app/vendor__ contains vendor files 
that currently aren't possible to be managed via bower
这个文件夹app/vendor包含那些当前不能管理via bower的文件

Usage
-----

### Layout

Layout can be changed via the following classed applied to the __body__ tag
布局能被改成适用于body标签下的class

`.layout-fixed`: Makes navbars become fixed while the user can scroll only content
当用户只滚动内容时让navbar成为固定的
`.layout-boxed`: Limits the width of the main wrapper element
限制主要包含元素的宽度
`.aside-collapsed`: Condenses the sidebar showing only icons
压缩sidebar让其只显示为icon
`.aside-toggle`: used internally for mobiles to hide the sidebar off screen
使用移动设备的内部功能使sidebar从屏幕中隐藏
`.offsidebar-open`: used internally to display the offsidebar component (formally the right sidebar) 
使用内部功能使offsidebar组件显示
The following markup representation is in fact divided into views but this code will give a good perspective of the final organization after the app is rendered:
以下标记实际上分成多种视图，但是这些代码将会展现一种好的对于最终的组织在app被渲染后的观点
``` html
<html>
  <head>
    #metas and css
  </head>  
  <body>
    <section class="wrapper" data-ui-view>

        #start include from app.html
          <nav class="navbar topnavbar">
            #top navbar content
          </nav>
   
          <aside class="aside">
            #sidebar content (left)
          </aside>
   
          <aside class="offsidebar">
            #offsidebar content (right)
          </aside>
   
          <section>
            <div class="content-wrapper" data-ui-view>
              #page content
            </div>  
          </section>
        #end include from app.html

     </section>
 
     #scripts
 
  </body>
</html>
```

### Lazy Load

This app requires only the necessary scripts according to the view that is loaded saving tons unnecessary request to the server.
这个app只需要根据视图（加载保存大量不必要的服务器请求的视图）找寻必要的脚本
The lazy load is handled by a custom core function based on the plugin [ocLazyLoad](https://github.com/ocombe/ocLazyLoad)
懒加载被基于插件的制定内核功能控制
To configure the lazy scripts, you need to edit the constants `APP_REQUIRES` (constants.js)  
Then edit the app configuration (config.js)
 where you will find the routes configuration and add or edit the params using the special function `resolveFor` which handles the scripts request order for the current route.
为了安装懒脚本，你需要编辑常量APP_REQUIRES。
编辑app的配置文件
### RTL

RTL support uses the a tool called [css-flip](https://github.com/twitter/css-flip) which inverts most the css properties to change the page orientation.  
It's also a property `$rootScope.isRTL`  to detect when the site is in RTL mode. 
RTL支持使用一个叫[css-flip]的工具。这个工具能转换大部分css的属性来改变页面方向。
它也支持一个叫$rootScope.isRTL的属性来探测站点何时在RTL模式上。

### Routes

This app uses for routing the [AngularUI Router](https://github.com/angular-ui/ui-router) with nested states making more simple to manage the routing system and load resource in cascade.
这个app使用路径[AngularUI Router]
All routes are defined in the file __config.js__
所有路径都定义在config.js这个文件中
### Translation

The translation system uses the [AngularUI Translate](https://github.com/angular-translate/angular-translate) module.  
This modules simplifies the translation system by loading translate references from a JSON file and replacing the content where the reference has been used.
这个翻译系统使用[AngularUI Translate]模块
这个模块通过在从JSON文件加载翻译参照简化了翻译系统，同时取代参照使用过的内容。

Examples

``` html
<h3 ui-translate="reference.NAME">Text that will be replaced</h3>

<h3>{{ 'reference.NAME' | translate }}</h3>

<a href="#" title="{{ 'reference.NAME' | translate }}">Link</a>
```

The JSON files with translation references are located in the folder app/i18n
这个有翻译参照的JSON文件位于文件夹app/i18n

### Dynamic Sidebar

The sidebar is created dynamically from a JSON file.  
这个sidebar从一个JSON文件被动态的创建

__JSON properties format:__

``` js
[
  {
    "text":      "Item text",          // replaced by translate reference
    "sref":      "app.dashboard",      // the state name of the target route
    "icon":      "icon-speedometer",   // the icon full classname
    "translate": "sidebar.ITEM",       // the translation reference
    "heading":   "true"                // only when item is used as heading 
  },

  ...

]
```

This is method is also useful if you pretend to generate a per user menu dynamically in the server.
当你假装在服务器中动态生成一个per user菜单时，这个方法很好用。

### Markdown Docs

This documentation is loaded from a Markdown source using [Flatdoc](http://ricostacruz.com/flatdoc/) plugin.
The menu and the content is generated automatically from the .md file and styled directly from custom css.
这个文件从一个Markdown源头通过使用 [Flatdoc]插件被加载。
这个菜单和内容从 .md 文件以及直接来自custom css的样式表中自动生成


Via the `flatdoc` directive you can use it like this

``` html
<flatdoc src="path/to/readme.md"></flatdoc>
```

### Icons

Icons included from

* [__Font Awesome__](http://fortawesome.github.io/Font-Awesome/)
* [__Skycons__](http://darkskyapp.github.io/skycons/)
* [__Weather Icons__](http://erikflowers.github.io/weather-icons/)

### Themes

To change the color scheme you have 2 options:
改变颜色有两种选择
#### From LESS files

Edit the LESS files in folder __master/less/app__ and the file __master/less/bootstrap/variables.less__ to use the color you want.  
Like Bootstrap, most of the colors are based on `@brand-*` variables.
编辑文件夹master/less/app中LESS文件和文件master/less/bootstrap/variables.less来使用你想要的颜色。
就像Bootstrap，大多数颜色基于@brand-*变量

You can also edit the files in __master/less/theme__ folder to create your own set of color schemes. 
This files must be  the __app.css__ in order to override the default color set.
你能在master/less/theme文件夹中编辑文件来创建你自己设置的颜色方案。为了重写默认颜色设置，app.css之后。

> Changing the theme from LESS files helps you to avoid bloating your css 
by not double declaring your color rules.
从LESS文件改变主题能通过不重复声明你的颜色规则避免css过于膨胀

#### From CSS files

This template support color schemes including a css file. You can find the color options in the folder app/css/  files are named theme-*.css
这个模板支包括css文件的颜色方案。在文件夹app/css/你能找到命名为主题名-*.css的颜色选项

If you want to change or add a new component color, just inspect the color using your favorite browser devtool and then replace the value in the file.
如果你想改变或者添加一个新的构建颜色，只需要使用你最喜欢的browser dectool来检查颜色，然后替换文件中的值

This files are prepared to change the basic color scheme (both sidebars and  top navbar) but if you want to make a more deep change I suggest you to check the LESS way which is more simple for multiple component changes.
这个文件准备改变基本颜色方案(同时改变sidebar和头部navbar)，但是如果你想做更深层次的改变，我建议你检查LESS方法--更简单的多重组件的改变

Directives
----------

This item include the following directives. 
这个条目包括以下指令

`[href]`  
*File*: anchor.js  
Disables null anchor behavior


`[animate-enabled]`  
*File*: animate-enabled.js  
Enable or disables ngAnimate for element with directive

`[chosen]`  
*File*: chosen-select.js  
Initializes the chose select plugin

`[classyloader]`  
*File*: classy-loader.js  
Enable use of classyLoader directly from data attributes

`[reset-key]`  
*File*: clear-storage.js  
Removes a key from the browser storage via element click

`[filestyle]`  
*File*: filestyle.js  
Initializes the fielstyle plugin

`[flatdoc]`  
*File*: flatdoc.js  
Creates the flatdoc markup and initializes the plugin

`[form-wizard]`  
*File*: form-wizard.js  
Handles form wizard plugin and validation

`[toggle-fullscreen]`  
*File*: fullscreen.js  
Toggle the fullscreen mode on/off

`[gmap]`  
*File*: gmap.js  
Init Google Map plugin

`[load-css]`  
*File*: load-css.js  
Request and load into the current page a css file

`[markdownarea]`  
*File*: markdownarea.js  
Markdown Editor from UIKit adapted for Bootstrap Layout.

`[masked]`  
*File*: masked.js  
Initializes the masked inputs

`[search-open]`  
*File*: navbar-search.js  
Open the search in the top navbar. Use `[search-dismiss__]   in buttons a`t close it.

`[notify]`  
*File*: notify.js  
Create a notifications that fade out automatically. Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)

`[now]`  
*File*: now.js  
Provides a simple way to display the current time formatted

`[paneltool]`  
*Module* panel-tools.js  
Directive tools to control panels. Allows collapse, refresh and dismiss (remove) Saves panel state in browser storage.  
Supports attributes [panel-dismiss] [panel-collapse] [panel-refresh]

`[animate]`  
*File*: play-animation.js  
Provides a simple way to run animation with a trigger. Requires animo.js

`[scrollable]`  
*File*: scroll.js  
Make a content box scrollable

`[sidebar]`  
*File*: sidebar.js  
Wraps the sidebar and handles collapsed state

`[skycon]`  
*File*: skycons.js  
Include any animated weather icon from Skycons

`[sparkline]`  
*File*: sparkline.js  
SparkLines Mini Charts

`[check-all]`  
*File*: table-checkall.js  
Tables check all checkbox

`[tagsinput]`  
*File*: tags-input.js  
Initializes the tag inputs plugin

`[toggle-state]`  
*File*: toggle-state.js  
Toggle a classname from the __body__ tag. Useful to change a state that affects globally the entire layout or more than one item.  
Elements must have [toggle-state="CLASS-NAME-TO-TOGGLE"]. Use [no-persist] to avoid saving the sate in browser storage.

`[ui-slider]`  
*File*: ui-slider.js  
Initializes the jQuery UI slider controls

`[validate-form]`  
*File*: validate-form.js  
Initializes the validation plugin Parsley

`[vector-map]`  
*File*: vector-map.js.js  
Initializes jQuery Vector Map plugin


### Bootstrap

This item include all directives from [Angular BootstrapUI].
这条包括所有来自Angular BootstrapUI的指令
[Angular BootstrapUI]: http://github.com/api

Constants
---------

### Colors

`APP_COLORS`  
Defines the brand colors used in the css accessible from JS
定义js中商标颜色
``` js
App.controller('ExampleCtrl', ['APP_COLORS', function(colors) {
  console.log( colors.primary ); 
  // prints #5d9cec
}]);
```

This constant is used  together with the __service colors__ to provide access from the $scope to each color by its name
这个常量伴随service colors一起使用。service colors从每个颜色都通过它命名的$scope提供方法

Example 

``` html
<div sparkline data-bar-color="{{colorByName('primary')}}" ></div>
```

### Media Queries

`APP_MEDIAQUERY`  
Defines the media queries used in the css accessible from JS
定义JS中可访问媒介查询
``` js
App.controller('ExampleCtrl', ['APP_MEDIAQUERY', function(mq) {
  console.log( mq.mobile ); 
  // prints 480
}]);
```
### Requires

`APP_REQUIRES`  
Defines the script used with the lazy load system. 
定义用于懒加载系统的脚本
Format:

``` js
// Put here all jQuery script (and not angular js)
scripts: {
  'friendly-name' : ['path/to/plugin.js', 'path/to/plugin.css', '...'],
  ...
}
// Put here all angular js modules that needs to be instantiated
modules: {
  { 
    name: 'toaster', files: ['path/to/module.js', 'path/to/module.css', '...']
  },
  ...
}
```

Learn more by looking into the file __config.js__
要了解更多查阅config.js
Credits
-------
<div class="row">
<div class="col-lg-3">
[Angular](https://angularjs.org/)  
[Angular Docs](https://docs.angularjs.org/guide/)  
[ocLazyLoad](https://github.com/ocombe/ocLazyLoad)  
[uiRouter](https://github.com/angular-ui/ui-router)  
[uiTranslate](https://github.com/angular-translate/angular-translate)  
[uiBootstrap](http://angular-ui.github.io/bootstrap/)  
[Toaster](https://github.com/jirikavi/AngularJS-Toaster)  
[Angular Loading Bar](http://chieffancypants.github.io/angular-loading-bar/)  
[Bootstrap](http://getbootstrap.com/)  
[jQuery]( http://jquery.com/)  
[Fastclick](https://github.com/ftlabs/fastclick)  
[Animo](http://labs.bigroomstudios.com/libraries/animo-js)  
[Animate.css](http://daneden.github.io/animate.css/)  
[Chosen](http://harvesthq.github.io/chosen/)  
[Codemirror](http://codemirror.net/)  
[BS Filestyle](http://markusslima.github.io/bootstrap-filestyle/)  
[FlotCharts](http://www.flotcharts.org/)  
[gMap](http://github.com/marioestrada/jQuery-gMap)  
[Marked](https://github.com/chjj/marked)  
[ClassyLoader](http://www.class.pm/projects/jquery/classyloader/)  
[CSSRadialBar](http://codepen.io/geedmo/pen/InFfd)  
</div>
<div class="col-lg-3">
[Modernizr](http://modernizr.com/)  
[MomentJs](http://momentjs.com/)  
[Parsley](http://parsleyjs.org/)  
[Bootstrap Slider](http://www.eyecon.ro/bootstrap-slider)  
[Sparkline](http://omnipotent.net/jquery.sparkline/#s-about)  
[BS Tags Input](http://timschlechter.github.io/bootstrap-tagsinput/examples/bootstrap3/)  
[slimSCroll](http://rocha.la/jQuery-slimScroll)  
[DataTables](https://datatables.net/.)  
[FullCalendar](http://arshaw.com/fullcalendar/docs/)  
[CsSpinner](http://jh3y.github.io/-cs-spinner/)  
[InputMask](https://github.com/RobinHerbots/jquery.inputmask)  
[jVectorMap](http://jvectormap.com/)  
[FlatDoc](https://github.com/rstacruz/flatdoc)  
[jQueryUI](http://jqueryui.com/sortable/)  
[UiKit Upload](http://www.getuikit.com/docs/addons_upload.html)  
[UiKit Notify](http://www.getuikit.com/docs/addons_notify.html)  
[UiKit MarkdownArea](http://www.getuikit.com/docs/addons_markdownarea.html)  
</div>
<div class="col-lg-3">
Icons  

[Font Awesome](http://fortawesome.github.io/Font-Awesome/)  
[Skycons](http://darkskyapp.github.io/skycons/)  
[Weather Icons](http://erikflowers.github.io/weather-icons/)  
<br>
Demo images  

[uiFaces](http://uifaces.com/)  
[Raumrot](http://www.raumrot.com/10/)  
[Unsplash](http://unsplash.com)  
</div>
</div>
