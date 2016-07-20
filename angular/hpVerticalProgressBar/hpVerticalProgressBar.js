angular.module("hpulse.verticalprogressbar")
    .directive("hpVerticalProgressBar", [
        function () {
            return {
                link: link
            };

            // -- Functions -- //

            function link(scope, element, attrs) {
                var color_el;
                color_el = angular.element("<div></div>");
                color_el.css("position", "absolute");
                color_el.css("top", "100%");
                color_el.css("right", "0");
                color_el.css("bottom", "0");
                color_el.css("left", "0");

                element.css("position", "relative");
                element.append(color_el);

                scope.$watch(attrs["progress"], do_adjust);

                // -- Functions -- //

                function do_adjust(new_value) {
                    var progress = new_value;
                    var f_progress = (progress / 100);
                    var h_progress = Math.ceil((1 - f_progress) * element[0].offsetHeight);

                    color_el.css("top", h_progress + "px");
                }
            }
        }]);
