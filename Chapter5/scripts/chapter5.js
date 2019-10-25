ko.bindingHandlers.slideVisible = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        $(element).toggle(valueUnwrapped);
    },
    update: function (element, valueAccessor, allBindings) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var duration = allBindings.get('slideDuration') || 400;
        if (valueUnwrapped == true)
            $(element).slideDown(duration);
        else
            $(element).slideUp(duration);
    }
};
ko.bindingHandlers.hasFocus = {
    init: function (element, valueAccessor) {
        $(element).focus(function () {
            var value = valueAccessor();
            value(true);
        });
        $(element).blur(function () {
            var value = valueAccessor();
            value(false);
        });
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        if (valueUnwrapped)
            element.focus();
        else
            element.blur();
    }
};
