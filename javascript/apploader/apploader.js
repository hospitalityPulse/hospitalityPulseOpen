/* Modified */
(function apploader(window, document) {
    var msie,
        JSON_START = /^\s*(\[|\{[^\{])/,
        JSON_END = /[\}\]]\s*$/,
        PROTECTION_PREFIX = /^\)\]\}',?\n/,
        urlParsingNode = document.createElement("a");

    (function do_msie_load() {
        msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
        if (isNaN(msie)) {
            msie = int((/trident\/.*; rv:(\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
        }
    })();

    attach_on_load(window, execute_on_load);

    // -- Functions -- //

    function execute_on_load() {
        var my_script = document.getElementById("apploader"),
            my_search = urlResolve(my_script.src).search,
            my_segments = my_search.split("&"),
            left, right,
            my_query = {},
            i, ii = my_segments.length,
            my_split,
            intermediate_calls = 3,
            app_name,
            const_data = {};

        for (i = 0; i < ii; i++) {
            my_split = my_segments[i].split("=");
            left = window.decodeURIComponent(my_split[0]);
            right = window.decodeURIComponent(my_split[1]);
            my_query[left] = right;
        }

        app_name = my_query.app;
        load_css(my_query.css, intermediate_complete);
        load_js(my_query.js, intermediate_complete);
        load_const(my_query["const"], function (_const_data) {
            const_data = _const_data;
            intermediate_complete();
        });

        function intermediate_complete() {
            intermediate_calls--;

            if (intermediate_calls === 0) {
                fully_complete();
            }
        }

        function fully_complete() {
            var fully_loaded_css = ".pre-loaded { display: none !important; }";
            var element = document.createElement("style");
            element.setAttribute("type", "text/css");
            document.getElementsByTagName("head")[0].appendChild(element);

            if (element.styleSheet) {
                element.styleSheet.cssText = fully_loaded_css;
            } else {
                element.innerText = fully_loaded_css;
            }

            angular.module(app_name + ".constants")
                .constant("Const", const_data);

            angular.bootstrap(document, [app_name]);
        }
    }

    function load_js(src, loaded_cb) {
        var element = document.createElement("script");
        attach_on_load(element, loaded_cb);
        element.src = src;
        document.body.appendChild(element);
    }

    function load_css(src, loaded_cb) {
        var element = document.createElement("link");
        attach_on_load(element, loaded_cb);
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("href", src);
        document.getElementsByTagName("head")[0].appendChild(element);
    }

    function load_const(src, loaded_cb) {
        createHttpBackend("GET", src, function (response) {
            if (isString(response)) {
                response = response.replace(PROTECTION_PREFIX, "");

                if (JSON_START.test(response) && JSON_END.test(response)) {
                    response = fromJson(response);
                }
            }

            loaded_cb(response);
        });
    }

    function attach_event(src, event, callback) {
        if (src.addEventListener) {
            src.addEventListener(event, callback, false);
        } else if (src.attachEvent) {
            src.attachEvent("on" + event, callback);
        } else {
            src["on" + event] = callback;
        }
    }

    function attach_on_load(el, callback) {
        var done = false;

        attach_event(el, "load", my_load);
        attach_event(el, "readystatechange", my_load);

        function my_load() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;

                callback();
            }
        }
    }

    function createHttpBackend(method, url, callback) {
        var xhr = createXhr(method);
        xhr.open(method, url, true);
        xhr.setRequestHeader("Accept", "application/json, text/plain, */*");

        xhr.onreadystatechange = function () {
            if (xhr && xhr.readyState == 4) {
                var response = null;
                response = ("response" in xhr) ? xhr.response : xhr.responseText;
                xhr = null;
                callback(response);
            }
        };

        xhr.send(null);
    }

    function createXhr(method) {
        if (msie <= 8 && (!method.match(/^(get|post|head|put|delete|options)$/i) ||
            !window.XMLHttpRequest)) {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            return new window.XMLHttpRequest();
        }

        throw "This browser does not support XMLHttpRequest.";
    }

    function urlResolve(url, base) {
        var href = url;

        if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute("href", href);

        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === "/")
                ? urlParsingNode.pathname
                : "/" + urlParsingNode.pathname
        };
    }

    function fromJson(json) {
        return isString(json)
            ? JSON.parse(json)
            : json;
    }

    function int(str) {
        return window.parseInt(str, 10);
    }

    function lowercase(string) {
        return isString(string) ? string.toLowerCase() : string;
    }

    function isString(value) {
        return typeof value === "string";
    }
})(window, document);
