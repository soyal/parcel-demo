## parcel 试用

总结：parcel作为无配置的打包工具，使用过程是非常爽的，打包react项目和vue项目都非常方便，而且，在没有安装less的情况下引用.less文件，本来以为会报错，结果parcel居然自动帮你安装less然后执行，非常的神奇。但是目前没有找到类似webpack definePlugin这样的插件来进行全局变量的替换，如果解决了这个问题，我这边的大多数项目都可以往parcel迁移

### update:  
经测试发现，parcel对变量替换是支持的，使用方式与create-react-app是一致的