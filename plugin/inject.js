(function() {
    $.ajax({
        url: "https://bots.botplatform.io/vault/mapping/"+window.location.hostname,
        method: "GET",
        success: function(data){
            if(data.success){
                var body = $('body');
                // Don't show at login
                if((window.location.toString().indexOf("/B2C_CustomLogin.aspx") !== -1 || window.location.toString().toLowerCase().indexOf("logout") !== -1 ) && data.data.botId==="bot_1494260176641"){
                    return;
                }

                if(document.referrer.toString().indexOf("/B2C_CustomLogin.aspx") !== -1 && data.data.botId==="bot_1494260176641"){
                    body.append($('<script />').attr('src','https://chat.botplatform.io/plugin-v2.js?bot='+data.data.botId+"&init=true&open=false&clear=true"+(data.data.botId==="bot_1494260176641"?"&view=compact":"")).attr("type","text/javascript"));
                    return;
                }

                if(data.data.botId==="bot_1494260176641"){
                    var open = false;
                    var search = location.search.substring(1);
                    if(search){
                        var params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
                        open = !!(params && params.bot_event);
                    }
                    body.append($('<script />').attr('src','https://chat.botplatform.io/plugin-v2.js?bot='+data.data.botId+"&init=true&open="+open+""+(data.data.botId==="bot_1494260176641"?"&view=compact":"")).attr("type","text/javascript"));
                    return;
                }

                body.append($('<script />').attr('src','https://chat.botplatform.io/plugin-v2.js?bot='+data.data.botId+"&init=true"+(data.data.botId==="bot_1494260176641"?"&view=compact":"")).attr("type","text/javascript"));
            }
        }
    });
})();