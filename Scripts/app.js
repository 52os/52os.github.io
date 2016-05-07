var viewModel = {
    title: "开源项目",
    projectName: "开发中常用的一些开源项目",
    tagline: "aspnetstudy.github.io",
    author: "郭松浩",
    groups:
    [
        {
            name: "数据持久化/ORM",
            items: [
                { name: "Dapper.NET", description: "A simple object mapper for .Net", github: "StackExchange/dapper-dot-net", nuget: "Dapper" },
                { name: "PetaPoco", description: "A tiny ORM-ish thing for your POCO's", github: "CollaboratingPlatypus/PetaPoco", nuget: "PetaPoco" },
                { name: "ServiceStack.OrmLite", description: "Fast, Simple, Typed ORM for .NET", github: "ServiceStack/ServiceStack.OrmLite", nuget: "ServiceStack.OrmLite" },
                { name: "XLinq", description: "一个轻量级ORM框架,使用方法和EF一样", github: "GuoSongHao", nuget: "XLinq" }
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
                { name: "LinFu.DynamicProxy", description: "A small, lightweight dynamic proxy library for the .NET framework", github: "philiplaureano/LinFu.DynamicProxy", nuget: "LinFu.DynamicProxy" },
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
                { name: "FastHttpRequest", description: "HTTP Helpers for C# / .NET", github: "vla/FastHttpRequest", nuget: "FastHttpRequest" },
                { name: "TinyHTTP-PCL", description: "A tiny HTTP abstraction layer for PCL", github: "Deathspike/TinyHTTP-PCL", nuget: "TinyHTTP-PCL" }
            ]
        }
    ]
};
var vm = new Vue({
    el: '#app',
    data: viewModel
});