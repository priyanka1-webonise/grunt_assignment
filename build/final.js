jQuery(function( $ ){

    $(document).ready(function(e){

        //campaign show store
        var color_code = $(".show_store_banner_color").data('menu-color');
        $(".show_store_banner_color").css({'background-color': color_code})

        $('#campaign_search').submit(function () {
            $.get(this.action, $(this).serialize(), null, 'script');
            return false;
        });

        //my store

        $('#store_search').submit(function () {
            $.get(this.action, $(this).serialize(), null, 'script');
            return false;
        });

        $('.create_store').on('click', function(){
            if($('.create_store').data('campaign-count') <= 0){
                confirm("Please create at least one campaign to make use of the store function ");
                return false;
            }
        });

    });


//form for store

    var text_color;
    var menu_color;

    if(!($("#campaign_store_text_color").data('text-color')))  {
        text_color = '#ffffff';
        $("#campaign_store_text_color").attr("value","rgb(255, 255, 255)");
    }

    if(!($("#picker").data('menu-color')))  {
        menu_color = '#ff8800';
        $("#picker").attr("value","#ff8800");
    }

    $("#picker").spectrum({
        color: menu_color,
        allowEmpty:true
    });

    $("#campaign_store_text_color").spectrum({
        color: text_color,
        allowEmpty:true
    });

    $("#picker").on("change", function(){
        if ($(this).siblings().length > 0){
            var color_val = $(this).siblings().find(".sp-preview-inner").attr('style').split(":")[1].split(";")[0].replace(" ","");
            $("#picker").val(color_val);
        }
    });

    $(".cover_imd_details").tooltipster({
        theme: '.tooltip_content'
    });
    $(".cover_imd_details_style").tooltipster('update',$(".img_details_style_info").html());

    $("#campaign_store_text_color").on("change", function(){
        if ($(this).siblings().length > 0){
            var color_val = $(this).siblings().find(".sp-preview-inner").attr('style').split(":")[1].split(";")[0].replace(" ","");
            $("#campaign_store_text_color").val(color_val);
        }
    });
    if(document.getElementById("selected_campaigns")){
        var campaign_ids = $('#selected_campaigns').val().split(",");
    }else
    {
        var campaign_ids = [];
    }

    $(document).on("click", ".campaign_store_campaigns", function(){
        if($(this).is(":checked"))
            campaign_ids.push($(this).attr('value'));
        else{
            Array.prototype.remove = function(el) {
                return this.splice(this.indexOf(el), 1);
            }
            campaign_ids.remove($(this).attr('value'));
        }
        $('#selected_campaigns').val(campaign_ids);
        var optionExists = ($("#filter option[value='selected']").length > 0);
        if($('#selected_campaigns').val() != "")
        {
            if(!optionExists)
            {
                $("#filter").append("<option value='selected'>Selected Campaigns</option>");
            }
        }
        else
        {
            $("#filter option[value='selected']").remove();
            $("#filter").change();
        }

    });

    $(document).on("click",".campaignSearchBtn", function(){
        var search_value = $(".search-query").val();
        var url = $(".filter").data('store-path');
        $.ajax({
            url: url,
            method:'GET',
            data:{search:search_value},
            dataType:'script',
            success:function(result){
            },
            error:function(data){
                console.log("failure");
            }
        });
    });

    $(document).on('change','.productFilter',function(){
        var filter_value = $("#filter").val();
        var url = $(".filter").data('store-path');
        $.ajax({
            url: url,
            method:'GET',
            data:{filter:filter_value, campaign_ids:$("#selected_campaigns").val()},
            dataType:'script',
            success:function(result){
            },
            error:function(data){
                console.log("failure");
            }
        });
    });

    $('#add_logo').on('change', function() {
        $('#add_logo').css('visibility', 'visible');
//        $('label.change_image').hide();
    });


    $('#campaign_list input[type=checkbox]').on('click', function(e) {
        $(e.currentTarget).closest('li').toggleClass('selected')
    });

    $(document).on('submit',function(){
        var flag = false;
        $("input:checkbox").each(function(){
            if($(this).is(":checked") )
                flag = true;
        });

        if($(flag == false && "#selected_campaigns").val() == ""){
            alert("Please link at least one campaign");
            $(this).find('button.campaigner').prop('disabled', false);
            return false;
        }
        var arr = [];
        if (document.getElementById("campaign_store_name")) {
            var campaign_store_name = new LiveValidation('campaign_store_name', {onlyOnSubmit: true } );
            campaign_store_name.add( Validate.Presence,{failureMessage:"Please enter name"});
            arr.push(campaign_store_name);
        }

        if (document.getElementById("logo_file")) {
            var logo_file = new LiveValidation('logo_file', {onlyOnSubmit: true } );
            logo_file.add(Validate.Format,{ pattern: /\.(gif|jpg|jpeg|png)$/i, failureMessage: "Only jpg, jpeg, png, gif allowed." });
            arr.push(logo_file);
        }
        if (document.getElementById("add_logo")) {
            var add_logo = new LiveValidation('add_logo', {onlyOnSubmit: true } );
            add_logo.add(Validate.Format,{ pattern: /\.(gif|jpg|jpeg|png)$/i, failureMessage: "Only jpg, jpeg, png, gif allowed." });
            arr.push(add_logo);
        }
        var areAllValid = LiveValidation.massValidate( arr )
        if(areAllValid == false){
            $(this).find('button.campaigner').prop('disabled', false);
            return false; //do not continue if any field is invalid
        }
        $(this).find('button.campaigner').prop('disabled', true);
    })
})
jQuery(function( $ ){

    $(document).ready(function(e){

        //campaign show store
        var color_code = $(".show_store_banner_color").data('menu-color');
        $(".show_store_banner_color").css({'background-color': color_code})

        $('#campaign_search').submit(function () {
            $.get(this.action, $(this).serialize(), null, 'script');
            return false;
        });

        //my store

        $('#store_search').submit(function () {
            $.get(this.action, $(this).serialize(), null, 'script');
            return false;
        });

        $('.create_store').on('click', function(){
            if($('.create_store').data('campaign-count') <= 0){
                confirm("Please create at least one campaign to make use of the store function ");
                return false;
            }
        });

    });


//form for store

    var text_color;
    var menu_color;

    if(!($("#campaign_store_text_color").data('text-color')))  {
        text_color = '#ffffff';
        $("#campaign_store_text_color").attr("value","rgb(255, 255, 255)");
    }

    if(!($("#picker").data('menu-color')))  {
        menu_color = '#ff8800';
        $("#picker").attr("value","#ff8800");
    }

    $("#picker").spectrum({
        color: menu_color,
        allowEmpty:true
    });

    $("#campaign_store_text_color").spectrum({
        color: text_color,
        allowEmpty:true
    });

    $("#picker").on("change", function(){
        if ($(this).siblings().length > 0){
            var color_val = $(this).siblings().find(".sp-preview-inner").attr('style').split(":")[1].split(";")[0].replace(" ","");
            $("#picker").val(color_val);
        }
    });

    $(".cover_imd_details").tooltipster({
        theme: '.tooltip_content'
    });
    $(".cover_imd_details_style").tooltipster('update',$(".img_details_style_info").html());

    $("#campaign_store_text_color").on("change", function(){
        if ($(this).siblings().length > 0){
            var color_val = $(this).siblings().find(".sp-preview-inner").attr('style').split(":")[1].split(";")[0].replace(" ","");
            $("#campaign_store_text_color").val(color_val);
        }
    });
    if(document.getElementById("selected_campaigns")){
        var campaign_ids = $('#selected_campaigns').val().split(",");
    }else
    {
        var campaign_ids = [];
    }

    $(document).on("click", ".campaign_store_campaigns", function(){
        if($(this).is(":checked"))
            campaign_ids.push($(this).attr('value'));
        else{
            Array.prototype.remove = function(el) {
                return this.splice(this.indexOf(el), 1);
            }
            campaign_ids.remove($(this).attr('value'));
        }
        $('#selected_campaigns').val(campaign_ids);
        var optionExists = ($("#filter option[value='selected']").length > 0);
        if($('#selected_campaigns').val() != "")
        {
            if(!optionExists)
            {
                $("#filter").append("<option value='selected'>Selected Campaigns</option>");
            }
        }
        else
        {
            $("#filter option[value='selected']").remove();
            $("#filter").change();
        }

    });

    $(document).on("click",".campaignSearchBtn", function(){
        var search_value = $(".search-query").val();
        var url = $(".filter").data('store-path');
        $.ajax({
            url: url,
            method:'GET',
            data:{search:search_value},
            dataType:'script',
            success:function(result){
            },
            error:function(data){
                console.log("failure");
            }
        });
    });

    $(document).on('change','.productFilter',function(){
        var filter_value = $("#filter").val();
        var url = $(".filter").data('store-path');
        $.ajax({
            url: url,
            method:'GET',
            data:{filter:filter_value, campaign_ids:$("#selected_campaigns").val()},
            dataType:'script',
            success:function(result){
            },
            error:function(data){
                console.log("failure");
            }
        });
    });

    $('#add_logo').on('change', function() {
        $('#add_logo').css('visibility', 'visible');
//        $('label.change_image').hide();
    });


    $('#campaign_list input[type=checkbox]').on('click', function(e) {
        $(e.currentTarget).closest('li').toggleClass('selected')
    });

    $(document).on('submit',function(){
        var flag = false;
        $("input:checkbox").each(function(){
            if($(this).is(":checked") )
                flag = true;
        });

        if($(flag == false && "#selected_campaigns").val() == ""){
            alert("Please link at least one campaign");
            $(this).find('button.campaigner').prop('disabled', false);
            return false;
        }
        var arr = [];
        if (document.getElementById("campaign_store_name")) {
            var campaign_store_name = new LiveValidation('campaign_store_name', {onlyOnSubmit: true } );
            campaign_store_name.add( Validate.Presence,{failureMessage:"Please enter name"});
            arr.push(campaign_store_name);
        }

        if (document.getElementById("logo_file")) {
            var logo_file = new LiveValidation('logo_file', {onlyOnSubmit: true } );
            logo_file.add(Validate.Format,{ pattern: /\.(gif|jpg|jpeg|png)$/i, failureMessage: "Only jpg, jpeg, png, gif allowed." });
            arr.push(logo_file);
        }
        if (document.getElementById("add_logo")) {
            var add_logo = new LiveValidation('add_logo', {onlyOnSubmit: true } );
            add_logo.add(Validate.Format,{ pattern: /\.(gif|jpg|jpeg|png)$/i, failureMessage: "Only jpg, jpeg, png, gif allowed." });
            arr.push(add_logo);
        }
        var areAllValid = LiveValidation.massValidate( arr )
        if(areAllValid == false){
            $(this).find('button.campaigner').prop('disabled', false);
            return false; //do not continue if any field is invalid
        }
        $(this).find('button.campaigner').prop('disabled', true);
    })
})