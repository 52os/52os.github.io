var title = "Title";
; window.QueryString = function (name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return window.decodeURIComponent(results[2].replace(/\+/g, ' '));
};

window.LocalStorage = function (key, value) {
    if (!key) {
        return null;
    }
    if (value) {
        localStorage.setItem(key, value);
        return value;
    }
    return localStorage.getItem(key);
};

window.Global = new Vue({
    el: '#app',
    data: {
        Title: title,
        PageIndex: 0,
        TotalPages: 0,
        Data: [""]
    },
    methods: {}
});

window.GetDateString = function () {
    return new XDate().toString("yyyyMMddHHmmssfff");
};

window.GotoPage = function (page) {
    window.LocalStorage("page", page);
    $.get("/file/list/" + page, { date: window.GetDateString() }, function (data) {
        data.Title = title;
        Global.$data = data;
    });
};

window.DeleteFile = function (url) {
    $.post("/file/delete", { u: url }, function (data) {
        console.log(data);
        window.location.reload();
    });
};

$(document).ready(function () {
    var page = window.QueryString("page");
    if (!page) {
        page = window.LocalStorage("page");
        if (!page) {
            page = 1;
        }
    }
    window.GotoPage(page);
});