describe("apploader.spec.js", function () {
    it(": big long test", function () {
        var xhr_mock = jasmine.createSpyObj("xhr", ["open", "setRequestHeader", "onreadystatechange", "send"]);
        var xhr_mock_class = function () {
        };
        xhr_mock_class.prototype = xhr_mock;
        spyOn(window, "XMLHttpRequest").and.returnValue(xhr_mock);

        var angular_mock = jasmine.createSpyObj("angular", ["module", "bootstrap"]);
        var module_mock = jasmine.createSpyObj("module", ["constant"]);
        angular_mock.module.and.returnValue(module_mock);
        window.angular = angular_mock;

        var element = document.createElement("script");
        element.setAttribute("id", "apploader");
        element.setAttribute("src", "/src-reference.js?js=a&css=b&const=c&app=d");
        document.body.appendChild(element);

        fireEvent(window, "load");

        // Test css added
        var link = document.getElementsByTagName("head")[0].getElementsByTagName("link")[0];
        var response = link.getAttribute("href");
        expect(response).toBe("b");

        // Test js added
        var scripts = document.body.getElementsByTagName("script");
        var script = scripts[scripts.length - 1];
        var response = script.getAttribute("src");
        expect(response).toBe("a");

        // Test const called
        expect(xhr_mock.open).toHaveBeenCalled();
        expect(xhr_mock.setRequestHeader).toHaveBeenCalledWith("Accept", "application/json, text/plain, */*");

        // Fire all 3 as being done
        fireEvent(link, "load");
        fireEvent(script, "load");
        xhr_mock.readyState = 4;
        xhr_mock.response = '{"Params":["Alfa","Bravo"]}';
        xhr_mock.onreadystatechange();

        expect(angular_mock.module).toHaveBeenCalledWith("d.constants");
        expect(module_mock.constant).toHaveBeenCalledWith("Const", {"Params": ["Alfa", "Bravo"]});
        expect(angular_mock.bootstrap).toHaveBeenCalledWith(document, ["d"]);
    });

    function fireEvent(element, event) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true);
        return !element.dispatchEvent(evt);
    }
});
