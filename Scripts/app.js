var viewModel = {
    title: "开源项目",
    projectName: "开发中常用的一些开源项目",
    tagline: "aspnetstudy.github.io",
    author: "郭松浩",
    packages:
    [
        {
            name: "数据持久化/ORM",
            items: [
                { name: "Dapper.NET", description: "A simple object mapper for .Net", github: "StackExchange/dapper-dot-net", nuget: "Dapper" },
                { name: "PetaPoco", description: "A tiny ORM-ish thing for your POCO's", github: "CollaboratingPlatypus/PetaPoco", nuget: "PetaPoco" },
                { name: "ServiceStack.OrmLite", description: "Fast, Simple, Typed ORM for .NET", github: "ServiceStack/ServiceStack.OrmLite", nuget: "ServiceStack.OrmLite" },
                { name: "Xinchen.XLinq", description: "一个轻量级ORM框架,使用方法和EF一样", github: "GuoSongHao", nuget: "Xinchen.XLinq" }
            ]
        },
        {
            name: "依赖注入/IOC",
            items: [
                { name: "Autofac", description: "An addictive .NET IoC container", github: "autofac/Autofac", nuget: "Autofac" },
                { name: "Funq", description: "A fast DI container you can understand", github: "w0rd-driven/Funq", nuget: "Funq" }
            ]
        },
        {
            name: "面向切面编程/AOP",
            items: [
                { name: "LinFu.DynamicProxy", description: "A small, lightweight dynamic proxy library for the .NET framework", github: "philiplaureano/LinFu.DynamicProxy", nuget: "LinFu.DynamicProxy.OfficialRelease" },
                { name: "SimpleAspects", description: "A simple AOP framework", github: "hcesar/SimpleAspects", nuget: "SimpleAspects" }
            ]
        },
        {
            name: "对象映射/ObjectMapper",
            items: [
                { name: "AutoMapper", description: "A convention-based object-object mapper in .NET", github: "AutoMapper/AutoMapper", nuget: "AutoMapper" },
                { name: "NLite", description: "NLite 框架旨在提供一个轻量级的组件库-DI，Aop,MessageBus, OO Mapper，国际化,数据校验，日志，异常管理，多线程等", github: "netcasewqs/NLite", nuget: "NLite" },
                { name: "TinyMapper", description: "A quick object-object mapper for .NET", github: "TinyMapper/TinyMapper", nuget: "TinyMapper" }
            ]
        },
        {
            name: "网络服务/Network",
            items: [
                { name: "Flux", description: "Lightweight web server for .NET and Mono", github: "markrendle/Flux", nuget: "Flux" },
                { name: "Nancy", description: "Lightweight, low-ceremony, framework for building HTTP based services on .Net and Mono", github: "NancyFx/Nancy", nuget: "Nancy" },
                { name: "SelfishHttp", description: "Self hosting HTTP server for testing in .net", github: "featurist/SelfishHttp", nuget: "SelfishHttp" },
                { name: "FastHttpRequest", description: "HTTP Helpers for C# / .NET", github: "vla/FastHttpRequest", nuget: "FastHttpRequest" },
                { name: "TinyHTTP-PCL", description: "A tiny HTTP abstraction layer for PCL", github: "Deathspike/TinyHTTP-PCL", nuget: "TinyHTTP-PCL" }
            ]
        },
        {
            name: "日志组件/Logging",
            items: [
                { name: "log4net", description: "The Apache log4net library is a tool to help the programmer output log statements to a variety of output targets", github: "apache/log4net", nuget: "log4net" },
                { name: "NLog", description: "Advanced .NET, Silverlight and Xamarin Logging", github: "NLog/NLog", nuget: "NLog" }
            ]
        },
        {
            name: "其它项目/Others",
            items: [
                { name: "EPPlus", description: "EPPlus is a .net library that reads and writes Excel 2007/2010 files using the Open Office Xml format (xlsx)", github: "wenhx/EPPlus", nuget: "EPPlus" },
                { name: "FluentValidation", description: "A small validation library for .NET that uses a fluent interface and lambda expressions for building validation rules", github: "JeremySkinner/FluentValidation", nuget: "FluentValidation" },
                { name: "FluentXml", description: ".NET XML library providing fluent XML for querying and creating XML documents", github: "remi/FluentXml", nuget: "FluentXml" },
                { name: "HtmlAgilityPack", description: "This is an agile HTML parser that builds a read/write DOM and supports plain XPATH or XSLT", github: "floytinax/HtmlAgilityPack", nuget: "HtmlAgilityPack" },
                { name: "Json.NET", description: "Json.NET is a popular high-performance JSON framework for .NET", github: "JamesNK/Newtonsoft.Json", nuget: "Newtonsoft.Json" },
                { name: "LiteDB", description: "A simple embedded .NET NoSQL Document Store in a single data file", github: "mbdavid/LiteDB", nuget: "LiteDB" },
                { name: "NMemory", description: "NMemory is a lightweight non-persistent in-memory relational database engine that is purely written in C# and can be hosted by .NET applications", github: "tamasflamich/nmemory", nuget: "NMemory" },
                { name: "Quartz.NET", description: "Quartz Enterprise Scheduler .NET", github: "quartznet/quartznet", nuget: "Quartz" }
            ]
        }
    ]
};
var vm = new Vue({
    el: '#app',
    data: viewModel
});
