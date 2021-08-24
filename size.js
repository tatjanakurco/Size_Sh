$("body").on("change", "input.SIZE_SH:checkbox", function ()
    {
        var id = $(this).attr("data-id");
        var size = $(this).attr("data-prop");
        var data = { id: id, code: "SIZE_SH", size: size };
        if ($(this).is(":checked"))
        {
            data["value"] = ["Y"];
            send("edit_one", data);
            $(this)
                .next()
                .addClass("sold_size");
        } else
        {
            data["value"] = ["N"];
            send("edit_one", data);
            $(this)
                .next()
                .removeClass("sold_size");
        }
    });
