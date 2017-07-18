(function() {
    $.ajax({
        url: "https://bots.botplatform.io/vault/mapping/"+window.location.hostname,
        method: "GET",
        success: function(data){
            if(data.success){
                var body = $('body');
                body.append($('<script />').attr('src','https://chat.botplatform.io/plugin-v2.js?bot='+data.data.botId+"&init=true"+(data.data.botId==="bot_1494260176641"?"&view=compact":"")).attr("type","text/javascript"));
            }
        }
    });
})();