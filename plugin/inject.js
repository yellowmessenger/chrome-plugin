(function() {
    $.ajax({
        url: "https://bots.botplatform.io/vault/domain/"+window.location.hostname,
        method: "GET",
        success: function(data){
            if(data.success){
                var body = $('body');
                body.append($('<script />').attr('src','https://chat.botplatform.io/plugin-v2.js?bot='+data.data.botId+"&init=true").attr("type","text/javascript"));
            }
        }
    });
})();